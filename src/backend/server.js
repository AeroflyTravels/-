const express = require("express");
const cors = require("cors");
const fs = require("fs");
const xlsx = require("xlsx");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to handle JSON requests

const FILE_PATH = "./visa_applications.xlsx"; // Excel file location

// Function to save form data to Excel
const saveToExcel = (data) => {
    let workbook;
    let worksheet;

    // If file exists, read it; otherwise, create a new one
    if (fs.existsSync(FILE_PATH)) {
        workbook = xlsx.readFile(FILE_PATH);
        worksheet = workbook.Sheets["Applications"] || xlsx.utils.aoa_to_sheet([]);
    } else {
        workbook = xlsx.utils.book_new();
        worksheet = xlsx.utils.aoa_to_sheet([]);
    }

    // Convert worksheet to JSON
    let sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

    // If file is new, add headers
    if (sheetData.length === 0) {
        sheetData.push([
            "First Name", "Last Name", "Email", "Phone", 
            "Passport Number", "Date of Issue", "Date of Expiry", "Place of Issue",
            "Destination", "Visa Type", "Travel Date", "Duration of Stay", "Notes"
        ]);
    }

    // Add new row
    sheetData.push([
        data.firstName, data.lastName, data.email, data.phone,
        data.passportNumber, data.dateOfIssue, data.dateOfExpiry, data.placeOfIssue,
        data.destination, data.visaType, data.travelDate, data.duration, data.notes
    ]);

    // Convert back to worksheet and save
    const newWorksheet = xlsx.utils.aoa_to_sheet(sheetData);
    workbook.Sheets["Applications"] = newWorksheet;
    xlsx.writeFile(workbook, FILE_PATH);
};

// API route to handle form submissions
app.post("/submit", (req, res) => {
    const formData = req.body;
    
    try {
        saveToExcel(formData);
        res.status(200).json({ message: "Application saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save application" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

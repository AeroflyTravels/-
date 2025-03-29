import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Define TypeScript types
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string; // Optional property for image
}

// Sample blog data (You can replace this with real blog data later)
const posts: BlogPost[] = [
  {
    id: 1,
    title: "10 Must-Visit Destinations in 2025",
    content: `
# **10 Must-Visit Destinations in 2025: Where to Go Next?**

If you're planning your next big adventure, 2025 is shaping up to be an **epic year for travel**. Whether you crave **breathtaking landscapes, cultural experiences, or futuristic cities**, these destinations are set to be **the hottest spots** next year.  

---

## **1. Kyoto, Japan – A Journey Through Time** 🇯🇵  

With **Expo 2025 happening in Osaka**, Kyoto is the perfect place to soak in Japan’s rich traditions before experiencing the future at the expo. Imagine **wandering through bamboo forests, sipping matcha in ancient tea houses, and marveling at centuries-old temples**—Kyoto is simply magical.  

### **Must-Do in Kyoto:**  
✔️ Experience a **traditional tea ceremony**  
✔️ Walk through the **Fushimi Inari Shrine’s torii gates**  
✔️ Witness the **cherry blossoms in spring**  

🚄 **Bonus:** It’s just a quick bullet train ride from Osaka!  

---

## **2. Dubai, UAE – The City of the Future** 🇦🇪  

Dubai never stops **pushing the limits of innovation**, and 2025 will be no different. With projects like the **Moon Resort** (yes, a resort that mimics the Moon!) and **sky-high infinity pools**, this city feels straight out of a sci-fi movie.  

### **Must-Do in Dubai:**  
✔️ Visit the **Museum of the Future**  
✔️ Swim in the **Aura Skypool**, the world’s highest infinity pool  
✔️ Dine in **Atlantis The Royal’s underwater restaurant**  

🌟 **Why 2025?** Because Dubai keeps outdoing itself every year!  

---

## **3. Greenland – The Untouched Beauty** 🇬🇱  

For those seeking **raw, untouched nature**, Greenland is a dream destination. With its **majestic glaciers, colorful villages, and the Northern Lights**, it’s a paradise for adventurers and photographers alike.  

### **Must-Do in Greenland:**  
✔️ Explore the **Ilulissat Icefjord**  
✔️ Go **dog sledding** across the Arctic tundra  
✔️ Witness the **Aurora Borealis**  

---

## **4. Rome, Italy – Timeless Charm** 🇮🇹  

Rome is always a good idea, but 2025 brings new reasons to visit. With **restorations of ancient landmarks** and **culinary festivals**, the Eternal City is ready to enchant travelers once again.  

### **Must-Do in Rome:**  
✔️ Tour the **Colosseum** and **Roman Forum**  
✔️ Toss a coin in the **Trevi Fountain**  
✔️ Indulge in authentic **Italian gelato**  

---

## **5. Cape Town, South Africa – A Blend of Nature and Culture** 🇿🇦  

Cape Town offers a unique mix of **stunning landscapes** and **vibrant culture**. From the iconic **Table Mountain** to the bustling **V&A Waterfront**, it’s a destination that has it all.  

### **Must-Do in Cape Town:**  
✔️ Hike up **Table Mountain**  
✔️ Visit **Robben Island**  
✔️ Explore the **Cape Winelands**  

---

## **6. Reykjavik, Iceland – Land of Fire and Ice** 🇮🇸  

Iceland’s capital is the gateway to some of the world’s most **breathtaking natural wonders**. From **geysers** to **volcanoes**, it’s a land of contrasts that will leave you in awe.  

### **Must-Do in Reykjavik:**  
✔️ Relax in the **Blue Lagoon**  
✔️ Visit the **Golden Circle**  
✔️ Chase **waterfalls** like Gullfoss and Seljalandsfoss  

---

## **7. Vancouver, Canada – Nature Meets Urban Life** 🇨🇦  

Vancouver is a city where **urban sophistication** meets **natural beauty**. With its **mountains, beaches, and vibrant neighborhoods**, it’s a must-visit for 2025.  

### **Must-Do in Vancouver:**  
✔️ Walk across the **Capilano Suspension Bridge**  
✔️ Explore **Stanley Park**  
✔️ Ski in **Whistler**, just a short drive away  

---

## **8. Buenos Aires, Argentina – The Paris of South America** 🇦🇷  

Known for its **tango, architecture, and cuisine**, Buenos Aires is a city that captivates the soul.  

### **Must-Do in Buenos Aires:**  
✔️ Watch a **tango show**  
✔️ Stroll through the **Recoleta Cemetery**  
✔️ Savor a traditional **Argentinian steak**  

---

## **9. Sydney, Australia – Iconic Landmarks and Beaches** 🇦🇺  

Sydney is a city that needs no introduction. With its **Opera House**, **Harbour Bridge**, and **Bondi Beach**, it’s a destination that never goes out of style.  

### **Must-Do in Sydney:**  
✔️ Climb the **Sydney Harbour Bridge**  
✔️ Relax at **Bondi Beach**  
✔️ Take a ferry to **Manly Beach**  

---

## **10. Santorini, Greece – A Romantic Escape** 🇬🇷  

Santorini’s **whitewashed buildings and blue-domed churches** are the stuff of postcards. It’s the perfect destination for a romantic getaway.  

### **Must-Do in Santorini:**  
✔️ Watch the **sunset in Oia**  
✔️ Swim in the **Aegean Sea**  
✔️ Explore the **ancient ruins of Akrotiri**  

---

Start planning your 2025 adventures now and make it a year to remember!  
    `,
    author: "Rudr",
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "Travel Tips",
    image: "/path-to-travel-image.jpg",
  },
  {
      id: 2,
      title: "10 Must-Visit Destinations in 2025",
      content: ``,
      author: "Rudr",
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: "Travel Tips",
      image: "/path-to-travel-image.jpg",
  },
  {
    id: 3,
    title: "10 Must-Visit Destinations in 2025",
    content: ``,
    author: "Rudr",
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "Travel Tips",
    image: "/path-to-travel-image.jpg",
  },
  {
    id: 4,
    title: "10 Must-Visit Destinations in 2025",
    content: ``,
    author: "Rudr",
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "Travel Tips",
    image: "/path-to-travel-image.jpg",
  },
  {
    id: 5,
    title: "10 Must-Visit Destinations in 2025",
    content: ``,
    author: "Rudr",
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "Travel Tips",
    image: "/path-to-travel-image.jpg",
  },
  {
    id: 6,
    title: "10 Mst-Visions in 2025",
    content: ``,
    author: "Rudr",
    date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: "Travel Tips",
    image: "/path-to-travel-image.jpg",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id)); // Ensure it's a number


  if (!post) {
    return <h1 className="text-center text-2xl font-bold mt-10">Post Not Found</h1>;
  }

  return (
    <div className="blog-container">
      <div className="blog-content">
        {/* Blog Title */}
        <h1 className="blog-title">{post.title}</h1>
        <p><strong>By {post.author} | {post.date}</strong></p>
        
        {/* Image Section */}
        <div className="blog-image">
          <img src={post.image} alt="Travel" />
        </div>
          <div className="prose prose-lg mt-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

      </div>
    </div>
  );
};

export default BlogPost;

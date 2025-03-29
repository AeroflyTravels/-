import { useParams } from "react-router-dom";

const ServiceDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600">
          More details about {title}. Here, you can provide in-depth information about this service.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;

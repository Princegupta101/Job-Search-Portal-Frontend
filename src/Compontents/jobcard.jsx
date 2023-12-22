import { useNavigate } from "react-router-dom"

function JobCard ({data}) {
  const { title, company, location, salary, description } = data;
  const navigate= useNavigate();
  return (
    <div className="bg-indigo-900 rounded-lg shadow-md p-6">
      <h2 className="text-white text-xl font-semibold mb-2"> {title}</h2>
      <p className="text-gray-300 mb-2">{company} - {location}</p>
      <p className="text-gray-400 mb-4">{salary}</p>
      <p className="text-gray-200">{description}</p>
      <button
        onClick={()=>navigate("/joblist/description/")} 
        className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Apply Now
      </button>
    </div>
    
  );
}

export default JobCard;
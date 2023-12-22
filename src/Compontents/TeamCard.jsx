function TeamCard({Name,dev,description,Id}){
    return(
        <div key={Id} className="bg-indigo-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-300">{Name}</h3>
            <p className="text-gray-400">{dev}</p>
            <p className="text-gray-200 mt-2">
                {description}
            </p>
        </div>
    )
}
export default TeamCard;
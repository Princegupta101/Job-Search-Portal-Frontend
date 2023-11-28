function TeamCard({Name,dev,description,Id}){
    return(
            <div key={Id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{Name}</h3>
                <p className="text-gray-700">{dev}</p>
                <p className="text-gray-500 mt-2">
                    {description}
                </p>
        </div>
    )
}
export default TeamCard;
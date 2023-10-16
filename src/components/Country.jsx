export default function Country({data}){
    return(
        <div className="country-container">
            <img className="country-img" src={data.flags.png} />
            <div className="country-info bg-white flow">
                <h2 className="country-name fs-700 fw-800">{data.name.common}</h2>
                <p className="fw-600">Population: 
                    <span className="fw-300"> {data.population.toLocaleString()}</span>
                </p>
                <p className="fw-600">Region: 
                    <span className="fw-300"> {data.region}</span>
                </p>
                <p className="fw-600">Capital: 
                    <span className="fw-300"> {data.capital}</span>
                </p>
            </div>
        </div>
    )
}
import "./cards.css"

function card(probs) {
    return(
    <div className = "card" >
        <div className="image">
            <img src={probs.image} /> 
        </div>
       <h2>{probs.name}</h2>
       <p id="job-title"> - {probs.profession}</p>
       <p>{probs.bio}</p>
    </div>
    )
}

export default card
import { useState } from "react"
import CardDetails from "./CardDetails"

function HogCard({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    const { specialty, weight, greased, name, image, "highest medal achieved": medal } = hog

    const handleDetailsClick = () => {
        setShowDetails(!showDetails)
        console.log('clicked')
    }

    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                <img
                    src={image}
                    alt={`${name} piggie`}
                />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div>
            <button className="ui button" onClick={() => handleDetailsClick()}>{!showDetails ? "More details" : "Less details"}
            <span role="img" aria-label="snout">
            🐽
          </span>
          </button>
            <br />


            <CardDetails
                showDetails={showDetails}
                specialty={specialty}
                weight={weight}
                greased={greased}
                medal={medal}
            />
        </div>
    )
}

export default HogCard;

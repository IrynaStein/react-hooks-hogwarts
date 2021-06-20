function CardDetails({ greased, medal, showDetails, specialty, weight }) {

    function showMoreDetails() {
        if (showDetails) {
            return (
                <div className="extra content">
                    <p className="description">
                        <strong>medal:</strong> {medal}
                        <br/>
                        {greased? "greased" : "ungreased"}
                        <br/>
                        <strong>specialty:</strong> {specialty}
                        <br/>
                        <strong>weight:</strong> {weight}
                        <br />
                    </p>
                </div>

            )
        }
        else {
            return null
        }
    }

    return (
        <div>
            {showMoreDetails()}
        </div>

    )
}

export default CardDetails;
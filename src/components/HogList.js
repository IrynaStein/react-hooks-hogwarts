import HogCard from "./HogCard"
function HogList({ hogs }) {
    return (
        <div className="ui three stackable cards">
            {hogs.map((hog) => {
                return (
                    <HogCard
                        key={hog.name}
                        hog={hog}
                    />
                )
            })}
        </div>
    )
}

export default HogList;
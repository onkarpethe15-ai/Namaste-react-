import Cards from "./Cards"
import reslist from "../../utils/constant"
import { useState } from "react"
const Body = () => {
    const [state, setState] = useState(reslist)
    const top_rated = state.filter((res) => res.info.avgRating > 4)
    const handleTopRatedClick = () => {
        setState(top_rated)
    }
    return (
        <>
            <button onClick={handleTopRatedClick}>Top resturants</button>
            <div className="main-section">
                {state.map((res) => <Cards key={res.info.id} resdata={res} />)}
            </div>
        </>
    )
}
export default Body
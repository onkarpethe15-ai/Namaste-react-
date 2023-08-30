import Cards from "./Cards"
import reslist from "../../utils/constant"
import { useState } from "react"
const Body = () => {
    const [state, setState] = useState(reslist)
    const top_rated = state.filter((res) => res.info.avgRating > 4)
    const handleTopRatedClick = () => {
        setState(top_rated)
    }
    const handelsearch = () => {
        let input_text = document.getElementById('search-box').value
        if (input_text == '' || input_text == null || input_text == undefined) {
            setState(reslist)
        }
        else {
            const searched_restos = state.filter((res) => {
                return res.info.name[0].toLowerCase() == input_text[0].toLowerCase()
            })
            setState(searched_restos)
        }
    }
    return (
        <>
            <button onClick={handleTopRatedClick}>Top resturants</button>
            <input onInput={handelsearch} id="search-box" type="text" placeholder="search the restaurants" />

            <div className="main-section">
                {state.map((res) => <Cards key={res.info.id} resdata={res} />)}
            </div>
        </>
    )
}
export default Body
import api_url from "../../utils/constant"
import Cards from "./Cards"
import Shimmer from "./shimmer"
import { useState, useEffect } from "react"
const Body = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch_dat();
    }, [])
    const fetch_dat = async () => {
        let data = await fetch(api_url)
        let json = await data.json()
        const card = json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants
        // let ans = card.map((rest) => rest.info.avgRating)
        setState(card)
    }
    const top_rated = state.filter((res) => res.info.avgRating > 4)
    const handleTopRatedClick = () => {
        setState(top_rated)
    }
    const handelsearch = () => {
        let input_text = document.getElementById('search-box').value
        if (input_text == '' || input_text == null || input_text == undefined) {
            setState(state)
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
                {state.length == 0 ? <Shimmer /> : state.map((res) => <Cards key={res.info.id} resdata={res} />)}

                {/* {state.map((res) => <Cards key={res.info.id} resdata={res} />)} */}
            </div>
        </>
    )
}
export default Body
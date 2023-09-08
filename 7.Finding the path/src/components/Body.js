import api_url from "../../utils/constant"
import Cards from "./Cards"
import Shimmer from "./shimmer"
import { useState, useEffect } from "react"
const Body = () => {
    const [state, setState] = useState([])
    const [filteredarr, setfilteredarr] = useState()
    const [serachstate, setsearchstate] = useState("")
    useEffect(() => {
        fetch_dat();
    }, [])
    const fetch_dat = async () => {
        let data = await fetch(api_url)
        let json = await data.json()
        const card = json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants
        // let ans = card.map((rest) => rest.info.avgRating)
        setfilteredarr(card)
        setState(card)
    }
    const handleTopRatedClick = () => {
        const top_rated = state.filter((res) => res.info.avgRating > 4)
        setfilteredarr(top_rated)
    }
    const handelsearch = () => {
        const filterd_arr = state.filter((res) => {
            return res.info.name.toLowerCase().includes(serachstate.toLowerCase());
        })
        setfilteredarr(filterd_arr)
    }
    return (
        <>
            <button onClick={handleTopRatedClick}>Top resturants</button>
            <input value={serachstate} onInput={(e) => { setsearchstate(e.target.value) }} id="search-box" type="text" placeholder="search the restaurants" />
            <button onClick={handelsearch}>Serach the resto</button>
            <div className="main-section">
                {state.length == 0 ? <Shimmer /> : filteredarr.map((res) => <Cards key={res.info.id} resdata={res} />)}

                {/* {state.map((res) => <Cards key={res.info.id} resdata={res} />)} */}
            </div>
        </>
    )
}
export default Body
import api_url from "../../utils/constant"
import Cards from "./Cards"
import Shimmer from "./shimmer"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Usefetch from "../../utils/Usefetchapi"
import Checkonlinestatus from "../../utils/UseOnlinestatus"
const Body = () => {
    const [state, setState] = useState([])
    const [filteredarr, setfilteredarr] = useState()
    const [serachstate, setsearchstate] = useState("")
    useEffect(() => {
        fetch_dat();
    }, [])
    console.log(useEffect)
    const fetch_dat = async () => {
        let data = await fetch(api_url)
        let json = await data.json()
        const card = json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
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
    const status = Checkonlinestatus();
    if (status === false) {
        return <h1>opppssss you have not internet connect</h1>
    }
    return (
        <>
            <input className="m-4 p-4 border border-green-500"value={serachstate} onInput={(e) => { setsearchstate(e.target.value) }} type="text" placeholder="search the restaurants" />
            <button className="mx-3 px-4 py-3 bg-green-300" onClick={handelsearch}>Serach the resto</button>
            <button className="mx-3 px-4 py-3 bg-green-300" onClick={handleTopRatedClick}>Top resturants</button>
            <div className="flex flex-wrap">
                {state.length == 0 ? <Shimmer /> : filteredarr.map((res) => <Link to="/menu" key={res.info.id} ><Cards resdata={res} /></Link>)}

                {/* {state.map((res) => <Cards key={res.info.id} resdata={res} />)} */}
            </div>

        </>
    )
}
export default Body;
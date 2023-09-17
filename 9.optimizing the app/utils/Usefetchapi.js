import { useState, useEffect } from "react"
import api_url from "./constant"
const Usefetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
        data = await fetch(api_url)
        json = data.json()
        const card = json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants
        setData(card)
    }
    console.log('hello from unfecth')
    console.log(data)
    return data
}
export default Usefetch;
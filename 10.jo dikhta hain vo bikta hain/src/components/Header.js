import { LOGO_CDN } from "../../utils/static"
import { useState } from "react"
import { Link } from "react-router-dom"
import Checkonlinestatus from "../../utils/UseOnlinestatus"
const Header = () => {
    const [btntxt, setbtntxt] = useState('login')
    const handler = () => {
        btntxt == 'login' ? setbtntxt('logout') : setbtntxt('login');
    }
    const online_status = Checkonlinestatus()
    return (
        <div className="flex justify-between items-center bg-purple-500">
            <div><img className="w-40" src={LOGO_CDN} alt="" /></div>
            <div><ul className="flex my-10 mt-5 pa-30">
                <li className="px-4">online status {online_status ? "🟢" : "🔴"}</li>
                <li className="px-4" ><Link to="/grocessary">Grocessary</Link></li>
                <li className="px-4"><Link to="/">home</Link></li>
                <li className="px-4">About</li>
                <li className="px-4">contact</li>
                <li className="px-4">cart</li>
                <button onClick={handler}>{btntxt} </button>
            </ul>
            </div>
        </div>
    )
}
export default Header
import { LOGO_CDN } from "../../utils/static"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
    const [btntxt, setbtntxt] = useState('login')
    const handler = () => {
        btntxt == 'login' ? setbtntxt('logout') : setbtntxt('login');
    }
    return (
        <div className="header">
            <div><img className="logo-img" src={LOGO_CDN} alt="" /></div>
            <div><ul className="nav-items">
                <li><Link to="/">home</Link></li>
                <li>About</li>
                <li>contact</li>
                <li>cart</li>
                <button onClick={handler}>{btntxt} </button>
            </ul>
            </div>
        </div>
    )
}
export default Header
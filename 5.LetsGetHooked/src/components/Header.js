import { LOGO_CDN } from "../../utils/static"
const Header = () => {
    return (
        <div className="header">
            <div><img className="logo-img" src={LOGO_CDN} alt="" /></div>
            <div><ul className="nav-items">
                <li>home</li>
                <li>About</li>
                <li>contact</li>
                <li>cart</li>
            </ul></div>
        </div>
    )
}
export default Header
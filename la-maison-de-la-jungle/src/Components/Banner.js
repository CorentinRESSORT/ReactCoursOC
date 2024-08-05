import "../Style/Banner.css";
import logo from '../assets/logo.png'
function Banner()
{
    const title = "La maison de la jungle" ; 
    return (
        <div className="lmj-banner">
            <img src={logo} alt="La maison de la jugnle" className="lmj-img"/>
            <h1 classname="lmj-title">{title}</h1>
        </div>
    )
}

export default Banner;
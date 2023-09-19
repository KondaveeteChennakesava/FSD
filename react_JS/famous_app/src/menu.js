import { Link } from "react-router-dom";
function Menu(){
    return (
        <div>
            <Link to='/' className="link">Home</Link>
            <Link to='/About' className="link">About</Link>
            <Link to='/services' className="link">Services</Link>
            <Link to='/contact' className="link">Conatct</Link>
            <Link to='/trainees' className="link">Trainees</Link>
            <Link to='/hooks' className="link">Hooks</Link>
            <Link to='/Products' className="link">Products</Link>
            {/* <Link to='/events' className="link">Event</Link> */}
            {/* <Link to='/events1' className="link">Events1</Link> */}
        </div>
    )
}
export default Menu;
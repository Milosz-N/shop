import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import {ReactComponent as Logo} from "../../../assets/crown.svg"
import "../navigation/navigation.scss"
const Navigation = () =>{
    return(
   
    <Fragment>
 <div className="navigation">
      <Link className="nav-link" to="/">
        <div className="logo-container">
        <Logo className='logo'/>

        </div>
        </Link>

      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/sing-in">Sing in</Link>

      </div>
    </div>
          <Outlet/>

    </Fragment>
    )
  }

  export default Navigation
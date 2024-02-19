// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          .<GiHamburgerMenu className="h-logo" />
        </button>
      }
      className="popup-content"
      position="bottom-center"
    >
      {close => (
        <div className="popup">
          <button type="button" data-testid="closeButton">
            .<IoMdClose className="x" onClick={() => close()} />
          </button>

          <ul className="pop">
            <Link to="/">
              <li className="line">
                <AiFillHome />
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className="line">
                <BsInfoCircleFill />
                <p>About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header

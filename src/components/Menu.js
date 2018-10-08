import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/events">
            Events
          </Link>
        </li>
        <li><Link onClick={props.onToggleMenu} to="/catering">Catering</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/hot-sauce">Hot Sauce</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/sub10">Sub10 Golf</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/business-dev">Business Development</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/web-dev">Web Development</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/game-dev">Game Development</Link></li>
      </ul>
      {/* <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul> */}
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu

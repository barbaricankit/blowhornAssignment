import './header/header.css'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <div className="header">
      <h4 className="nav-option">nullBrains</h4>
      <div>
        <span className="nav-option text--purple">Home</span>
        <span className="nav-option">Features</span>
        <span className="nav-option">Blog</span>
        <span className="nav-option">Contact</span>
        <BsSearch className="nav-option" />
      </div>
      <div>
        <span className="nav-option">Sign In</span>
        <span className="nav-option btn--purple">Sign Up</span>
      </div>
    </div>
  )
}

export default Header

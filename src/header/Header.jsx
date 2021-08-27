import './header.css'
import { BsSearch } from 'react-icons/bs'
const Header = () => {
  return (
    <div className="header">
      <h4 className="nav-option text-gray">nullBrains</h4>
      <div>
        <span className="nav-option text--purple">Home</span>
        <span className="nav-option text-gray">Features</span>
        <span className="nav-option text-gray">Blog</span>
        <span className="nav-option text-gray">Contact</span>
        <BsSearch className="nav-option text-gray" />
      </div>
      <div>
        <span className="nav-option text-gray">Sign In</span>
        <span className="nav-option btn--purple">Sign Up</span>
      </div>
    </div>
  )
}

export default Header

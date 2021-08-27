import './footer.css'
import SocialMediaLinks from './SocialMediaLinks'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <span className="nav-option text-gray text--sm">About</span>
        <span className="nav-option text-gray text--sm">Blog</span>
        <span className="nav-option text-gray text--sm">Team</span>
        <span className="nav-option text-gray text--sm">Pricing</span>
        <span className="nav-option text-gray text--sm">Contact</span>
        <span className="nav-option text-gray text--sm">Terms</span>
      </div>
      <SocialMediaLinks />
      <p className="footer-desc text-gray text--sm">
        <AiOutlineCopyrightCircle /> 2021 SomeCompany, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

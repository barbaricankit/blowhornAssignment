import { SiFacebook } from 'react-icons/si'
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineDribbble,
} from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
const SocialMediaLinks = () => {
  return (
    <div className="social-links">
      <SiFacebook className="social-link" />
      <AiOutlineInstagram className="social-link" />
      <AiOutlineTwitter className="social-link" />
      <DiGithubBadge className="social-link" />
      <AiOutlineDribbble className="social-link" />
    </div>
  )
}

export default SocialMediaLinks

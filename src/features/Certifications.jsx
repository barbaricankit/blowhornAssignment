import './features.css'
import { FiAward } from 'react-icons/fi'
const Certifications = () => {
  return (
    <div className="feature">
      <FiAward className="feature-icon" />
      <p>Certifications</p>
      <p className="feature-desc">
        Each of our plan will provide you and your team with certifications
      </p>
    </div>
  )
}

export default Certifications

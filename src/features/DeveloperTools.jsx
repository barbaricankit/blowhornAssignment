import './features.css'
import { MdDeveloperMode } from 'react-icons/md'
const DeveloperTools = () => {
  return (
    <div className="feature">
      <MdDeveloperMode className="feature-icon" />
      <p>Developer Tools</p>
      <p className="feature-desc">
        Developer tools to help grow your application and keep it up-to-date
      </p>
    </div>
  )
}

export default DeveloperTools

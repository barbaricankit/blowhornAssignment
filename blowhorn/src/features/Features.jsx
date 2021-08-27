import BuildingBlocks from './BuildingBlocks'
import Bundles from './Bundles'
import Certifications from './Certifications'
import Coupons from './Coupons'
import DeveloperTools from './DeveloperTools'
import './features.css'
import Notifications from './Notifications'
const Features = () => {
  return (
    <div>
      <h3>Our Features</h3>
      <p>Check out our list of awesome features below.</p>
      <div className="features">
        <Certifications />
        <Notifications />
        <Bundles />
        <DeveloperTools />
        <BuildingBlocks />
        <Coupons />
      </div>
    </div>
  )
}

export default Features

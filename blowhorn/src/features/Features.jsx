import {
  BuildingBlocks,
  Bundles,
  Certifications,
  Coupons,
  DeveloperTools,
  Notifications,
} from '.'
import './features.css'

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

import { highlight1 } from '.'

const Details1 = () => {
  return (
    <div className="details1">
      <div className="details1-img">
        <img src={highlight1} alt="productivity boost" />
      </div>
      <div className="details1-details">
        <h1>Boost Productivity</h1>
        <p className="text-gray">
          Build an atmosphere that creates productivity in your organization and
          your company culture
        </p>
        <ul className="productivity-list text-gray">
          <li>Maximize productivity and growth</li>
          <li>Speed past your competition</li>
          <li>Learn the top techniques</li>
        </ul>
      </div>
    </div>
  )
}

export default Details1

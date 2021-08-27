import { highlight2 } from '.'

const Details2 = () => {
  return (
    <div className="details2">
      <div className="details2-details">
        <h3>Automated Tasks</h3>
        <p className="text-gray">
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul className="productivity-list text-gray">
          <li>Automated task management workflow</li>
          <li>Detailed analytics for your data</li>
          <li>Some awesome integrations</li>
        </ul>
      </div>
      <div className="details2-img">
        <img src={highlight2} alt="productivity boost" />
      </div>
    </div>
  )
}

export default Details2

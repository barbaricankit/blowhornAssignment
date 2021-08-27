import { workstation } from '.'
const WorkStation = () => {
  return (
    <div className="blog gaming-blog">
      <div className="gaming-blog-img">
        <img src={workstation} alt="video game" className="gaming" />
      </div>
      <div className="blog-details blog-border">
        <span className="inspiration-pill">INSPIRATION</span>
        <h5 className="blog-header">Best Workstations of the year</h5>
        <p className="blog-desc text--smr text-pd-bottom">
          Check out those inspiring workstations to get ideas on how to level-up
          your workstation.
        </p>
      </div>
    </div>
  )
}

export default WorkStation

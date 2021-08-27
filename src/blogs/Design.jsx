import { change_by_design } from '.'
const Design = () => {
  return (
    <div className="blog gaming-blog">
      <div className="gaming-blog-img">
        <img src={change_by_design} alt="video game" className="gaming" />
      </div>
      <div className="blog-details blog-border">
        <span className="design-pill">RESOURCES</span>
        <h5 className="blog-header">A Design Mind Set</h5>
        <p className="blog-desc text--smr text-pd-bottom">
          What does it mean to have a design mind-set? Learn how to improve your
          eye for design.
        </p>
      </div>
    </div>
  )
}

export default Design

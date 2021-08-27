import { food } from '.'
const Productivity = () => {
  return (
    <div className="blog gaming-blog">
      <div className="gaming-blog-img">
        <img src={food} alt="video game" className="gaming" />
      </div>
      <div className="blog-details blog-border">
        <span className="food-pill">FOOD</span>
        <h5 className="blog-header">Eating for Productivity</h5>
        <p className="blog-desc text--smr text-pd-bottom">
          Learn how to be more disciplined in your diet and how you can eat to
          maximize productivity.
        </p>
      </div>
    </div>
  )
}

export default Productivity

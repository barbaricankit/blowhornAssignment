import { lifestyle } from '.'
const HealthierLifestyle = () => {
  return (
    <div className="blog lifestyle-blog">
      <div className="lifestyle-blog-img">
        <img src={lifestyle} alt="orange" className="lifestyle" />
      </div>
      <div className="blog-details blog-blue">
        <span className="lifestyle-pill">LIFESTYLE</span>
        <h1 className="blog-header color-white">Healthier Lifestyle</h1>
        <p className="blog-desc color-white">
          Living a healthier lifestyle will help with your productivity and your
          mind-set.
        </p>
      </div>
    </div>
  )
}

export default HealthierLifestyle

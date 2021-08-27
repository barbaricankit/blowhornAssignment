import { designing } from '.'
const RefreshingDesign = () => {
  return (
    <div className="blog designing-blog">
      <div className="designing-blog-img">
        <img src={designing} alt="cup with a straw" className="designing" />
      </div>
      <div className="blog-details blog-pink">
        <span className="resource-pill">RESOURCES</span>
        <h1 className="blog-header color-white">Refreshing Designs</h1>
        <p className="blog-desc color-white">
          Quench satisfying designs to help you stir up emotion and tell a
          story.
        </p>
      </div>
    </div>
  )
}

export default RefreshingDesign

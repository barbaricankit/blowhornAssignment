import { gaming } from '.'
const GamingEvolution = () => {
  return (
    <div className="blog gaming-blog">
      <div className="gaming-blog-img">
        <img src={gaming} alt="video game" className="gaming" />
      </div>
      <div className="blog-details blog-violet">
        <span className="gaming-pill">ENTERTAINMENT</span>
        <h1 className="blog-header color-white">Gaming Evolution</h1>
        <p className="blog-desc color-white">
          Learn about the evolution of gaming and how it started a revolution.
        </p>
      </div>
    </div>
  )
}

export default GamingEvolution

import CompanyList from './CompanyList'
import Details1 from './Details1'
import Details2 from './Details2'
import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1 className="bold-text">Start Crafting Your</h1>
        <h1 className="text--purple">Next Great Idea</h1>
      </div>
      <div>
        <p className="desc text-gray">
          Simplifying the creation of landing pages, blog pages, application
          pages and so much more!
        </p>
      </div>

      <span className="parent-rel">
        <button className="btn--purple btn-oval">Purchase Now</button>
        <span className="btn--badge btn--green text--smr">only $15/mo</span>
      </span>
      <div className="text-gray text--sm mt-1">Learn More</div>
      <p className="mt-6 text-xsm text-bold">
        TRUSTED BY TOP-LEADING COMPANIES
      </p>
      <CompanyList />
      <div className="extra-details">
        <Details1 />
        <Details2 />
      </div>
    </div>
  )
}

export default Home

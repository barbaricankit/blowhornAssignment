import CompanyList from './CompanyList'
import './home.css'
const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1 className="">Start Crafting Your</h1>
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
    </div>
  )
}

export default Home

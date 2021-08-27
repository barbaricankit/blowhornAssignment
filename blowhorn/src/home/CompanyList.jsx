import disney_logo from './images/disney_logo.png'
import Google_logo from './images/Google_logo.png'
import HubSpot_logo from './images/HubSpot_logo.png'
import Shopify_logo from './images/Shopify_logo.svg'
import Slack_logo from './images/Slack_logo.png'
import YouTube_logo from './images/YouTube_logo.png'
const CompanyList = () => {
  console.log(window.location.href)
  return (
    <div className="companies">
      <img src={disney_logo} alt="Disney" className="disney_logo" />
      <img src={Google_logo} alt="Google" className="google-logo" />
      <img src={HubSpot_logo} alt="HubSpot" className="hubspot-logo" />
      <img src={Shopify_logo} alt="Shopify" className="shopify-logo" />
      <img src={Slack_logo} alt="Slack" className="slack-logo" />
      <img src={YouTube_logo} alt="YouTube" className="youtube-logo" />
    </div>
  )
}

export default CompanyList

import {
  disney_logo,
  Google_logo,
  HubSpot_logo,
  Shopify_logo,
  Slack_logo,
  YouTube_logo,
} from '.'

const CompanyList = () => {
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

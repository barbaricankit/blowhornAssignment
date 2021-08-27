import { AiOutlineTwitter } from 'react-icons/ai'
import { DiGithubBadge } from 'react-icons/di'
const Person = ({ id, src, name, designation }) => {
  return (
    <div key={id} className="person">
      <div className="avatar">
        <img src={src} alt={name} className="avatar-img" />
      </div>
      <div>
        <p>{name}</p>
        <p className="text--blue">{designation}</p>
        <div>
          <AiOutlineTwitter className="social-link" />
          <DiGithubBadge className="social-link" />
        </div>
      </div>
    </div>
  )
}

export default Person

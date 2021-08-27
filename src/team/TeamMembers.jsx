import { persons } from '.'
import Person from './Person'
import './team.css'
const TeamMembers = () => {
  return (
    <div>
      <h6>OUR TEAM</h6>
      <h3>An incredible team of amazing individuals</h3>
      <div className="persons">
        {persons.map(({ id, name, src, designation }) => (
          <Person id={id} src={src} name={name} designation={designation} />
        ))}
      </div>
    </div>
  )
}

export default TeamMembers

import { GamingEvolution, HealthierLifestyle, RefreshingDesign } from '.'
import './blog.css'
import Design from './Design'
import Productivity from './Productivity'
import WorkStation from './WorkStation'
const ProjectBlog = () => {
  return (
    <div>
      <h3>The Project Blog</h3>
      <p>Designs and layouts to help you with your app.</p>
      <div className="blogs">
        <RefreshingDesign />

        <HealthierLifestyle />
        <GamingEvolution />
        <WorkStation />
        <Productivity />
        <Design />
      </div>
    </div>
  )
}

export default ProjectBlog

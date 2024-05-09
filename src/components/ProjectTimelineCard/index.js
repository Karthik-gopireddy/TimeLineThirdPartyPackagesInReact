// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="projectCardContainer">
      <img src={imageUrl} alt="project" className="projectImage" />
      <div className="projectTitleAndDurationContainer">
        <h1 className="projectTitle">{projectTitle}</h1>
        <div className="durationContainer">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="projectDescription">{description}</p>
      <a href={projectUrl} className="visitLink">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

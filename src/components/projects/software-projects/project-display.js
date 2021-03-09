import React from "react"
import ShowMoreText from 'react-show-more-text'

function ShowMore( {description} ) {

  const executeOnClick = (isExpanded) => {
      console.log(isExpanded)
  }

      return (
          <ShowMoreText
              lines={3}
              more='more'
              less='less'
              className='content-css'
              onClick={executeOnClick}
              expanded={false}
          >
            <p>{description}</p>
          </ShowMoreText>
      );
  }



const ProjectDisplay = ({ description, name, url, tech, gif }) => (
  <div>
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        {name}
      </a>{' '}
       : {tech}
    </div>
    <div>
      <ShowMore description={description}/>
      <p></p>
    </div>
    <div>
        {/* <img src={require(gif)} alt={name}/> */}
    </div>
    <hr
      style={{
        borderbottom: `1px solid #eee`,
        width: `100%`,
        margin: `1rem 0`,
      }}
    />
  </div>
)
export default ProjectDisplay

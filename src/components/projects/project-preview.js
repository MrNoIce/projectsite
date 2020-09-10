import React from "react"

const ProjectPreview = ({ description, name, url, image }) => (
    <div>
        <div>
            <p>{name}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <div>
            <p>{url}</p>
        </div>
        <div>
            <img alt={name} src={image} />
        </div>
        <hr style={{
          borderbottom: `1px solid #eee`,
          width: `100%`,
          margin: `1rem 0`,
        }}/>
    </div>
)
export default ProjectPreview

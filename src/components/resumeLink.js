import React from "react"
import JakeCVDOC from '../data/pdfs/JakeCVDOC.pdf'
import JakeScottCVweb from '../data/pdfs/JakeScottCVweb.pdf'


const ResumeDownload = () => (
    <>
      <a href={JakeCVDOC} target="_blank" rel="noreferrer" >
        Download text resume
      </a><br />
      <a href={JakeScottCVweb} target="_blank" rel="noreferrer" >
        Download pretty resume
      </a>
    </>
)
export default ResumeDownload

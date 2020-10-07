import React from "react"
import JakeCVDOC from "../data/pdfs/JakeCVDOC.pdf"
import JakeScottCVweb from "../data/pdfs/JakeScottCVweb.pdf"

const ResumeDownload = () => (
  <>
    <p>
      Pretty resume --{">"}{" "}
      <a href={JakeScottCVweb} target="_blank" rel="noreferrer">
        here
      </a><br />
      Plain pdf --{">"}{" "}
      <a href={JakeCVDOC} target="_blank" rel="noreferrer">
        here
      </a><br />
    </p>
  </>
)
export default ResumeDownload

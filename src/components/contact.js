import React from "react"
import { Icon } from "react-icons-kit"
import { github } from "react-icons-kit/icomoon/github"
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {mail4} from 'react-icons-kit/icomoon/mail4'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'

const Contact = () => (
  <div
    className={"contact"}
    style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `.125rem 0`,
    }}
  >
    <a href="https://github.com/MrNoIce" target="_blank" rel="noreferrer">
        <Icon size={30} icon={github} />
    </a>
    <a>
        <Icon size={30} icon={twitter} />
    </a>
    <a>
        <Icon size={30} icon={mail4} />
    </a>
    <a>
        <Icon size={30} icon={linkedin} />
    </a>
  </div>
)

export default Contact

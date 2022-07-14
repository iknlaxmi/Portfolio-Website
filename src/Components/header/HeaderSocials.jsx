
import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials
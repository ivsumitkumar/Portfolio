import React from 'react'
import {BsTwitter, BsInstagram, BsGithub,BsLinkedin ,BsDiscord } from 'react-icons/bs'
// import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://www.linkedin.com/in/ivsumitkumar" target="_blank" alt="Linkedin"><BsLinkedin/></a>
        </div>
        <div>
        <a href="https://www.github.com/ivsumitkumar" target="_blank" alt="FaceBook"><BsGithub/></a>
        </div>
        <div>
            <a href="https://discord.gg/QWeRsPuhrQ" target="_blank" alt="twitter"><BsDiscord/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/sumitkumar.in/" target="_blank" alt="Instagram"><BsInstagram/></a>
        </div>
        {/* <div>
            <a href="https://twitter.com/" target="_blank" alt="twitter"><BsTwitter/></a>
        </div> */}
    </div>
  )
}

export default SocialMedia
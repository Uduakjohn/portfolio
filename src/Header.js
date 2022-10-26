import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./header.css"


function Header() {
  return (
    <div className='intro'>
    <div>
      <h1 className='name'>Hi I'am Uduak Sam</h1>
      <br/>
      <span>
     <h1 className='de'>A Web Developer</h1>
     <div className='head_body'>
    <p>I’am a software engineer specializing in building (and occasionally designing)</p>
     <p>exceptional digital experiences. Currently, I’m focused on building accessible,</p>
     <p> human-centered products</p>
    </div>
     </span>
    </div>

    <div className='icons'>
    <ul className='icon_list'>
      <a href='https://www.github.com/Uduakjohn'><li className='icon_list'> <GitHubIcon/></li> </a>
        <a href='https://www.linkedin.com/in/uduak-sam-84b822248'><li className='icon_list'><LinkedInIcon/></li></a>
        <a href='https://twitter.com/Uduak_py'><li className='icon_list'><TwitterIcon/></li></a>
        <a href='https://wa.me/message/XJKU2BE4VELQI1'><li className='icon_list'><WhatsAppIcon/></li></a>
        </ul>
    </div>

    </div>
  )
}

export default Header

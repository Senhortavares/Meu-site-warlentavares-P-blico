import  React            from  'react'
import {AiFillLinkedin}  from  'react-icons/ai'  
import {AiFillGithub}    from  'react-icons/ai'
import {AiFillInstagram} from  'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/warlen-tavares-a1b883257/" target='blank'><AiFillLinkedin/></a>
      <a href="https://github.com/Senhortavares" target='blank'><AiFillGithub/></a>
      <a href="https://www.instagram.com/wtaaaa_1/" target='blank'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials

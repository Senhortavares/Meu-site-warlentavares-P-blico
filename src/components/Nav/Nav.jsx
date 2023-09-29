import  React                from 'react'
import                            './Nav.css'
import {AiFillHome}          from 'react-icons/ai'
import {BiSolidUser}         from 'react-icons/bi'
import {AiOutlineBook}       from 'react-icons/ai'
import {MdHomeRepairService} from 'react-icons/md'
import {MdOutlineContacts} from 'react-icons/md'


const nav = () => {
  
  return (
    <nav>
      <a href="#" ><AiFillHome/></a>
      <a href="#about" ><BiSolidUser/></a>
      <a href="#experiencia"><AiOutlineBook/></a>
      <a href="#serviços"><MdHomeRepairService/></a>
      <a href="#contato"><MdOutlineContacts/></a>
    </nav>
  )
}

export default nav

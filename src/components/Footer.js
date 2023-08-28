import React, { useState } from 'react'
import logo  from "../images/logo.svg";
import { footer } from '../data/data';

const Footer = () => {


    const [footerLinks, setFooterLinks] = useState(footer)

  return (
    <>
    <footer className='footer text-center md:text-left md:grid md:grid-cols-2 px-5 py-10'>
        <div>
            <img src={logo} alt='' className='block mx-auto pt-10 md:mx-0' />
        </div>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-6 lg:gap-20'>
            {footerLinks.map(({id, title, links}) => (
                <ul key={id}>
                    <h4 className='mb-5 mt-10 text-lg'>{title}</h4>

                    {links.map((link) => (
                        <li key={link} className='py-1'>{link}</li>
                    ))}
                </ul>
            ))}
        </div>
    </footer>
    </>
  )
}

export default Footer ;
import React from 'react'

const About = () => {
  return (
    <section id='about' className='container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 flex flex-col justify-center items-center' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
      <h1 className='text-3xl font-bold sm:text-4xl 2xl:text-5xl'>Sobre mi</h1>
      <div className='md:flex md:justify-between md:items-start'>
        <p className='about-me my-5'>Mi nombre es Alejandro Xavier, apasionado programador web junior con una sed insaciable de aprender y mejorar mis habilidades creando soluciones innovadoras y amigables para el usuario</p>
        <p className='about-me my-5'> Mi viaje en la programación comenzó con la curiosidad por crear sitios web interactivos y funcionales. A lo largo de mi formación, he adquirido experiencia en lenguajes como HTML, CSS, JavaScript y también en el desarrollo de aplicaciones web. </p>
      </div>
    </section>
  )
}

export default About

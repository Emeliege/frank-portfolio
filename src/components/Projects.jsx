import React, { useEffect } from 'react';
import deshop from '../image/deshop1.png';
import dimarstore from '../image/dimar-store1.png';
import doktorzcuts from '../image/doktorz-cutz.png';
import eyeprof from '../image/eyeprof.png';
import portfolio from '../image/portfolio.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    title: 'Eyeprof Clinic',
    description: 'A user-friendly website designed to showcase the services of an Eye clinic',
    image: eyeprof,
    tags: ['HTML', 'CSS', 'Javascript'],
    url: 'https://eyeprof.netlify.app/'
  },
  {
    id: 2,
    title: 'Deshop',
    description: 'A modern e-commerce website for shoes built with React',
    image: deshop,
    tags: ['React'],
    url: 'https://deshop-e-commerce.netlify.app/'
  },
  {
    id: 3,
    title: 'Doktors Barbershop',
    description: 'A sleek and stylish website built for a modern barbershop',
    image: doktorzcuts,
    tags: ['HTML', 'CSS', 'Javascript'],
    url: 'https://doktors-barbershop.netlify.app/'
  },
  {
    id: 4,
    title: 'Dimar store',
    description: 'A modern e-commerce website built with React and Tailwind',
    image: dimarstore,
    tags: ['React', 'Tailwind'],
    url: 'https://dimar-store.netlify.app/'
  },
  {
    id: 5,
    title: 'My Portfolio Website',
    description: 'Responsive portfolio website with modern design',
    image: portfolio,
    tags: ['React', 'Tailwind CSS', ],
    url: 'https://ibeokoye-franklin.netlify.app/'
  }
];

const Projects = () => {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <section id='projects' className="bg-[#003329] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#fffffe] mb-12 sm:text-[2.3rem] lg:text-[2.8rem] lg:mb-14">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#e8e4e6] rounded-lg shadow-lg overflow-hidden lg:mb-9" data-aos='fade-up'>
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#001e1d] mb-2 sm:text-[25px]">
                  {project.title}
                </h3>
                <p className="text-[#004643] mb-4 sm:text-[20px]">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#004643] text-[#fffffe] rounded-full text-sm  sm:text-[20px] sm:px-4 sm:py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
          <div key={project.id} className='bg-[#f9bc60] mx-[1rem] py-1 font-bold flex align-center justify-center'>
            <a href= {project.url} target='_blank' rel='noopener noreferrer'className=' sm:text-[20px]'>Visit Website</a>
          </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
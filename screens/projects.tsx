"use client"
import Container from '@/components/universal/container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  const projects = [
    {
      projectName: 'PROPOSED HOSTEL FOR UNIVERSITY OF ABUJA, FCT.',
      images: ['/images/projects/uniabuja-proposed-img.webp', '/images/projects/uniabuja-proposed-img-2.webp'],
      projectLink: '/projects/uniabuja',
    },
    {
      projectName: 'PROPOSED HOSTEL DEVELOPMENT FOR THE UNIVERSITY OF LAGOS, AKOKA.',
      images: ['/images/projects/unilag-proposed-img.webp', '/images/projects/unilag-proposed-img-2.webp'],
      projectLink: '/projects/unilag',
    },
    {
      projectName: 'Wema Bank plc. Bank Building, Irun-Akoko',
      images: ['/images/wema-bank.webp', '/images/wema-bank.webp'],
      projectLink: '/projects/unilag',
    },
    {
      projectName: 'Earls Court Residential Estate, Ikate, Lekki, Lagos',
      images: ['/images/building-img.webp', '/images/projects/earls-court-residential.webp'],
      projectLink: '/projects/earls-court',
    },
    {
      projectName: 'Practice Palace Place, Opebbi',
      images: ['/images/projects/practice-palace-place-1.webp', '/images/projects/practice-palace-place-2.webp'],
      projectLink: '/projects/practice-palace-place',
    },
    {
      projectName: 'Cornerstone Baptist Church, Shogunle, Lagos',
      images: ['/images/projects/cornerstone-baptist-church-1.webp', '/images/projects/cornerstone-baptist-church-2.webp'],
      projectLink: '/projects/cornerstone-baptist-church',
    },
  ]
  return (
    <div className='min-h-screen bg-white mt-[179px] font-normal mb-24'>
      <Container className='flex flex-col gap-[60px] md:gap-[120px]'>
        {projects.map((project, idx) => (
          <motion.div
            key={project.projectName}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col gap-6 lg:flex-row justify-between'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src={project.images[0]} width={788} height={600} alt={project.projectName} className='w-full object-cover' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image src={project.images[1]} width={788} height={600} alt={project.projectName} className='w-full object-cover' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className='space-y-6 mt-[30px] max-w-[345px]'
              >
                <h4 className='font-medium uppercase'>{project.projectName}</h4>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className='group flex items-center font-medium'>
                  <span className='opacity-0 group-hover:opacity-100 font-medium'>{'['}</span>
                  <Link
                    href={project.projectLink}
                    className={`flex items-center gap-1 px-1 py-2.5 text-black`}
                  >
                    View Project
                  </Link>
                  <span className='opacity-0 group-hover:opacity-100 font-medium'>{']'}</span>
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </Container>
    </div>
  )
}

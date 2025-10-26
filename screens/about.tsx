"use client"
import Container from '@/components/universal/container'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { title } from 'process'
import { div } from 'framer-motion/client'
import { featureItemVariants, imageVariants } from '@/lib/animation'
import BoardOfDirectors from '@/components/about/board-of-directors'
import Link from 'next/link'

export default function AboutPage() {
    const coreValues = [
        { title: '(01) Integrity', description: 'We build with honesty and transparency.' },
        { title: '(02) Innovation', description: 'We integrate modern design and smart technologies in every build.' },
        { title: '(03) Safety', description: 'We prioritize structural and environmental safety in all projects.' },
        { title: '(04) Accessibility', description: 'We make luxury affordable to the student demographic.' },
        { title: '(05) Impact', description: 'We aim to enhance educational outcomes through quality living environments.' },

    ]
    return (
        <div className='min-h-screen bg-white mt-[179px] font-normal mb-24'>
            <Container>
                <div>
                    <motion.h1
                        className='text-[#1A2C6B] text-[30px] md:text-6xl lg:text-[110px] text-center'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0 }}
                    >
                        Royal Dynasty Homes Ltd
                    </motion.h1>
                    <motion.div
                        className="flex flex-col gap-2.5 w-full py-2.5 justify-between text-[#000000B2] md:flex-row"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href='mailto:contact@royaldynastyhomes.com'>
                            <motion.span
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                contact@royaldynastyhomes.com
                            </motion.span>
                        </Link>
                        <motion.p
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            77, Oduduwa Way, Ikeja GRA Lagos.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            Urban design, construction, and management of hostels
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-5 md:mt-[76px]'
                >
                    <Image src={'/images/building-worm-view.webp'} width={1280} height={785} alt='building worm view' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-[60px] flex justify-center lg:justify-end'
                >
                    <div className='max-w-[792px]'>
                        <p className='md:text-3xl'>We are a forward-thinking real estate development company specializing in the design, construction, and management of standard and luxury hostels for students in Nigeria's tertiary institutions.
                            <br /><br />
                            Our core mission is to redefine student housing by offering safe, comfortable, and affordable accommodations that support academic excellence and personal growth.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='mt-[60px] flex justify-center lg:justify-start'
                >
                    <div className='max-w-[792px]'>
                        <motion.div
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image src={'/images/engineering-tools.webp'} width={793} height={530} alt='Engineering tools' />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className='mt-[60px]'
                        >
                            <p className='md:text-3xl'>We bridge the infrastructure gap in the education sector by partnering with universities, polytechnics, and other higher education institutions to deliver purpose-built, student-centric residential facilities. From conception to completion, we apply best-in-class project planning, sustainable building practices, and innovative financing models to achieve scale and impact.</p>
                        </motion.div>
                    </div>
                </motion.div>
                {/* OUR VISION, OUR MISSION */}
                <div className='mt-[60px] space-y-10 flex flex-col items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-xl md:text-2xl uppercase font-medium'>Our Vision</h3>
                        <div className='max-w-[423px]'>
                            <p className='md:text-xl'>To be Nigeria’s Top Tier name in Educational Institutions real estate development, delivering state of the heart, world-class living experiences standards.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl md:text-2xl uppercase font-medium'>Our Mission</h3>
                        <div className='max-w-[423px]'>
                            <p className='md:text-xl'>To revolutionize student housing through quality infrastructure, operational excellence, and strategic partnerships—building homes that support the next generation of leaders.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl md:text-2xl uppercase font-medium'>Core Values</h3>
                        <div className='max-w-[423px]'>
                            {
                                coreValues.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={featureItemVariants}
                                        whileHover={{
                                            x: 10,
                                            transition: { duration: 0.3 }
                                        }} className='py-3 border-b border-[#E8E8E8] last:border-0'>
                                        <h4 className='text-[#000000B2] text-lg md:text-xl font-medium'>{item.title}</h4>
                                        <p className='md:text-lg'>{item.description}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <BoardOfDirectors />
                </div>
                <div className='mt-20 max-w-[630px]'>
                    <p className='md:text-xl text-left'>Royal Dynasty Homes Ltd is poised to expand its footprint to every geopolitical zone in Nigeria through modular builds, green technology integration, and new institutional partnerships. By 2030, we aim to house over 100,000 students through our developments.</p>
                </div>
            </Container>
        </div>
    )
}

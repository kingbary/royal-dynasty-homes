import React from 'react'
import { motion } from 'framer-motion'
import Container from '../universal/container'
import { containerVariants, fadeInUpVariants } from '@/lib/animation'
import Image from 'next/image'

export default function FeaturedProjects() {
    return (
        <section>
            <Container className='py-[58px] md:py-30'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        variants={fadeInUpVariants}
                        className='flex mb-10 justify-end'
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h3 className='text-xl font-normal leading-[120%] md:text-[40px] max-w-[630px] uppercase'>Flagship Projects</h3>
                    </motion.div>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <Image src={'/images/hero-bg-2.webp'} width={1280} height={643} alt='PROPOSED HOSTEL FOR UNIVERSITY OF ABUJA, FCT.' />
                            <div className='flex justify-between mt-5 font-normal text-sm md:text-base'>
                                <p>PROPOSED HOSTEL FOR UNIVERSITY OF ABUJA, FCT.</p>
                                <p>2025</p>
                            </div>
                        </div>
                        <div>
                            <Image src={'/images/hero-bg-3.webp'} width={1280} height={643} alt='PROPOSED HOSTEL FOR THE UNIVERSITY OF LAGOS. AKOKA' />
                            <div className='flex justify-between mt-5 font-normal text-sm md:text-base'>
                                <p>PROPOSED HOSTEL FOR THE UNIVERSITY OF LAGOS. AKOKA</p>
                                <p>2025</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section >
    )
}

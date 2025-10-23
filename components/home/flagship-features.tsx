import React from 'react'
import { motion } from 'framer-motion'
import Container from '../universal/container'
import { containerVariants, fadeInUpVariants, featureItemVariants, featuresContainerVariants, imageVariants, textVariants } from '@/lib/animation'
import Image from 'next/image'

export default function FlagshipFeatures() {
    const flagshipFeatures = [
        "Fully furnished student rooms with ensuite bathrooms",
        "Reliable water, power, and high-speed internet access",
        "Study lounges, cafeterias, and recreational spaces",
        "Biometric access control and 24/7 security monitoring",
        "Eco-friendly designs and renewable energy integration",
        "On-site management, maintenance, and community engagement teams"
    ]
    return (
        <section>
            <Container className='py-[58px] md:py-30'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={fadeInUpVariants} className='flex mb-10'>
                        <h3 className='text-xl font-normal leading-[120%] md:text-[40px] max-w-[630px] uppercase'>Flagship Features</h3>
                    </motion.div>
                </motion.div>
                <div className='flex flex-col lg:flex-row justify-between gap-8'>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div variants={imageVariants}>
                            <Image src={'/images/flagship-feature-img.webp'} width={468} height={523} alt='Flagship Feature Image' />
                        </motion.div>
                        <motion.div
                            variants={featuresContainerVariants}
                            className='mt-10'
                        >
                            {flagshipFeatures.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={featureItemVariants}
                                    whileHover={{
                                        x: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className='flex gap-4 border-b border-[#E8E8E8] py-3 last:border-0 cursor-pointer'
                                >
                                    <p className='font-normal text-sm md:text-base'>{`(${index + 1}`}</p>
                                    <p className='font-normal text-sm md:text-base'>{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className='max-w-[630px]'
                    >
                        <p className='font-normal text-xl md:text-[32px] leading-[130%]'>Our approach builds more than accommodation. We create communities where students thrive academically and forge lifelong connections.
                            <br /><br />
                            We understand that where you live affects how well you study. That's why every Royal Dynasty residence is designed with your academic success in mind.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>

    )
}

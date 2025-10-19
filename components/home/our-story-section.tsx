"use client"
import Container from '@/components/universal/container'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function OurStorySection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const fadeInUpVariants = {
        hidden: {
            opacity: 0,
            y: 60
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    }

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    }

    const logoContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const logoVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    }

    const partnershipAndApprovalContent = [
        {
            name: 'Approved by',
            content: [
                {
                    institutionName: "PENCOM",
                    institutionLogo: "/images/logo/pencom-logo.png",
                },
                {
                    institutionName: "BPP",
                    institutionLogo: "/images/logo/bpp-logo.png",
                },
                {
                    institutionName: "NSITF",
                    institutionLogo: "/images/logo/nsitf-logo.png",
                },
                {
                    institutionName: "ITF",
                    institutionLogo: "/images/logo/itf-logo.png",
                },
                {
                    institutionName: "FIRS",
                    institutionLogo: "/images/logo/firs-logo.png",
                },
            ]
        },
        {
            name: 'Partnerships',
            content: [
                {
                    institutionName: "UNILAG",
                    institutionLogo: "/images/logo/unilag-logo.png",
                },
                {
                    institutionName: "UNIABUJA",
                    institutionLogo: "/images/logo/uniabuja-logo.png",
                },
                {
                    institutionName: "",
                    institutionLogo: "",
                },
            ]
        }
    ]
    return (
        <section className='min-h-screen bg-white'>
            <Container className='py-[58px] md:py-30'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h3
                        variants={fadeInUpVariants}
                        className='text-xl font-normal leading-[120%] md:text-[40px] max-w-[630px]'
                    >
                        Transforming student living standards across Nigeria's higher institutions
                    </motion.h3>

                    <motion.div
                        variants={imageVariants}
                        className='mx-auto w-full flex justify-center mt-6 md:mt-10'
                    >
                        <Image src={'/images/house-plan-img.jpg'} width={955} height={523} alt='house plan' loading='lazy' />
                    </motion.div>

                    <motion.div
                        variants={fadeInUpVariants}
                        className='max-w-[630px] mt-6 md:mt-10 space-y-6'
                    >
                        <p className='font-normal md:text-xl'>We bridge the infrastructure gap in the education sector by partnering with universities, polytechnics, and other higher education institutions to deliver purpose-built, student-centric residential facilities.
                            <br />
                            <br />
                            Over 150 years of combined experience from our leadership team. Partnered with leading universities to provide world-class student accommodation that meets international standards.
                        </p>
                        <div className='p-4 mb-10'>
                            <h3 className='text-base'>Our Story</h3>
                        </div>
                    </motion.div>

                    {/* PARTNERSHIP AND APPROVAL  */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className='flex flex-col gap-8'
                    >
                        {partnershipAndApprovalContent.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                className='flex flex-col md:flex-row md:items-center gap-4'
                            >
                                <div>
                                    <h4 className='uppercase'>{item.name}:</h4>
                                </div>
                                <motion.div
                                    variants={logoContainerVariants}
                                    className='flex flex-1 flex-wrap w-full items-center gap-6'
                                >
                                    {item.content.map((institution, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={logoVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.3 }
                                            }}
                                            className='flex flex-col items-center gap-2'
                                        >
                                            {
                                                institution.institutionLogo && (
                                                    <Image src={institution.institutionLogo} className='size-[88px]' width={88} height={88} alt={`${institution.institutionName} Logo`} loading='lazy' />
                                                )}
                                            <p className='text-sm'>{institution.institutionName}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}

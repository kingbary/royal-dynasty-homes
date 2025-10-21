"use client"
import React from 'react'
import Container from '../universal/container'
import { motion } from 'framer-motion'
import { containerVariants, fadeInUpVariants } from '@/lib/animation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'

export default function OurServicesSection() {
    const ourServices = [
        {
            title: "Student Hostel Development (Standard & Luxury)",
            description: "We design and build modern hostels from the ground up, creating safe and comfortable homes where students can focus on their studies and build lasting friendships. Whether you need affordable standard accommodation or premium luxury facilities, we handle everything from planning to completion.",
            imageUrl: "/images/our-service-img-1.png"
        },
        {
            title: "Hostel Renovation and Upgrade Projects",
            description: "Transform your existing hostel into a modern student haven with our renovation services. We upgrade old buildings with new amenities, safety features, and contemporary designs that attract students and improve their living experience.",
            imageUrl: "/images/our-service-img-1.png"
        },
        {
            title: "Build-Operate-Transfer (BOT) Hostel Schemes",
            description: "We fund, build, and manage your student hostel project, then hand it over to you once it's profitable and running smoothly. This means you get a world-class facility without upfront costs or construction headaches - we handle everything until your hostel is successful.",
            imageUrl: "/images/our-service-img-1.png"
        },
        {
            title: "Public-Private Partnership (PPP) for Student Housing",
            description: "Partner with us to solve your institution's accommodation challenges through shared expertise and resources. We work together to create housing solutions that benefit students while meeting your budget and timeline needs.",
            imageUrl: "/images/our-service-img-1.png"
        },
        {
            title: "Property Management and Hostel Administration Services",
            description: "Leave the day-to-day running of your student accommodation to our experienced team who handle everything from rent collection to maintenance requests. We ensure your hostel operates smoothly while you focus on your core business, keeping both students and property owners happy.",
            imageUrl: "/images/our-service-img-1.png"
        },
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
                    <motion.div variants={fadeInUpVariants} className='flex justify-end mb-10'>
                        <h3 className='text-xl font-normal leading-[120%] md:text-[40px] max-w-[630px]'>Our Services</h3>
                    </motion.div>

                    {/* MOBILE  */}
                    <div className='lg:hidden'>
                        <Accordion type="single" collapsible>
                            {ourServices.map((service, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{service.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {service.description}
                                        {service.imageUrl && (
                                            <div className='mt-4 w-full aspect-[361/240] bg-cover bg-center' style={{ backgroundImage: `url(${service.imageUrl})` }}>
                                            </div>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* DESKTOP  */}
                    <motion.div className='hidden lg:block mb-2.5'>
                        {ourServices.map((service, index) => (
                            <div key={index} className='relative group flex justify-between hover:border-t transition-all duration-300 cursor-pointer'>
                                <h3 className='text-[32px] text-[#00000080] group-hover:text-black font-normal -tracking-[1%] max-w-[494px]'>
                                    {service.title}
                                </h3>
                                <div className='absolute top-0 right-0 z-10 flex gap-[58px] justify-between'>
                                    <Image
                                        src={service.imageUrl}
                                        alt={`${service.title} image`}
                                        width={304}
                                        height={322}
                                        loading='lazy'
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                                    />
                                    <div className='max-w-[358px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out'>
                                        <p className='font-normal'>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}

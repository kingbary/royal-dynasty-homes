"use client"
import Container from '@/components/universal/container'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const slides = [
        {
            image: "/images/building-img.webp",
            description: "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning."
        },
        {
            image: "/images/wema-bank.webp",
            description: "Stability that inspires ambition. Experience a foundation built for your future."
        },
        {
            image: "/images/projects/cornerstone-baptist-church-1.webp",
            description: "Crafted for endurance. Designed for life. Uncompromising quality in every thoughtful detail."
        }
    ]

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    return (
        <div className='min-h-screen relative overflow-hidden'>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                        index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                        }`}
                >
                    <div
                        className='min-h-screen flex flex-col items-center justify-center text-center text-white px-4 bg-cover bg-center relative'
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                </div>
            ))}

            <div className='absolute w-full h-full flex justify-center items-center'>
                <Container className='w-full'>
                    <motion.div
                        className="flex flex-col gap-2.5 w-full py-2.5 justify-between text-white md:flex-row"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            The Royal Dynasty Homes Ltd
                        </motion.p>
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
                </Container>
            </div>
            {slides.map((slide, index) => (
                <div key={index} className='absolute w-full bottom-20'>
                    <Container>
                        <div className='max-w-[844px]'>
                            <motion.h1
                                className='text-[32px] md:text-5xl text-white leading-[120%] font-normal transition-all duration-1000 ease-in-out'
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20
                                }}
                            >
                                {index === currentSlide && slide.description}
                            </motion.h1>
                        </div>
                    </Container>
                </div>
            ))}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`size-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

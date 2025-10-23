"use client"
import Container from '@/components/universal/container'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <div className='min-h-screen bg-white mt-[179px]'>
            <Container>
                <div>
                    <motion.h1
                        className='text-[#1A2C6B] text-[110px] text-center'
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
                        <motion.a
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            href='mailto:contact@royaldynastyhomes.com'
                        >
                            contact@royaldynastyhomes.com
                        </motion.a>
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
            </Container>
        </div>
    )
}

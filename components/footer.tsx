"use client"
import Image from 'next/image'
import React from 'react'
import Container from './universal/container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import ContactUsSheet from './universal/contact-us-sheet'

export default function Footer() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const pathname = usePathname()
    const isActive = (link: string) =>
        link === ''
            ? pathname === '/'
            : pathname === `/${link}`;
    const navLinks = [
        { name: 'About', route: 'about' },
        { name: 'Projects', route: 'projects' },
    ]
    return (
        <footer className='pb-[60px]'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between gap-[60px]'>
                    <div>
                        <Image src={'/images/logo-blue.svg'} width={186} height={80} alt='Royal Dynasty Homes Logo' />
                        <div className='mt-10 max-w-[363px]'>
                            <span className='text-[#000000B2] md:text-xl font-normal'>We're building the next generation standard and luxury hostels for students in Nigeria's tertiary institutions.</span>
                        </div>
                    </div>
                    <div className='space-y-10'>
                        <motion.ul className="flex flex-col space-x-2 md:space-x-8">
                            {
                                navLinks.map((link) => {
                                    return (
                                        <motion.li key={link.route || 'home'}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                            className='group flex items-center'>
                                            <span className='opacity-0 group-hover:opacity-100'>{'['}</span>
                                            <Link
                                                href={link.route === '' ? '/' : `/${link.route}`}
                                                className={`flex items-center gap-1 px-1 py-2.5 text-black transition-colors duration-200 ${isActive(link.route)
                                                    ? ''
                                                    : ''
                                                    }`}
                                            >
                                                {isActive(link.route) && (
                                                    <div className='-ml-2 size-1.5 bg-black group-hover:hidden'></div>
                                                )}
                                                {link.name}
                                            </Link>
                                            <span className='opacity-0 group-hover:opacity-100'>{']'}</span>
                                        </motion.li>
                                    )
                                })
                            }
                            <motion.li
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className='group flex items-center'>
                                <span className='opacity-0 group-hover:opacity-100'>{'['}</span>
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className='flex items-center gap-1 px-1 py-2.5 text-black transition-colors duration-200'
                                >
                                    Contact Us
                                </button>
                                <span className='opacity-0 group-hover:opacity-100'>{']'}</span>
                            </motion.li>
                        </motion.ul>
                        <div className='space-y-4'>
                            <div className='flex flex-col'>
                                <span className='text-[#000000B2] font-normal'>Email Us</span>
                                <Link href="mailto:contact@royaldynastyhomes.com">contact@royaldynastyhomes.com</Link>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#000000B2] font-normal'>Text or Call Us</span>
                                <Link href="tel:+2348067572686">+234-806 757 2686</Link>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#000000B2] font-normal'>Visit Us</span>
                                <Link href="mailto:contact@royaldynastyhomes.com">77, Oduduwa Way, Ikeja GRA Lagos</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2.5 justify-between mt-[60px] font-normal'>
                    <span>All rights reserved. Royal dynasty homes ltd@2025</span>
                    <div className='flex gap-4'>
                        <Link href={'#'}>Privacy</Link>
                        <Link href={'#'}>Terms</Link>
                    </div>
                </div>
            </Container>
            <ContactUsSheet isOpen={isOpen} onOpenChange={() => setIsOpen(false)} />
        </footer>
    )
}

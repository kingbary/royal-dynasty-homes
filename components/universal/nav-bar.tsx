'use client'
import React from 'react'
import Container from './container'
import Logo from '../vectors/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import ContactUsSheet from './contact-us-sheet'
import Image from 'next/image'

export default function NavBar() {
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
        <nav className='absolute top-6 z-50 w-full md:top-8'>
            <Container>
                <div className='flex justify-between md:items-center'>
                    <Link href={'/'}>
                        {isActive('') ? (
                            <Image src={'/images/logo-white.svg'} width={186} height={80} alt='Royal Dynasty Homes Logo' />
                        ) : (
                            <Image src={'/images/logo-blue.svg'} width={186} height={80} alt='Royal Dynasty Homes Logo' />
                        )}
                    </Link>
                    <motion.ul className="flex flex-col space-x-1 md:space-x-8 md:flex-row">
                        {
                            navLinks.map((link) => {
                                return (
                                    <motion.li key={link.route || 'home'}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className='group flex items-center'>
                                        <span className={`opacity-0 group-hover:opacity-100 ${isActive('') ? 'text-white' : 'text-black'}`}>{'['}</span>
                                        <Link
                                            href={link.route === '' ? '/' : `/${link.route}`}
                                            className={`flex items-center gap-1 px-1 py-1 transition-colors duration-200 ${isActive('')
                                                ? 'text-white'
                                                : 'text-black'
                                                }`}
                                        >
                                            {isActive(link.route) && (
                                                <div className={`-ml-2 size-1.5 ${isActive('') ? 'bg-white' : 'bg-black'} group-hover:hidden`}></div>
                                            )}
                                            {link.name}
                                        </Link>
                                        <span className={`opacity-0 group-hover:opacity-100 ${isActive('') ? 'text-white' : 'text-black'}`}>{']'}</span>
                                    </motion.li>
                                )
                            })
                        }
                        <motion.li
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className='group flex items-center'>
                            <span className={`opacity-0 group-hover:opacity-100 ${isActive('') ? 'text-white' : 'text-black'}`}>{'['}</span>
                            <button
                                onClick={() => setIsOpen(true)}
                                className={`flex items-center gap-1 px-1 py-2.5 ${isActive('') ? 'text-white' : 'text-black'} transition-colors duration-200`}
                            >
                                Contact Us
                            </button>
                            <span className={`opacity-0 group-hover:opacity-100 ${isActive('') ? 'text-white' : 'text-black'}`}>{']'}</span>
                        </motion.li>
                    </motion.ul>
                </div>
            </Container>
            <ContactUsSheet isOpen={isOpen} onOpenChange={() => setIsOpen(false)} />
        </nav>
    )
}

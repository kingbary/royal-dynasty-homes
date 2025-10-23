import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function BoardOfDirectors() {
    const directors = [
        { name: 'Mr. Igbekele Samuel Aremo', position: 'MD/CEO', imgUrl: '/images/board-of-directors/igbekele-samuel.webp' },
        { name: 'Mrs. Mosunmola Olulade', position: 'Executive Director', imgUrl: '/images/board-of-directors/mosunmola-olulade.webp' },
        { name: 'Mr. Niyi Tanimola', position: 'Project Director', imgUrl: '/images/board-of-directors/niyi-tanimola.webp' },
        { name: 'Mr. Oluwakayode Adigun', position: 'Finance Director', imgUrl: '/images/board-of-directors/oluwakayode-adigun.webp' },
        { name: 'Mr. Thaddaeus Akingbile', position: 'Technology Director', imgUrl: '/images/board-of-directors/thaddaeus-akingbile.webp' },
        { name: 'Mr. Adewale Laseinde', position: 'Director/Legal Adviser', imgUrl: '/images/board-of-directors/adewale-laseinde.webp' },
        { name: 'Dr. Edwin Osa Igili-Edwards', position: 'Director', imgUrl: '/images/board-of-directors/placeholder-bg.png' },
    ]
    return (
        <div className='w-full flex flex-col gap-10 lg:flex-row justify-between mt-24'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className='flex flex-col'
            >
                <h3 className='text-xl md:text-2xl uppercase font-medium'>Board of Directors</h3>
                <div className='max-w-[468px]'>
                    <p className='md:text-xl'>Our multidisciplinary team brings over 150 years of combined experience, deep industry partnerships, and proven integrity to deliver successful student housing projects through strategic collaborations with universities, construction partners, and funding organizations</p>
                </div>
            </motion.div>
            <motion.div
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]'
            >
                {directors.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const } } }}
                        whileHover={{ scale: 1.02, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const } }}
                        className='bg-white rounded-lg transition-all duration-300'
                    >
                        <div className='w-full lg:w-[197px] h-[310px] md:h-[200px] relative overflow-hidden'>
                            <Image src={item.imgUrl} alt={`${item.name}'s Image`} fill className='object-cover' />
                        </div>
                        <div className='flex flex-col mt-3'>
                            <h5 className='text-base font-medium'>{item.name}</h5>
                            <p className='text-sm text-[#000000B2] font-medium'>{item.position}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

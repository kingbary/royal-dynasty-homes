import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import Container from '../universal/container'

export default function BoardOfDirectors() {
    const [open, setOpen] = React.useState<boolean>(false)
    const [selectedDirector, setSelectedDirector] = React.useState<number | null>(null)
    const directors = [
        {
            name: 'Mr. Igbekele Samuel Aremo',
            position: 'MD/CEO',
            imgUrl: '/images/board-of-directors/igbekele-samuel.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>AREMO, IGBEKELE SAMUEL ANIMN, MNIFST, FICBC</h3>
                    <p className='text-[#000000B2] font-medium'>Managing Director/Chief Executive</p>
                </div>
                <div className='mt-10'>
                    <p>Mr. Igbekele Samuel Aremo is a results-driven business executive with over 27 years of outstanding experience in product sales, including more than 19 years in senior management roles.
                        His career has been marked by consistent excellence in strategic planning, sales growth, market expansion, and organizational leadership within Nigeria’s fast-moving consumer goods (FMCG) sector. <br /><br />
                        As a National Sales Manager of a leading FMCG company in Nigeria in 2008, he delivered remarkable achievements, including:
                    </p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Expanding the customer base from 500 to over 3,500 within 48 months through innovative and market-responsive sales strategies.</li>
                        <li>Growing annual sales revenue from ₦250 million to over ₦1 billion in just four years by leading a high-performing, motivated sales team.</li>
                        <li>Transforming the company’s sales policy from a 30-day credit model to a cash-and-carry system, using a robust incentive framework for distributors and sales personnel.</li>
                        <li>Championing policy advocacy, leading initiatives that secured a 50% reduction in NAFDAC registration fees for SMEs nationwide in 2016.</li>
                        <li>Facilitating NAFDAC registration for over 100 small and medium enterprises (SMEs) in Lagos through effective contract manufacturing partnerships in 2016.</li>
                    </ul>
                    <p>Mr. Aremo is also an accomplished entrepreneur and visionary leader, a certified business consultant. He is the Chairman  of The Precious Pastries& Confectionery services limited and Best Ideal Marketing Company limited,  recognized for their innovation, excellence and sustainable impact.

                        <br /><br />
                        He holds a Bachelor of Science (B.Sc.) degree in Food Science and a Master of Business Administration (MBA) in Marketing.
                        He is also  a Fellow, Institute of Certified Business Consultants, Nigeria (FICBC), professional member of Nigerian Institute of Food Science and Technology (MNIFST), and also a member of National Institute of Marketing of Nigeria (NIMN), member and past Secretary of
                        Nigerian Association of Small Scale Industrialists (NASSI), Lagos chapter.
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Mrs. Mosunmola Olulade', position: 'Executive Director', imgUrl: '/images/board-of-directors/mosunmola-olulade.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>MRS MOSUNMOLA OLULADE</h3>
                    <p className='text-[#000000B2] font-medium'>Executive Director</p>
                </div>
                <div className='mt-10'>
                    <p>Mrs. Mosunmola Olulade is a highly regarded business professional with diverse strength and practices the principle of “multiple streams of income” as taught in the Bible.
                        Her distinguished career spans across many fields. Her calculating, sharp business management skills has led her to serving as the Managing Director of Adonai-Tekts Properties Limited and sits on the board of several companies including Adonai-Tekts Investment Limited, Adonai Net Nigeria Limited, GMT Travels and Tours Limited, Foto Plus International and Stripes Geriatric Home
                    </p>
                    <br /><br />
                    <p>Mosunmola has drive, passion and creativity which makes her ideally suited for beautifying lives at The Elect Aso – Oke where she serves as the CEO. Profoundly driven and perfectionist by nature, Mosunmola is committed to her clients, employees and people around her. She devotes her time to analyzing business models, processes and systemizing operating structures to ensure flawless service delivery and customer satisfaction.

                        <br /><br />
                        She is a trustee of Adonai-Olulade Foundation, a charitable and social development organisation that is committed to giving hope and meaning to all, with special emphasis on the less privileged in the society by Mentoring, Sponsorship and Distribution of Christian literature. The strategy used is very simple; every human being can support others by adopting
                        <br />
                        -A Student
                        <br />
                        -A Family
                        <br />
                        -A Business
                        <br />
                        She is a trustee of God’s Home For Women Foundation which runs a shelter for battered and abused women and Chairperson Board of Trustees of Dynamic Impact Christian Center
                        She is a member of the missionary force of the Citadel Global Community Church formerly known as The Latter Rain Assembly where she serves in the Hospitality Unit.
                        Mosunmola is a loving wife to Adegboyega and a caring mother to Olutade and Siblings. An architect by profession. She graduated with a Master of Science degree in Architecture from the University of Ife (Now Obafemi Awolowo University).
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Mr. Niyi Tanimola', position: 'Director/Legal Adviser.', imgUrl: '/images/board-of-directors/niyi-tanimola.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>MR. Niyi Tanimola</h3>
                    <p className='text-[#000000B2] font-medium'>Director/Legal Adviser.</p>
                </div>
                <div className='mt-10'>
                    <p>Niyi is in full time professional consultancy
                        practice in Architecture, Urban and Regional
                        Planning with full participation in building
                        construction. He holds a Diploma in
                        Architecture and Masters Degree in Urban and
                        Regional Planning  with over four decades of
                        post qualifiication experience. Also registered
                        with relevant professional bodies in the
                        building industry including project
                        management certification.He started his
                        professional career  as a graduate Architect in
                        1983 with M/S STUDIO ALKO CONSULTANTS , a
                        consortium of leading Architects and Engineers
                        in Ibadan on the execution of the permanent
                        site for African  Regional Centre for
                        Engineering Design & Manufacturing ARCEDEM
                        (a United Nations Project)1983-June 1986.
                        Thereafter, he joined AFOLABI KUKU
                        ASSOCIATES (1986-1995) in Lagos on various
                        projects ranging from Residential buildings,
                        Mixed use, Commercial to Institutional
                        developments.
                        <br />
                        He is currently the Managing Director of Archi-Plus
                        Consult Ltd.(1995 to date), a registered company
                        involved with remodeling, renovation and full
                        construction works. He doubles as the Managing
                        Partner of Tanimola Aribisala & Co.(2008 to date),
                        a solely consultancy outfit in the area of
                        Architecture, Urban & Regional Planning, Project
                        Management, Geo Information Systems,
                        Development and Environmental Management
                        Services. Both outfits have handled various works
                        from bespoke Residential buildings, to large scale
                        Residential  Estate developments, Joint Venture
                        developments,  Commercial and Institutional
                        projects spread across the country with passion
                        for details and excellent project delivery.
                        <br />
                        Niyi,  manages the Lagos business office of the
                        firm and also serves as Director in several other
                        firms in addition to volunteering services to other
                        humanitarian organizations.
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Mr. Oluwakayode Adigun', position: 'Director, Strategy and Finance', imgUrl: '/images/board-of-directors/oluwakayode-adigun.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>MR. Oluwakayode Adigun</h3>
                    <p className='text-[#000000B2] font-medium'>Director, Strategy and Finance</p>
                </div>
                <div className='mt-10'>
                    <p>Oluwakayode Adigun is a transformative leader whose career has spanned banking and financial services across Nigeria, South Africa, and beyond. He has a strong record of managing diverse teams in service, operations, and technology, and a natural talent for driving growth and streamlining processes to achieve real, lasting change.
                        Oluwakayode’s credentials speak to his commitment to excellence.
                        <br />
                        <br />
                        As an Accredited Customer Experience Specialist, he has built a strong academic foundation with postgraduate studies at Cranfield University (U.K.) and Lagos Business School, along with an M.B.A. from ESUT Business School in Lagos, with a focus on Banking and Finance. He has trained at Queens Business School in Canada, holds an executive certificate in Leadership Challenge, and is a Chartered Management Practitioner and Fellow of the Chartered Institute of Loan and Risk Management of Nigeria.
                        During his professional career in the banking industry, he pioneered in 2007 and managed for two years at FCMB Ltd., the first indigenous world class central processing - shared services center in the Nigerian banking industry.                        <br />
                        <br />
                        <br />
                        Known for his forthrightness yet inspiring style, Pa Kay as he is fondly called, is also a certified coach and an accomplished trainer and speaker, accredited by Dale Carnegie. He has a passion for empowering, and is deeply committed to creating environments where individuals can unlock their potential and succeed.

                        At the heart of Pa Kay’s leadership are his core values of godliness, enterprise, and relationship. These principles guide his approach to business and life, ensuring that every decision is made with integrity and the desire to make a positive impact.
                        He co-pioneered the globally recognized and acclaimed CIO and C Suite Awards and Club Africa project.
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Mr. Thaddaeus Akingbile', position: 'Technology Director', imgUrl: '/images/board-of-directors/thaddaeus-akingbile.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>Mr. Thaddaeus Akingbile </h3>
                    <p className='text-[#000000B2] font-medium'>Technology Director</p>
                </div>
                <div className='mt-10'>
                    <p>Mr. Akingbile brings 18+ years of international experience in technology assurance and enterprise systems across sectors such as banking, telecoms, oil & gas, and government. He ensures that Royal Dynasty Homes integrates smart technologies, security systems, and digital platforms into all its infrastructure.
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Mr. Adewale Laseinde', position: 'Director/Legal Adviser', imgUrl: '/images/board-of-directors/adewale-laseinde.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>MR. ADEWALE LASEINDE</h3>
                    <p className='text-[#000000B2] font-medium'>Director/Legal Adviser</p>
                </div>
                <div className='mt-10'>
                    <p>Mr. Laseinde is a versatile professional with more than thirty-seven (37) years experience in Corporate and Commercial law practice, Transactional Services, Contracts, Insolvency, Infrastructure Development, Real Estate, Construction Law, Intellectual Property, Data Protection & Compliance, Company Secretarial and General Legal Advisory Services, with competencies in litigation, and Alternative Dispute Resolution including negotiation, mediation, and arbitration. He is a Corporate Governance, Regulatory and Compliance professional.
                        <br />
                        <br />
                        Mr. Laseinde attended the then University of Ife, Ile-Ife (now Obafemi Awolowo University) and graduated with a Bachelor of Laws Degree (LL. B) with Honors in 1987 at the young age of 20. He proceeded to the Nigerian Law School, Victoria Island, Lagos for the Bar Final Examinations and graduated with Honors (B L) in 1988. He was called to the Nigerian Bar on the 3rd day of November 1988 and enrolled as a Solicitor and Advocate of the Supreme Court of Nigeria.
                        <br />
                        <br />
                        He is a member of the Nigerian Bar Association, the International Bar Association, the American Bar Association Section on International Law, and the Nigerian Institute of Chartered Arbitrators. He has attended several conferences and training courses in the course of his career.

                        Adewale is an experienced administrator, excellent manager of men and resources, and volunteer worker. He also sits as a Director on the Board of many other private companies.
                    </p>
                </div>
            </div>)
        },
        {
            name: 'Dr. Edwin Osa Igili-Edwards', position: 'Director', imgUrl: '/images/board-of-directors/edwin-osa-igili.webp',
            bio: (<div className='pb-12'>
                <div className='space-y-1'>
                    <h3 className='text-3xl font-medium uppercase'>Dr.EDWIN OSA IGILI-EDWARDS </h3>
                    <p className='text-[#000000B2] font-medium'>Director</p>
                </div>
                <div className='mt-10'>
                    <p>Dr. Edwin Osa Igili-Edwards is a highly esteemed professional with a remarkable career spanning over two decades in global energy and infrastructure development. As the Managing Director of Edigil Halo Nigeria Limited, Dr. Igili-Edwards has consistently demonstrated exceptional leadership, strategic vision, and a results-driven approach.
                        <br />
                        <br />
                        Dr. Igili-Edwards holds a PhD degree in Chemical Engineering, showcasing his expertise and commitment to advancing knowledge in his field.
                        With over 25 years of experience, Dr. Igili-Edwards has:
                    </p>
                    <ul className='list-disc ml-5 mt-2'>
                        <li>Successfully led numerous high-impact projects in energy and infrastructure development.</li>
                        <li>Demonstrated expertise in strategic planning, project management, and team leadership.</li>
                        <li>Fostered partnerships and collaborations with key stakeholders.</li>
                    </ul>
                    <p>Dr. Igili-Edwards is a strong advocate for youth and women empowerment, recognizing the critical role they play in driving societal progress. He has actively supported initiatives that promote education, skills development, and economic opportunities for marginalized groups.

                        Dr. Igili-Edwards' leadership style and as a former Student Union President is characterized by:
                        - Strategic thinking and problem-solving
                        - Collaborative approach and team building
                        - Commitment to excellence and innovationThrough his work, Dr. Igili-Edwards has made a lasting impact on the energy and infrastructure sectors, while inspiring a new generation of leaders. His dedication to empowerment and mentorship has empowered countless individuals to reach their full potential.</p>
                </div>
            </div>)
        },
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
                viewport={{ once: true, amount: 0.3 }}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]'
            >
                {directors.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] as const } } }}
                        whileHover={{ scale: 1.02, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const } }}
                        className='bg-white rounded-lg transition-all duration-300'
                        onClick={() => { setOpen(true); setSelectedDirector(index); }}
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
            <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setSelectedDirector(null); }}>
                <DialogContent className='min-w-screen h-screen min-h-screen rounded-none'>
                    <DialogHeader>
                        <DialogTitle className='sr-only'>Director's Profile</DialogTitle>
                    </DialogHeader>
                    {selectedDirector !== null && (
                        <Container className='mt-9 md:mt-20 px-0'>
                            <div className='flex flex-col lg:flex-row justify-between md:gap-10 mt-6'>
                                <div className='w-full max-w-[500px]'>
                                    <Image src={directors[selectedDirector].imgUrl} alt={`${directors[selectedDirector].name}'s Image`} width={500} height={512} className='object-cover' />
                                </div>
                                <div className='max-w-[420px] h-screen'>
                                    <div className='hide-scrollbar flex-1 ml-4 font-normal overflow-y-auto h-full pr-2 pb-[480px] pt-5 md:pt-0'>
                                        {directors[selectedDirector].bio}
                                    </div>
                                </div>
                            </div>
                        </Container>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

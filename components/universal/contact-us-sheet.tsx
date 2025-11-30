import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetTitle } from '../ui/sheet'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Link from 'next/link'

type FormData = {
    fullName: string
    email: string
    phone: string
    message: string
}

export default function ContactUsSheet({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: () => void }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            message: ''
        }
    })

    const onSubmit = async (data: FormData) => {
        try {
            console.log('Form submitted:', data)
            reset()
            toast.success('Thank you! Your message has been sent. We’ll be in touch soon.')
            onOpenChange()
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent className='w-full md:max-w-[50vw] px-4 py-16 md:px-10 overflow-y-auto' aria-describedby='contact-us-form'>
                <SheetTitle className='sr-only'>Contact Us Form</SheetTitle>
                <SheetDescription className='sr-only'>Contact Us Form</SheetDescription>
                <div className="flex justify-between items-start mb-6">
                    <div className='max-w-[450px]'>
                        <h2 className="text-xl text-gray-900 mb-2 font-normal">
                            We’re here to help you answer questions about our properties, or assist with partnership opportunities.
                        </h2>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-base font-[402] text-black">Get in Touch</h3>
                    <div className="space-y-2 text-base text-gray-600">
                        <p><span className="font-[402]">Email:</span><Link href="mailto:contact@royaldynastyhomes.com" className='hover:underline'> contact@royaldynastyhomes.com</Link></p>
                        <p><span className="font-[402]">Office Address:</span> 77, Oduduwa Way, Ikeja GRA Lagos.</p>
                        <p><span className="font-[402]">Phone:</span> <Link href="tel:+2348067572686" className='hover:underline'>+234-806 757 2686</Link>, <Link href="tel:+2348033071906" className='hover:underline'>+234-803 307 1906</Link></p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <Input
                            type="text"
                            id="fullName"
                            placeholder="John Doe"
                            {...register('fullName', { required: 'Full name is required' })}
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="johndoe@example.com"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            id="phone"
                            placeholder="+234"
                            {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            placeholder="Hi! We would love to hear your thought..."
                            rows={4}
                            {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    <button type='submit' className='group flex items-center font-medium'>
                        <span className='opacity-0 group-hover:opacity-100 font-medium'>{'['}</span>
                        <span
                            className={`flex items-center gap-1 px-1 py-2.5 text-black`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </span>
                        <span className='opacity-0 group-hover:opacity-100 font-medium'>{']'}</span>
                    </button>
                </form>
            </SheetContent>
        </Sheet>
    )
}

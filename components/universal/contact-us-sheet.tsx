import React from 'react'
import { Sheet, SheetContent } from '../ui/sheet'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useForm } from 'react-hook-form'

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
            // Here you would typically send the data to your API
            // await submitContactForm(data)

            // Reset form after successful submission
            reset()

            // Close the sheet
            onOpenChange()
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent className='w-full md:max-w-[50vw] p-6 overflow-y-auto'>
                <div className="flex justify-between items-start mb-6">
                    <div className='max-w-[450px]'>
                        <h2 className="text-xl text-gray-900 mb-2 font-normal">
                            We're here to help you answer questions<br /> about our properties, or assist with partnership<br /> opportunities.
                        </h2>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-[402] text-gray-900 mb-4">Get in Touch</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Email:</span> contact@royaldynastyhomes.com</p>
                        <p><span className="font-medium">Office Address:</span> 77, Oduduwa Way, Ikeja GRA Lagos.</p>
                        <p><span className="font-medium">Phone:</span> +234-806 757 2686</p>
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

                    <button
                        type="submit"
                        disabled={isSubmitting}                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </SheetContent>
        </Sheet>
    )
}

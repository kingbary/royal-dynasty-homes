import React from 'react'
import HeroSection from '@/components/home/hero-section'
import OurStorySection from '@/components/home/our-story-section'
import OurServicesSection from '@/components/home/our-services-section'

export default function Homepage() {
    return (
        <>
            <HeroSection />
            <OurStorySection />
            <OurServicesSection />
        </>
    )
}

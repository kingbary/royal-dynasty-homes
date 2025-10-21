"use client"
import React from 'react'
import HeroSection from '@/components/home/hero-section'
import OurStorySection from '@/components/home/our-story-section'
import OurServicesSection from '@/components/home/our-services-section'
import FlagshipFeatures from '@/components/home/flagship-features'

export default function Homepage() {
    return (
        <>
            <HeroSection />
            <OurStorySection />
            <OurServicesSection />
            <FlagshipFeatures />
        </>
    )
}

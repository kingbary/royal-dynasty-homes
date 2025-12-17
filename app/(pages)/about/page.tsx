import AboutPage from '@/screens/about'
import React from 'react'

export const metadata = {
    title: "About | The Royal Dynasty Homes Ltd.",
    description:
        "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning.",
    openGraph: {
        title: "About | The Royal Dynasty Homes Ltd.",
        description:
            "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning.",
        url: "https://royaldynastyhomes.com/podcast",
        siteName: "The Royal Dynasty Homes Ltd.",
        images: [
            {
                url: "https://royaldynastyhomes.com/images/royal-dynasty-homes.png",
                width: 1200,
                height: 630,
                alt: "The Royal Dynasty Homes Ltd",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About | The Royal Dynasty Homes Ltd.",
        description:
            "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning.",
        images: ["https://royaldynastyhomes.com/images/royal-dynasty-homes.png"],
        site: "@theroyaldynastyhomes",
    },
};

export default function page() {
    return (
        <AboutPage />
    )
}

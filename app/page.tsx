import Homepage from "@/screens/homepage";

export const metadata = {
  title: "The Royal Dynasty Homes Ltd.",
  description:
    "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning.",
  openGraph: {
    title: "The Royal Dynasty Homes Ltd.",
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
    title: "The Royal Dynasty Homes Ltd.",
    description:
      "The Royal Dynasty Homes merge unwavering architectural integrity with refined urban planning.",
    images: ["https://royaldynastyhomes.com/images/royal-dynasty-homes.png"],
    site: "@theroyaldynastyhomes",
  },
};

export default function Home() {
  return (
    <Homepage />
  );
}

import { Karla } from "next/font/google"
import "./globals.css"

const font = Karla({ subsets: ["latin"] })

export const metadata = {
    title: "Contact form",
    description: "Frontend Mentor - Contact form",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-green-lighter">
            <body className={font.className}>
                <main
                    className="px-4 my-8 mx-auto max-w-[690px]"
                >
                    {children}
                </main>
            </body>
        </html>
    )
}

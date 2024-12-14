import Link from "next/link"
import texts from "./footer.json"
import { ReactNode } from "react"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

const iconsMap: Record<string, ReactNode> = {
  whatsapp: <WhatsAppIcon />
}
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black" id="contact">
      <div className="container mx-auto py-10 px-4 flex items-start flex-wrap gap-14 lg:px-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">{texts.media}</h2>
          <div className="flex flex-col gap-2 text-sm">
            {texts.socialLinks.map((link) => {
              return (
                <div
                  className="flex items-center gap-2 text-primary hover:text-black"
                  key={link.name}
                >
                  {iconsMap[link.name]}
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    {link.text}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">{texts.aboutUs.title}</h2>
          <div className="flex items-center gap-1">
            <h2 className="text-sm font-semibold">
              {texts.aboutUs.address.title}
            </h2>
            <p className="text-sm">{texts.aboutUs.address.text}</p>
          </div>
          <div className="flex items-center gap-1">
            <h2 className="text-sm font-semibold">
              {texts.aboutUs.hours.title}
            </h2>
            <p className="text-sm">{texts.aboutUs.hours.text}</p>
          </div>
        </div>
      </div>
      <div className="py-2 bg-gray-200 text-xs text-center">
        {texts.rights} {texts.name} &copy;
      </div>
    </footer>
  )
}

import Link from "next/link"
import { WhatsAppIcon } from "../../icons/WhatsAppIcon"
import { InstagramIcon } from "../../icons/InstagramIcon"
import texts from "./social-links.json"
import { CONTACT_PHONE } from "./social-links.consts"
import { useIsMobile } from "@/lib/hooks/useIsMobile"

const icons = {
  WhatsAppIcon,
  InstagramIcon
}

const SocialLinks = () => {
  const isMobile = useIsMobile()

  const links = isMobile ? texts.links.mobile : texts.links.web

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const IconComponent = icons[link.icon as keyof typeof icons]
        const url = link.url
          .replace("<CONTACT_PHONE>", CONTACT_PHONE)
          .replace("<TEXT>", encodeURIComponent(texts.text))

        return (
          <Link
            key={link.name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center`}
            style={{ color: link.color }}
          >
            <IconComponent
              className={`h-5 w-5 transition-colors duration-300 text-[${link.color}]`}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default SocialLinks

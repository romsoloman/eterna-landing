import AboutUs from "@/components/ui/about-us/about-us"
import BenefitsList from "@/components/ui/benefits/benefits-list"
import Hero from "@/components/ui/hero"
import CustomImageGallery from "@/components/ui/image-gallery/image-gallery"
import ProductList from "@/components/ui/products/products-list"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductList />
      <BenefitsList />
      <CustomImageGallery />
      <ScrollToTop />
    </>
  )
}

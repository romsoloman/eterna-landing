import AboutUs from "@/components/ui/about-us/about-us"
import Hero from "@/components/ui/hero"
import CustomImageGallery from "@/components/ui/image-gallery/image-gallery"
import ProductList from "@/components/ui/products/products-list"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <AboutUs />
      <CustomImageGallery />
      <ScrollToTop />
    </>
  )
}

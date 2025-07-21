import Header from '../components/Header'
import HeroCarousel from '../components/HeroCarousel'
import ProductsSection from '../components/ProductsSection'
import SolutionsSection from '../components/SolutionsSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Index = () => {
   return (
      <div className='min-h-screen'>
         <Header />
         <main>
            <HeroCarousel />
            <ProductsSection />
            <SolutionsSection />
            <AboutSection />
            <ContactSection />
         </main>
         <Footer />
      </div>
   )
}

export default Index

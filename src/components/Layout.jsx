import Navbar from './Navbar'

const Layout = ({ children }) => {
   return (
      <div className='min-h-screen bg-gray-800'>
         <Navbar />
         <main className='pt-16'>{children}</main>
         <footer className='bg-gray-800 text-white py-8 mt-auto'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <p className='text-center'>
                  &copy; {new Date().getFullYear()} EuroTempest. All rights reserved.
               </p>
            </div>
         </footer>
      </div>
   )
}

export default Layout

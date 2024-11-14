import Footer from '@/components/header-footer/Footer'
import Header from '@/components/header-footer/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] w-full mx-auto'>
            <Header />
            <div className='min-h-[60vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
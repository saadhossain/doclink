import DocLink from '@/assets/DocLink.svg';
import { NavLink } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import MobileNav from './MobileNav';


const Header = () => {
    return (
        <div className='border-b border-gray-300'>
            <div className='w-10/12 mx-auto py-2 hidden md:block'>
                {/* Large Device Menu */}
                <div className='flex items-center justify-between'>
                    {/* Branding */}
                    <NavLink to='/' className='flex items-center gap-2 text-3xl font-semibold text-primary'>
                        <img src={DocLink} alt='DocLink Logo' className='w-8 h-8' />
                        DocLink
                    </NavLink>

                    {/* Navlinks */}
                    <div className='flex items-center gap-2'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/specialities'>Specialities</NavLink>
                        <div className='flex items-center gap-2'>
                            <NavLink
                                to='/signup'
                                className={buttonVariants({ variant: "outline" })}>Sign Up</NavLink>
                            <NavLink
                                to='/login'
                                className={buttonVariants({ variant: "default" })}>Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <MobileNav />
        </div>
    )
}

export default Header
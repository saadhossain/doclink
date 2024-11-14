import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { MenuSquare } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { buttonVariants } from '../ui/button'


const MobileNav = () => {
    return (
        <div className='w-11/12 mx-auto py-2 md:hidden'>
            <Sheet>
                <div className='flex items-center justify-between'>
                    <h2>Logo</h2>
                    <SheetTrigger><MenuSquare /></SheetTrigger>
                </div>
                <SheetContent>
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
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
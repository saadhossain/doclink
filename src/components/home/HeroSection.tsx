import { FaPlayCircle } from "react-icons/fa";
import HeroImage from '../../assets/ui/HeroDocImage.png';
import { Button } from '../ui/button';

const HeroSection = () => {
    return (
        <div className='py-10'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-semibold leading-snug'>Providing Quality <span className='text-primary'>Healthcare</span> for A <br /> <span className='text-secondary'>Brighter</span> and <span className='text-secondary'>Healthy</span> Future</h1>
                    <p className='mt-5'>
                        At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
                    </p>
                    <div className='flex items-center gap-3 mt-5'>
                        <Button>Appointments</Button>
                        <Button
                            className='bg-transparent text-typo shadow-none flex items-center gap-2 hover:bg-transparent hover:shadow-md'
                        >
                            <FaPlayCircle className='text-primary w-8 h-8' />
                            Watch Video
                        </Button>
                    </div>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <img src={HeroImage} alt='Hero Image' className='w-[380px] h-[430px]' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
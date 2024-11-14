import Logo from '../../assets/DocLink.svg'

const Footer = () => {
    return (
        <div className='bg-primary text-white py-10'>
            <div className="w-10/12 mx-auto flex items-center gap-10">
                <div className='w-2/5'>
                    <div className='flex items-center gap-2'>
                        <img src={Logo} alt='DocLink Logo' className='w-12 h-12' />
                        <h2 className="text-2xl font-semibold">DocLink</h2>
                    </div>
                    <p>
                        DocLink is a Doctor Appointment Booking App. Patient can book doctor appointment without hassle, Find doctor based on Speciality, Reviews and Experience and Track appointment.
                    </p>
                </div>
                <div className='w-3/5 grid grid-cols-3 items-center gap-5'>
                    <div>
                        About DocLink
                    </div>
                    <div>
                        Support
                    </div>
                    <div>
                        Quick Links
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
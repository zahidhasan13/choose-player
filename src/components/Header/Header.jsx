import profile from '../../assets/DSC_0985.jpg'
const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-gray-700 flex justify-between items-center px-4 py-2'>
            <a href="#" className='text-3xl text-white'>
                <span className='text-yellow-600'>PLAY</span>ER
            </a>
            <img src={profile} alt="" className='h-8 w-8 rounded-full'/>
        </div>
    );
};

export default Header;
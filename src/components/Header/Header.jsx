import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='max-w-screen-xl mx-auto my-5 px-8 md:px-16 lg:px-24'>
            <div className='flex justify-between items-center flex-col md:flex-row lg:flex-row border-b-2 py-2'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;
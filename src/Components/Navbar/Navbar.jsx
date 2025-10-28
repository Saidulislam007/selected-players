
import navBar from '../../assets/logo.png'
import dollerLogo from '../../assets/dollar-logo.png'
const Navbar = ({availableBalance}) => {
  return (
      <div className="navbar max-w-[1200px] mx-auto ">
        <div className="flex-1">
          <img className='w-[60px] h-[60px]' src={navBar} alt="" />
        </div>
        <div className="flex items-center">
          <span>{availableBalance}</span>
         <span> <img className='w-[40px] h-[40px]' src={dollerLogo} alt="" /></span>
        </div>
      </div>
  );
};

export default Navbar;
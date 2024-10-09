import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
import { FaInstagram} from "react-icons/fa";
import iridescence from '../images/iridescence.png'; 


export default function componentName() {
  const path = useLocation().pathname;
  const instalink=()=>
  {
    window.open("https://www.instagram.com/iridescence.iiitdwd?igsh=bzRqdDBpamt5ZG84",'_blank','noopener','noreferrer');
  } 
  return (
  <Navbar className="border-b-2">
    <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
    <img src={iridescence} alt="Iridescence Icon"  style={{ width: '58px', height: '50px' }}/>
    </Link>

<form action="">
  <TextInput type="text" placeholder="Search...."
  rightIcon={AiOutlineSearch}
  className="hidden lg:inline"/>
</form>
<Button className="lg:hidden w-12 h-10" color='gray' pill >
  <AiOutlineSearch/>
</Button>

<div className="flex items-center gap-2 md:order-2">
  <Button  color='gray' className="w-10" onClick={instalink}> < FaInstagram className="h-4"/></Button>
  <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
    <FaMoon />
  </Button>
  <Link to="/sign-in">
    <Button gradientDuoTone='purpleToBlue' outline> Sign In</Button>
  </Link>
  <Navbar.Toggle/>
</div>
<Navbar.Collapse>
    <Navbar.Link active={path==="/"} as={'div'}><Link to='/'>Home</Link></Navbar.Link>  
    <Navbar.Link  active={path==="/about"} as={'div'}> <Link to='about'>About</Link></Navbar.Link>  
    <Navbar.Link active={path==="/members"} as={'div'}  >  <Link to='/members'>Members</Link></Navbar.Link>
    </Navbar.Collapse>

      </Navbar>
  );
}

import { Avatar, Button, Navbar, TextInput, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaInstagram } from 'react-icons/fa';
import iridescence from '../images/iridescence.png';
import { useSelector } from "react-redux";

export default function ComponentName() {
  const path = useLocation().pathname;

  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser,"this is what i need to send");
  let xname = "";
if(currentUser){

  const initialName = currentUser.username 
  console.log(initialName);
  let length = initialName.length;

  for (let i = 0; i < length; i++) {
    if (initialName[i] == '#') {
      
      break
    }
    xname += initialName[i];
  }}
  console.log(currentUser)
  console.log("hari");
  // console.log(currentUser. googlePhotoUrl)

  const instalink = () => {
    window.open("https://www.instagram.com/iridescence.iiitdwd?igshid=bzRqdDBpamt5ZG84", '_blank', 'noopener,noreferrer');
  };

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <img src={iridescence} alt="Iridescence Icon" style={{ width: '58px', height: '50px' }} />
      </Link>

      <form action="" className="hidden lg:inline">
        <TextInput type="text" placeholder="Search...." icon={AiOutlineSearch} />
      </form>

      <Button className="lg:hidden w-12 h-10" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex items-center gap-2 md:order-2">
        <Button color="gray" className="w-10" onClick={instalink}>
          <FaInstagram className="h-4" />
        </Button>
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {currentUser ? (
          <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={currentUser.googlePhotoUrl} rounded />}>
            {/* Add Dropdown Items Here */}
            <Dropdown.Header className="w-[120px] flex justify-center">
              <span className="font-bold text-[15px] hover:scale-105"> #{xname.toUpperCase()}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>
                Profile
              </Dropdown.Item>
            </Link>
            <Dropdown.Item>
              Sign Out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as="div">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as="div">
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/members"} as="div">
          <Link to="/members">Members</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/events"} as="div">
          <Link to="/events">Events</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/addevent"} as="div">
          <Link to="/addevent">Add Event</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

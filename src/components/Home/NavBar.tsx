import BaseNavLink from "../../UI/BaseNavLink.tsx";
import {FaUser, FaUserFriends} from "react-icons/fa";
import {IoSettings} from "react-icons/io5";
import {RiArchiveDrawerFill} from "react-icons/ri";

const navigations = [
  {
    href: '/user',
    label: 'User',
    icon: <FaUser/>
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <IoSettings/>
  }, {
    href: '/friends',
    label: 'Friends',
    icon: <FaUserFriends/>
  }, {
    href: '/archived',
    label: 'Archived',
    icon: <RiArchiveDrawerFill/>
  }
]


const NavBar = () => {
  return (
    <nav className='flex flex-col gap-2 bg-white-accent -my-6 -ml-6 rounded-3xl p-6'>
      {navigations.map(({href, label, icon}) => (<BaseNavLink icon={icon} label={label} to={href}/>))}
    </nav>
  );
};

export default NavBar;
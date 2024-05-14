import BaseNavLink from '../../UI/BaseNavLink.tsx';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { RiArchiveDrawerFill } from 'react-icons/ri';

const navigations = [
  {
    href: '/users/1',
    label: 'User',
    icon: <FaUser />,
  },
  {
    href: '/settings',
    label: 'Settings',
    icon: <IoSettings />,
  },
  {
    href: '/friends',
    label: 'Friends',
    icon: <FaUserFriends />,
  },
  {
    href: '/archived',
    label: 'Archived',
    icon: <RiArchiveDrawerFill />,
  },
];

const NavBar = () => {
  return (
    <>
      {navigations.map(({ href, label, icon }) => (
        <BaseNavLink key={href} icon={icon} label={label} to={href} />
      ))}
    </>
  );
};

export default NavBar;

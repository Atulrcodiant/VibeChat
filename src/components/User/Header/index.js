import React, { useEffect, useState } from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import ImageElement from '../../ImageElement';
import { AppBar, Avatar, Box, Container, List, ListItem } from '@mui/material';
import { userRoutes } from '../../../routes/User';
import userRouteMap from '../../../routes/User/userRouteMap';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const {pathname} = useResolvedPath();
     // State variable to track whether the class should be applied or not
    const [isToggled, setToggled] = useState(false);

    // Function to toggle the state value
    const toggleClass = () => {
        setToggled(!isToggled);
    };

    useEffect(() => {
        setTimeout(() => {
          let navbar = document.querySelector(".headerMain");
          let navbarHeight = navbar.clientHeight;
          let navbarOffsetTop = navbar.offsetTop;
          document.querySelector("body").style.paddingTop = `${navbarHeight + navbarOffsetTop}px`;
        }, 300);
        
    }, []);
  return (
    <>
        <AppBar position="fixed" className='headerMain'>
            <Container>
                <Box className='header'>
                    <Box className='brand-logo flex-center'>
                        <Link to="#"><ImageElement source="logo.svg" alt='lyria' /></Link>
                    </Box>
                    <List className= {isToggled ? 'header_menu flex-center list-unstyled menuOpen' : 'header_menu flex-center list-unstyled'}>
                        <ListItem className='menu_item'><Link className={`flex-center ${pathname === userRouteMap.HOME.path ? 'active' : ''}`} to={userRouteMap.HOME.path}>Home</Link></ListItem>
                        <ListItem className='menu_item'><Link className='flex-center' to="#">Who We Are</Link></ListItem>
                        <ListItem className='menu_item'><Link className={`flex-center ${pathname === userRouteMap.MESSAGE.path ? 'active' : ''}`} to={userRouteMap.MESSAGE.path}>Messages</Link></ListItem>
                        <ListItem className='menu_item'><Link className='flex-center' to="#">What We Do</Link></ListItem>
                        <ListItem className='menu_item'><Link className='flex-center' to="#">Why Choose Us</Link></ListItem>
                    </List>
                    <List className='header_right flex-center list-unstyled'>
                        <ListItem><Link className='flex-center' to="#"><em className="lyria-notification" /><span className='flex-center'>2</span></Link></ListItem>
                    </List>
                    <Box className='header_profile flex-center'>
                        <Link className='flex-center' to={userRouteMap.USERPROFILE.path}><Avatar className='avatarImg'  alt="" src="/images/user01.png" /></Link>
                    </Box>
                    <button onClick={toggleClass} type="button" className= {isToggled ? 'toggleBtn toggleBtn-open' : 'toggleBtn'}>
                        <MenuOpenIcon className='icon-toggle' />
                        <CloseIcon className='icon-close' />
                    </button>
                </Box>
            </Container>
        </AppBar>
        {isToggled && <Box onClick={() => setToggled(false) } className="menuOverlay"></Box> }
    </>
  )
}

export default Header
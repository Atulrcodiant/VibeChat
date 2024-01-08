import React from 'react';
import { Link } from 'react-router-dom';
import ImageElement from '../../ImageElement';
import { Box, Container, List, ListItem,Typography } from '@mui/material';
import userRouteMap from '../../../routes/User/userRouteMap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
        <Box className='footer'>
            <Container>
                <Box className='footer_logo flex-center'>
                    <Link to="#"><ImageElement source="logo.svg" alt='lyria' /></Link>
                </Box>
                <Box className='footer_links'>
                    <List className='links flex-center list-unstyled'>
                        <ListItem className='links_item'><Link className='flex-center' to={userRouteMap.HOME.path}><Typography variant="span">Home</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center' to="#"><Typography variant="span">how it works</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center active' to="#"><Typography variant="span">Who we are</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center' to="#"><Typography variant="span">What we do</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center' to="#"><Typography variant="span">why choose us</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center' to="#"><Typography variant="span">register</Typography></Link></ListItem>
                        <ListItem className='links_item'><Link className='flex-center' to="#"><Typography variant="span">login</Typography></Link></ListItem>
                    </List>
                </Box>
                <Box className='footer_socials'>
                    <List className='socialLink flex-center list-unstyled'>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><FacebookIcon /></Link></ListItem>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><InstagramIcon /></Link></ListItem>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><TwitterIcon  /></Link></ListItem>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><PinterestIcon /></Link></ListItem>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><LinkedInIcon /></Link></ListItem>
                        <ListItem className='socialLink_item'><Link className='flex-center' to="#"><GitHubIcon /></Link></ListItem>
                    </List>
                </Box>
                <Box className='footer_copyright' display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Typography>© 2024 vibeChat All Rights Reserved</Typography>
                    <Box display="flex" >
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
  );
};

export default Footer;

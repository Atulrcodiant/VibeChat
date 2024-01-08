import React from "react";
import { Container, Avatar, Typography, Grid ,ListItem ,List} from '@mui/material';
import { Box } from "@mui/system";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AvatarImage, ImageElement } from "../../../components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="homePage">
        <section className="bannerSec py-100">
          <Container>
            <Box className="bannerSec_inner">
              <Box className="bannerSec_inner_lft">
                <Box className="commonHead">
                  <Box className="commonHead_sub lg">🔥#BESINGLENOTSOLO</Box>
                  <Typography variant="h1" className="commonHead_title lg" >Chatting For Every Single Person</Typography>
                  <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius fringilla ex sit amet viverra.</Typography>
                </Box>
                <Box className="bannerSec_img">
                  <Box className="bannerSec_img_box">
                    <Box className="bannerSec_img_box_items">
                      <AvatarImage alt="banner-img" src="banner-img-1.webp" />
                    </Box>
                    <Box className="bannerSec_img_box_items">
                      <AvatarImage alt="banner-img" src="banner-img-2.webp" />
                    </Box>
                    <Box className="bannerSec_img_box_items">
                      <AvatarImage alt="banner-img" src="banner-img-3.webp" />
                    </Box>
                    <Box className="bannerSec_img_box_items">
                      <AvatarImage alt="banner-img" src="banner-img-4.webp" />
                    </Box>
                    <Box className="bannerSec_img_box_items">
                      <AvatarImage alt="banner-img" src="banner-img-5.webp" />
                      <Box className="bannerSec_img_box_items_toggle"><span>99+</span></Box>                    
                    </Box>
                  </Box>
                  <Box className="bannerSec_img_txt">
                    meet them today!
                  </Box>
                </Box>
              </Box>
              <Box className="bannerSec_inner_rht">            
                <AvatarImage alt="banner-full-img" src="banner.webp" />
              </Box>              
            </Box>
          </Container>
        </section>
        <section className="howSec py-100">
          <Container>
            <Box className="commonHead text-center">
              <Box className="commonHead_sub">😋#ourprocess</Box>
              <Typography variant="h2" className="commonHead_title mb-0" >How It Works</Typography>
            </Box>
            <Box className="howSec_inner">            
              <Grid container>
                <Grid item lg={3} md={6}>
                  <Box className="howSec_box">
                    <Box className="howSec_box_img">
                      <AvatarImage alt="how-img" src="how-it-works-1.webp" />
                    </Box>
                    <Box className="howSec_box_num">1</Box>
                    <Typography className="howSec_box_title" variant="h3">Login Account Lorem Ipsum Dolor Fores Sit Amet</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={6}>
                  <Box className="howSec_box">
                    <Box className="howSec_box_img">
                      <AvatarImage alt="how-img" src="how-it-works-2.webp" />
                    </Box>
                    <Box className="howSec_box_num">2</Box>
                    <Typography className="howSec_box_title" variant="h3">Login Account Lorem Ipsum Dolor Fores Sit Amet</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={6}>
                  <Box className="howSec_box">
                    <Box className="howSec_box_img">
                      <AvatarImage alt="how-img" src="how-it-works-3.webp" />
                    </Box>
                    <Box className="howSec_box_num">3</Box>
                    <Typography className="howSec_box_title" variant="h3">Login Account Lorem Ipsum Dolor Fores Sit Amet</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={6}>
                  <Box className="howSec_box">
                    <Box className="howSec_box_img">
                      <AvatarImage alt="how-img" src="how-it-works-4.webp" />
                    </Box>
                    <Box className="howSec_box_num">4</Box>
                    <Typography className="howSec_box_title" variant="h3">Login Account Lorem Ipsum Dolor Fores Sit Amet</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
        <section className="aboutUs py-100">
            <Container>
                <Box>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item md={6}>
                          <Box className="aboutUs_img">
                            <ImageElement source="who-we-are.webp"  />
                          </Box>
                        </Grid>
                        <Grid  item md={6}>
                            <Box className="aboutUs_caption">
                                <Box className="commonHead">
                                    <Box className="commonHead_sub">🙈#aboutus</Box>
                                    <Typography variant="h2" className="commonHead_title">Know Who We Are</Typography>
                                    <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius fringilla ex sit amet viverra. Donec tempor tellus eget magna consequat ullamcorper. Nam ultrices lacus ut sem sodales tincidunt. Quisque tristique scelerisque risus vitae interdum.</Typography>
                                    <Typography>Phasellus luctus quam non ex consectetur, ac mattis sem ultrices. Sed purus mauris, dignissim eu sapien vitae, ultrices condimentum ipsum. Phasellus elementum risus ornare tellus finibus eleifend. Curabitur aliquet metus eros, sed posuere risus eleifend et.</Typography>
                                    <Link to="#" className="btn btn-danger d-inline-flex">Join Us</Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
        <section className="vibeChat py-100">
            <Container>
                <Box textAlign="center" className="commonHead">
                    <Box className="commonHead_sub">👻#vibechat</Box>
                    <Typography variant="h2" className="commonHead_title">What We Do</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, turpis varius feugiat efficitur, ex quam tempus ante eget dapibus eros nisiroin vitae iaculis libero. Donec eleifend purus augue non congue magna lacini tempor justo quam</Typography>
                </Box>
            </Container>
            <ImageElement source="what-we-do.webp"  />
        </section>
        <section className="whyChooseSec py-100">
          <Container>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <Box className="commonHead">
                  <Box className="commonHead_sub">🎁#ourfeatures</Box>
                  <Typography variant="h1" className="commonHead_title">
                    Why Choose Us
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis, turpis varius feugiat efficitur, ex quam
                    tempus ante eget dapibus nisiroin iaculis libero. Donec
                    eleifend purus augue non congue magna lacini tempor justo
                    quam
                  </Typography>
                </Box>
                <Box className="whyChooseSec_video">
                  <ImageElement source="why-choose-us.webp" alt="why-choose-us"  />
                  <Link to="#" className="icon">
                    <PlayArrowIcon ></PlayArrowIcon>
                  </Link>
                </Box>
              </Grid>
              <Grid item md={7}>
                <Box className="whyChooseSec_list">
                  <List className="list-unstyled">
                    <ListItem>
                      🔥 Lorem ipsum dolor sit amet consectetur adipiscing elic
                    </ListItem>
                    <ListItem>🥰 Amet consectetur adipiscing fore</ListItem>
                    <ListItem>🌈 Donec mattis, turpis varius feugiat efficitur ex</ListItem>
                    <ListItem>😈 Non congue magna lacini tempor justo</ListItem>
                    <ListItem>
                      👺 Tempus ante eget dapibus eros nisiroin vitae iaculis
                    </ListItem>
                    <ListItem>🙈 Lorem ipsum dolor sit amet</ListItem>
                  </List>
                  <Link to="#" className="btn btn-danger d-inline-flex">
                    Join Us
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;

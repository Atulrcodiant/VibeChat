import React, { useState } from "react";
import {
  Container,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  MenuItem,
  TextField,
  TextareaAutosize,
  Box,
  styled,
} from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ImageElement } from "../../../components";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  profileData,
  selectProfileUserData,
} from "../../../redux/profileUserSlice/index.slice";

function UserProfile() {
  const data = useSelector(selectProfileUserData);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateProfile = (values) => {
    dispatch(profileData(values));
    handleClose();
  };

  const genderOptions = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
    { value: 3, label: "Other" },
  ];
  const initialState = {
    firstName: "",
    lastName: "",
    gender: undefined,
    location: "",
    height: "",
    tattoos: "",
    bodyType: undefined,
    drinking: undefined,
    piercing: "",
    sexuality: undefined,
    ethnicity: "",
    smoker: undefined,
    bio: "",
  };

  return (
    <>
      <main>
        <section className="userProfile">
          <Container>
            <Card>
              <ImageElement
                component="img"
                alt="user-cover-img"
                height="100"
                source="user-cover-img.png"
              />
              <CardContent className="userProfile_content">
                <Box className="userInfo">
                  <Box className="userInfo_wrapper">
                    <Box className="userInfo_img">
                      <ImageElement
                        source="profile.jpg"
                        alt="images"
                        loading="lazy"
                      />
                    </Box>
                    <Box className="userInfo_cnt">
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Typography
                            gutterBottom
                            variant="h2"
                            className="username"
                          >
                            {data?.firstName && data?.lastName
                              ? `${data.firstName} ${data?.lastName} `
                              : "TheJohhnyCool"}
                          </Typography>
                          <Typography variant="body2" className="address">
                            {data?.location
                              ? data?.location
                              : "34 Independence, Kansas, USA"}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                          <Link
                            href="#"
                            variant="body2"
                            className="userInfo_edit"
                            onClick={handleClickOpen}
                          >
                            <DriveFileRenameOutlineOutlinedIcon />
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Grid container spacing={3}>
              <Grid item lg={4}>
                <Box className="userProfile_details">
                  <Typography variant="h3">Personal Details</Typography>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-gender" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Gender" secondary="Male" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-location" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Location"
                        secondary="Greenville, USA"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-height" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Height" secondary="6'1" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-tattoos" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Tattoos" secondary="No Tattoos" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-body-type" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Body type" secondary="Athletic" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-drinking" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Drinking"
                        secondary="Don't Drink"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-piercing" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Piercing"
                        secondary="Some Piercing"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-sexuality" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Sexuality" secondary="Straight" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-ethnicity" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Ethnicity"
                        secondary="Caucasian (white)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <em className="lyria-smoker" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Smoker" secondary="No" />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item lg={8}>
                <Box className="userProfile_details">
                  <Typography variant="h3">My Bio</Typography>
                  <p>
                    {data?.bio
                      ? data?.bio
                      : "I have obtained my Bachelors in Computer Application. Currently, I am employed as a Web Designer. My kind nature and simplicity are at the essence of who I am. An ideal match for me would be someone with whom I can enjoy the journey of life and who can support me in all my endeavours. All the best and should you require any additional information please feel free to contact."}
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>

      <Dialog open={open} onClose={handleClose} className="profileModal">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ ...initialState }}
            onSubmit={(e) => handleUpdateProfile(e)}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs="12" md={12}>
                    <Box className="text-center">
                      <Box className="profileImg">
                        <Avatar
                          alt="Remy Sharp"
                          src="/images/user01.png"
                          sx={{ width: 100, height: 100 }}
                        />
                        <Box className="profileImg_uploadIcon">
                          <Fab
                            component="label"
                            size="small"
                            color="primary"
                            aria-label="add"
                            className="btn btn-danger"
                          >
                            <VisuallyHiddenInput type="file" />
                            <CameraAltIcon />
                          </Fab>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs="12" md={6}>
                    <TextField
                      autoFocus
                      id="firstName"
                      label="First Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={values.firstName}
                      onChange={handleChange}

                      // onChange={(e) => handleFormChange('firstName', e.target.value)}
                      // value={userProfileData.firstName || ''}
                    />
                  </Grid>
                  <Grid item xs="12" md={6}>
                    <TextField
                      id="lastName"
                      label="Last Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  

                  <Grid item xs="12" md={12}>
                    <TextareaAutosize
                      id="bio"
                      minRows="5"
                      className="bioField"
                      placeholder="Bio"
                      value={values.bio}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <DialogActions className="modalFooter">
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    color="secondary"
                    className="btn btn-outline-secondary d-inline-flex"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="btn btn-danger d-inline-flex"
                  >
                    Update
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UserProfile;

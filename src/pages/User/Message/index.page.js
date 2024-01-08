import React, { useEffect } from "react";
import ImageElement from "../../../components/ImageElement";
import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../../../assets/static-data";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  sendMessage,
} from "../../../redux/chatUserSlice/index.slice";
import { profileData } from "../../../redux/profileUserSlice/index.slice";
import { AvatarImage } from "../../../components";

function Message() {
  let dispatch = useDispatch();
  const realTimeMessage = useSelector(selectUserData);
  const [show, setShow] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState("");

    const showChatHandle = (e) => {
        e.preventDefault();
        if(window.screen?.width<=991){
            setShow(!show);
            document.querySelector("body").classList.add("overflow-hidden");
        }
    };
    const hideChatHandle = () => {
        setShow(false);
        document.querySelector("body").classList.remove("overflow-hidden");
    }

  const [newMessage, setNewMessage] = React.useState("");

  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight + 550;
  }
  const handleSendMessage = () => {
    // Dispatch the sendMessage action with the new message
    dispatch(sendMessage(newMessage));
    setTimeout(() => {
      scrollToBottom("chatBody")
    }, 200);
    // Clear the input field after sending the message
    setNewMessage("");
  };
  useEffect(() => {
    setTimeout(() => {
      let navbar = document.querySelector(".chatSec_right");
      let navbarOffsetTop = navbar.offsetTop;
      if (window.screen?.width <= 991) {
        document.querySelector(".chatSec_right").style.height = `${
          window.innerHeight - navbarOffsetTop
        }px`;
      }
    }, 100);
    setTimeout(() => {
      let navbar = document.querySelector(".headerMain");
      let navbarHeight = navbar.clientHeight;
      let navbarOffsetTop = navbar.offsetTop;
      if (window.screen?.width <= 991) {
        document.querySelector(".chatSec_left ").style.height = `${
          window.innerHeight - (navbarHeight + navbarOffsetTop + 48 + 80)
        }px`;
      }
    }, 100);
  }, []);

 


  return (
    <>
      <main>
        <section className="chatSec">
          <Container>
            <Box className="chatSec_wrap" display="flex">
              <Box className="chatSec_left p-16">
                <Box
                  className="chatSec_left_head"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box className="chatSec_left_head_lft">
                    <Box className="chatSec_left_head_search">
                      <OutlinedInput
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        startAdornment={
                          <InputAdornment position="start">
                            <em className="lyria-list" />
                          </InputAdornment>
                        }
                      />
                    </Box>
                  </Box>
                  <Box className="chatSec_left_head_rht">
                    <Link
                      className="chatSec_left_head_filter"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <em className="lyria-filter" />
                    </Link>
                  </Box>
                </Box>

                <Box className="chatSec_left_body">
                  {data
                    ?.filter((message) =>
                      message?.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((message) => (
    
                        <Box
                          className="chatSec_left_body_items"
                          onClick={(e) => showChatHandle(e)}
                          display="flex"
                          alignItems="start"
                          justifyContent="space-between"
                          key={message.id}
                        >
                          <Box
                            className="chatSec_left_body_items_lft"
                            display="flex"
                            alignItems="center"
                          >
                            <AvatarImage
                              className="img"
                              alt={message?.name}
                              src={message?.profile}
                            />
                            <Box>
                              <Box className="chatSec_left_body_items_title">
                                {message?.name}
                              </Box>
                              <Box className="chatSec_left_body_items_para">
                                {message?.last_message}
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            className="chatSec_left_body_items_rht"
                            align="right"
                          >
                            {message?.time && (
                              <Box className="chatSec_left_body_items_time">
                                {message?.time}
                              </Box>
                            )}
                            {message?.unread_message && (
                              <Box className="chatSec_left_body_items_count">
                                {message?.unread_message}
                              </Box>
                            )}
                          </Box>
                          {message?.last_message_date && (
                            <Box
                              className="chatSec_left_body_items_rht"
                              align="right"
                            >
                              <Box className="chatSec_left_body_items_time">
                                {message?.last_message_date}
                              </Box>
                            </Box>
                          )}
                        </Box>
                 
                    ))}
                </Box>
              </Box>
              <Box className={`chatSec_right ${show ? "show" : ""}`}>
                <Box className="chatSec_right_head p-16">
                  <Link onClick={() => hideChatHandle()} className="backBtn">
                    <em className="lyria-arrow-left"></em>
                  </Link>
                  <h1>
                    Sophia Turner<span>1 token / min</span>
                  </h1>
                </Box>
                <Box className="chatSec_right_body" id="chatBody">
                  {/* <Box className="receiver">
                                    <Box className="user" display="flex" alignItems="center">
                                        <Avatar className="img" alt="Sophia" src="/images/user01.png" />
                                        <h6>Sophia</h6>
                                    </Box>
                                    <ImageElement className="file" source="audio-player.png" alt='audio-player' />
                                    <ImageElement className="file" source="lyria-chat.png" alt='audio-player' />
                                </Box>
                                <Box className="date">September 2, 9.32 PM</Box> */}
                  <Box className="sender">
                    <Box
                      className="user"
                      display="flex"
                      alignItems="center"
                      justifyContent="end"
                    >
                      <h6>Alex</h6>
                      <Avatar className="avatar">A</Avatar>
                    </Box>
                    <Box className="msg">Hey Sophia. How was your day?</Box>
                  </Box>
                  <Box className="receiver">
                    <Box className="user" display="flex" alignItems="center">
                      <AvatarImage
                        className="img"
                        alt="Sophia"
                        src="user01.png"
                      />
                      <h6>Sophia</h6>
                    </Box>
                    <Box className="msg text-left">
                      Hey Sophia. How was your day?
                    </Box>
                  </Box>
                  {realTimeMessage?.map((message) => {
                    return (
                      <Box className="sender">
                        <Box
                          className="user"
                          display="flex"
                          alignItems="center"
                          justifyContent="end"
                        >
                          <h6>Alex</h6>
                          <Avatar className="avatar">A</Avatar>
                        </Box>
                        <Box className="msg">{message}</Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box className="chatSec_right_foot">
                  {/* <Box className="chatSec_right_foot_speak">
                                    Sophia is speaking <em className="lyria-loading"/>
                                </Box> */}
                  <Box className="chatSec_right_foot_msgbox">
                    <Box className="chatSec_right_foot_lft">
                      <input
                        type="text"
                        placeholder="Type your Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                    </Box>
                    <Box className="chatSec_right_foot_rht">
                      <Link className="iconBtn" to="#">
                        <em className="lyria-more" />
                      </Link>
                      <Link className="iconBtn" to="#">
                        <em className="lyria-mic" />
                      </Link>
                      <Button
                        variant="contained"
                        className="sendBtn"
                        color="secondary"
                        onClick={handleSendMessage}
                        disabled={!newMessage}
                      >
                        <span>Send</span> <em className="lyria-send" />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Message;

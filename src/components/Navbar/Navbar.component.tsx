import React from "react";
import navBarStyles from "./Navbar.styles";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import NavImg from "../../assets/images/navImg.png";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

const Navbar = () => {
  const classes = navBarStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Dashboard</h2>
      <div className={classes.navContent}>
        <ul className={classes.navList}>
          <li className={classes.navIcon}>
            <ForumOutlinedIcon style={{ color: "#A3ABB7", fontSize: 20 }} />
          </li>
          <li className={classes.navIcon}>
            <div style={{ position: "relative" }}>
              <NotificationsOutlinedIcon
                style={{ color: "#A3ABB7", fontSize: 20 }}
                className={classes.greyIcon}
              />
              <span className={classes.dot}></span>
            </div>
          </li>
        </ul>
        <div className={classes.navImgBox}>
          <img src={NavImg} alt="N" className={classes.navImg} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

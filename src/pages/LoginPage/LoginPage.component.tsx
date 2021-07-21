import loginStyles from "./loginPage.styles";
import shipBg from "../../assets/images/star-ship.svg";
import clsx from "clsx";
import Login from "../../components/Login/Login.component";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import starShip from "../../assets/images/astronaut.svg";

const LoginPage = () => {
  const classes = loginStyles();
  return (
    <div className={classes.root}>
      <div className={clsx(classes.welcome, classes.spaceTop)}>
        <div className={classes.welcomeBox}>
          <h1 className={classes.welcomeTitle}>
            Welcome to Star Wars <br /> the Clone Wars
          </h1>
        </div>
        <div className={classes.shipBg}>
          <img src={starShip} alt="img" className={classes.makeImg} />
        </div>
        <div className={classes.blackBg}>mm</div>
      </div>
      <div className={classes.login}>
        <div className={classes.svgFlex}>
          <img src={shipBg} alt="img" className={classes.svgImg} />
        </div>
        <div className={classes.loginContainer}>
          <Login />
        </div>
        <div className={classes.footer}>
          <h6 className={classes.copy}>
            All rights reserved &copy; 2020 STAR WARS
          </h6>
          <ul className={classes.list}>
            <li className={classes.listItem}>Privacy</li>
            <li className={classes.listItem}>Terms</li>
          </ul>
          <h6 className={classes.last}>
            English{" "}
            <span>
              <ArrowDropDownIcon className={classes.footerIcon} />
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

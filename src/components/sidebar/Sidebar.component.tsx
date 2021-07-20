import React from "react";
import sidebarStyles from "./Sidebar.styles";
import StarsLogo from "../../assets/images/Star-wars-logo.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink, useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const classes = sidebarStyles();
  let { url } = useRouteMatch();
  return (
    <div className={classes.root}>
      <figure className={classes.logoBox}>
        <img src={StarsLogo} alt="star wars" className={classes.image} />
      </figure>
      <List className={classes.navList} style={{}}>
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to="/dashboard"
          activeClassName={classes.activeNavLink}
          exact={true}
          //   onClick={handleCloseSidebar}
        >
          <ListItemIcon className={classes.listIcon}>
            <div className={classes.svgBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //   width="20"
                //   height="20"
                viewBox="0 0 20 20"
                className={classes.ak}
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  className="a"
                  d="M7.708,0H1.458A1.46,1.46,0,0,0,0,1.458v3.75A1.46,1.46,0,0,0,1.458,6.667h6.25A1.46,1.46,0,0,0,9.167,5.208V1.458A1.46,1.46,0,0,0,7.708,0Zm0,0"
                />
                <path
                  className="a"
                  d="M7.708,213.332H1.458A1.46,1.46,0,0,0,0,214.79v8.75A1.46,1.46,0,0,0,1.458,225h6.25a1.46,1.46,0,0,0,1.458-1.458v-8.75A1.46,1.46,0,0,0,7.708,213.332Zm0,0"
                  transform="translate(0 -204.999)"
                />
                <path
                  className="a"
                  d="M285.04,341.332h-6.25a1.46,1.46,0,0,0-1.458,1.458v3.75A1.46,1.46,0,0,0,278.79,348h6.25a1.46,1.46,0,0,0,1.458-1.458v-3.75A1.46,1.46,0,0,0,285.04,341.332Zm0,0"
                  transform="translate(-266.499 -327.999)"
                />
                <path
                  className="a"
                  d="M285.04,0h-6.25a1.46,1.46,0,0,0-1.458,1.458v8.75a1.46,1.46,0,0,0,1.458,1.458h6.25a1.46,1.46,0,0,0,1.458-1.458V1.458A1.46,1.46,0,0,0,285.04,0Zm0,0"
                  transform="translate(-266.499)"
                />
              </svg>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            className={classes.listText}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={`${url}/starships`}
          activeClassName={classes.activeNavLink}
          exact={true}
          //   onClick={handleCloseSidebar}
        >
          <ListItemIcon className={classes.listIcon}>
            <div className={classes.svgBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16.29 20"
                className={classes.ak}
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  className="a"
                  d="M61.627,18.71H60.355V2.9a.645.645,0,0,0-.645-.645H54.871V.645A.645.645,0,0,0,54.226,0H49.75A.645.645,0,0,0,49.1.645V2.258h-.524a.645.645,0,0,0-.645.645V18.71H46.663a.657.657,0,0,0-.663.614.645.645,0,0,0,.644.676h4.6a.323.323,0,0,0,.323-.323v-3.71H51.3a.657.657,0,0,1-.663-.614.645.645,0,0,1,.644-.676H56.99a.657.657,0,0,1,.663.614.645.645,0,0,1-.644.676h-.282v3.71a.323.323,0,0,0,.323.323h4.6a.645.645,0,0,0,.644-.676A.657.657,0,0,0,61.627,18.71Zm-9.054-5.363h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,1,1,0-1.29h.726a.645.645,0,0,1,0,1.29ZM56.4,13.347h-.726a.645.645,0,1,1,0-1.29H56.4a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,1,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,0,1,0,1.29Zm0-2.419h-.726a.645.645,0,0,1,0-1.29H56.4a.645.645,0,0,1,0,1.29ZM52.855,19.677V16.29a.323.323,0,0,1,.323-.323h1.935a.323.323,0,0,1,.323.323v3.387a.323.323,0,0,1-.323.323H53.178A.323.323,0,0,1,52.855,19.677Z"
                  transform="translate(-46)"
                />
              </svg>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Starships"
            className={classes.listText}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={`${url}/people`}
          activeClassName={classes.activeNavLink}
          exact={true}
          //   onClick={handleCloseSidebar}
        >
          <ListItemIcon className={classes.listIcon}>
            <div className={classes.svgBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //   width="20"
                //   height="20"
                viewBox="0 0 20 20"
                className={classes.ak}
              >
                <defs>
                  <style></style>
                </defs>
                <g transform="translate(0 -4.659)">
                  <g transform="translate(0 4.659)">
                    <path
                      className="a"
                      d="M19.65,11.519a1.569,1.569,0,0,0-1.17-.573H17.261L12.556,5.012a.864.864,0,0,0-1.195-.175.911.911,0,0,0-.171,1.222c0,.025.024.025.024.05l3.876,4.837H4.657L8.509,6.109A.88.88,0,0,0,8.46,4.887a.834.834,0,0,0-1.195.05l-.073.075L2.487,10.971H1.512A1.537,1.537,0,0,0,0,12.517a1.241,1.241,0,0,0,.024.3l1.95,10.048a2.184,2.184,0,0,0,2.145,1.8H15.871a2.184,2.184,0,0,0,2.145-1.8l1.95-10.048A1.571,1.571,0,0,0,19.65,11.519ZM7.46,19.672a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Zm3.389,0a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Zm3.364,0a.854.854,0,1,1-1.707,0v-3.54a.854.854,0,1,1,1.707,0Z"
                      transform="translate(0 -4.659)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="people"
            className={classes.listText}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={`${url}/vehicles`}
          activeClassName={classes.activeNavLink}
          exact={true}
          //   onClick={handleCloseSidebar}
        >
          <ListItemIcon className={classes.listIcon}>
            <div className={classes.svgBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //   width="20"
                //   height="20"
                viewBox="0 0 20 20"
                className={classes.ak}
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  className="a"
                  d="M2.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,40Z"
                  transform="translate(0 -25.714)"
                />
                <path
                  className="a"
                  d="M22.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,40Z"
                  transform="translate(-12.857 -25.714)"
                />
                <path
                  className="a"
                  d="M42.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,40Z"
                  transform="translate(-25.714 -25.714)"
                />
                <path
                  className="a"
                  d="M2.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,20Z"
                  transform="translate(0 -12.857)"
                />
                <path
                  className="a"
                  d="M22.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,20Z"
                  transform="translate(-12.857 -12.857)"
                />
                <path
                  className="a"
                  d="M42.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,20Z"
                  transform="translate(-25.714 -12.857)"
                />
                <path
                  className="a"
                  d="M2.857,0A2.857,2.857,0,1,0,5.714,2.857,2.86,2.86,0,0,0,2.857,0Z"
                />
                <path
                  className="a"
                  d="M22.857,0a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,0Z"
                  transform="translate(-12.857)"
                />
                <path
                  className="a"
                  d="M42.857,5.714A2.857,2.857,0,1,0,40,2.857,2.86,2.86,0,0,0,42.857,5.714Z"
                  transform="translate(-25.714)"
                />
              </svg>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Vehicles"
            className={classes.listText}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          component={NavLink}
          to={`${url}/species`}
          activeClassName={classes.activeNavLink}
          exact={true}
          //   onClick={handleCloseSidebar}
        >
          <ListItemIcon className={classes.listIcon}>
            <div className={classes.svgBg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //   width="20"
                //   height="20"
                viewBox="0 0 20 20"
                className={classes.ak}
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  className="a"
                  d="M2.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,40Z"
                  transform="translate(0 -25.714)"
                />
                <path
                  className="a"
                  d="M22.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,40Z"
                  transform="translate(-12.857 -25.714)"
                />
                <path
                  className="a"
                  d="M42.857,40a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,40Z"
                  transform="translate(-25.714 -25.714)"
                />
                <path
                  className="a"
                  d="M2.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,2.857,20Z"
                  transform="translate(0 -12.857)"
                />
                <path
                  className="a"
                  d="M22.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,20Z"
                  transform="translate(-12.857 -12.857)"
                />
                <path
                  className="a"
                  d="M42.857,20a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,42.857,20Z"
                  transform="translate(-25.714 -12.857)"
                />
                <path
                  className="a"
                  d="M2.857,0A2.857,2.857,0,1,0,5.714,2.857,2.86,2.86,0,0,0,2.857,0Z"
                />
                <path
                  className="a"
                  d="M22.857,0a2.857,2.857,0,1,0,2.857,2.857A2.86,2.86,0,0,0,22.857,0Z"
                  transform="translate(-12.857)"
                />
                <path
                  className="a"
                  d="M42.857,5.714A2.857,2.857,0,1,0,40,2.857,2.86,2.86,0,0,0,42.857,5.714Z"
                  transform="translate(-25.714)"
                />
              </svg>
            </div>
          </ListItemIcon>
          <ListItemText
            primary="Species"
            className={classes.listText}
            classes={{ primary: classes.listText }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

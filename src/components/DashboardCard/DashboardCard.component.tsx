import React from "react";
import dashboardCardStyles from "./dashboardCard.styles";
import cameraIcon from "../../assets/images/camera.svg";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  count: number;
};

const DashboardCard: React.FC<Props> = ({ title, count }) => {
  const classes = dashboardCardStyles();
  return (
    <Link to="/" className={classes.root}>
      <div className={classes.cardTop}>
        <h4 className={classes.cardTitle}>{title}</h4>
        <figure className={classes.imgBox} style={{ background: "#D5EED4" }}>
          <img src={cameraIcon} alt="svg" className={classes.img} />
        </figure>
      </div>
      <h6 className={classes.cardNumber}>{count}</h6>
      <div className={classes.cardFooter}>
        <span className={classes.spanGreen}>&uarr; 20 &nbsp;</span>
        <span className={classes.spanGrey}>More Than Yesterday</span>
      </div>
    </Link>
  );
};

export default DashboardCard;

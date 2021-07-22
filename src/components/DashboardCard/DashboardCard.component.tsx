import React from "react";
import dashboardCardStyles from "./dashboardCard.styles";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  count: number;
  route: string;
  iconBg: string;
  icon: any;
};

const DashboardCard: React.FC<Props> = ({
  title,
  count,
  route,
  iconBg,
  icon,
}) => {
  const classes = dashboardCardStyles();
  return (
    <Link to={`${route}`} className={classes.root}>
      <div className={classes.cardTop}>
        <h4 className={classes.cardTitle}>{title}</h4>
        <figure className={classes.imgBox} style={{ background: `${iconBg}` }}>
          <img src={icon} alt="svg" className={classes.img} />
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

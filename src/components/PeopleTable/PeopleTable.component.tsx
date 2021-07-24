import React, { FC } from "react";
import Table from "@material-ui/core/Table";
import peopleTableStyles from "./PeopleTable.styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import testImg from "../../assets/images/navImg.png";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../utils/animate";

type Props = {
  tableData: Record<string, string>[];
};

const PeopleTable: FC<Props> = ({ tableData }) => {
  const classes = peopleTableStyles();

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
      className={classes.root}
    >
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow className={clsx(classes.tableHeader, classes.tableRow)}>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Name
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Birth Year
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Gender
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Eye Color
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Hair Color
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Skin color
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Height
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Created
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {tableData.map((data: Record<string, string>) => (
            <TableRow className={classes.tableRow} key={data.name}>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                component="th"
                scope="row"
              >
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <figure className={classes.tableImgBox}>
                    <img
                      src={testImg}
                      className={classes.tableImg}
                      alt="director"
                    />
                  </figure>
                  <p>{data.name}</p>
                </div>
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.birthYear}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.gender}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.eyeColor}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.hairColor}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.skinColor}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.height}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.created}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default PeopleTable;

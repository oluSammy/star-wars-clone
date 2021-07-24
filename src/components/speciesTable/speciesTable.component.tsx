import React, { FC } from "react";
import speciesTableStyles from "./speciesTable.styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../utils/animate";

type Props = {
  tableData: Record<string, string>[];
};

const SpeciesTable: FC<Props> = ({ tableData }) => {
  const classes = speciesTableStyles();

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
              Classification
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Designation
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Average Height
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Average Lifespan
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Eye colors
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Hair colors
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Language
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
                {data.name}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.classification}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.designation}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.average_height}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.average_lifespan}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.eye_colors}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.hair_colors}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.linkText
                )}
                // align="justify"
              >
                {data.language}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default SpeciesTable;

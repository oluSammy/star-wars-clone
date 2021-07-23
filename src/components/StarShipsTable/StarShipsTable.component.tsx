import { FC } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import starShipsTabbleStyles from "./StarShipsTable.styles";
import Checkbox from "@material-ui/core/Checkbox";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../utils/animate";

type Props = {
  tableData: Record<string, string>[];
};

const StarShipsTable: FC<Props> = ({ tableData }) => {
  const classes = starShipsTabbleStyles();
  //   const [checked, setChecked] = useState(true);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setChecked(event.target.checked);
  //   };

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
              &nbsp;
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Name
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Model
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              class
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
              align="justify"
            >
              Cost (in GC)
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Passengers
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              Length
            </TableCell>
            <TableCell
              className={clsx(classes.tableHeading, classes.tableCell)}
            >
              crew
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {/* {tableData.map(data:  Record<string, string>) => {

            }} */}
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
                <Checkbox
                  inputProps={{ "aria-label": "primary checkbox" }}
                  style={{ color: "#DDDBDB", height: ".2rem", width: ".2rem" }}
                />
              </TableCell>
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
                {data.model}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.clas}
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                <span style={{ color: "#3620B1" }}>{data.cost}</span>
              </TableCell>
              <TableCell
                className={clsx(
                  classes.tableCell,
                  classes.tablePadding,
                  classes.tableText
                )}
                align="justify"
              >
                {data.passengers}
              </TableCell>
              <TableCell
                className={clsx(classes.tableCell, classes.tablePadding)}
                // align="justify"
              >
                {data.length}
              </TableCell>
              <TableCell
                className={clsx(classes.tableCell, classes.tablePadding)}
                // align="justify"
              >
                {data.crew}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default StarShipsTable;

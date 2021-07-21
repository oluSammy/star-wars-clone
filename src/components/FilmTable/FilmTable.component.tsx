import { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import filmTable from "./FilmTable.styles";
import testImg from "../../assets/images/navImg.png";
// import { useFetch } from "../../hooks/use-fetch";
import DataTable from "../DataTableLoader/DataTableLoader";
import { limitSentence } from "../../utils/utils";
import { motion } from "framer-motion";
import { pageTransition, transit } from "../../utils/animate";
import { SwapiContext } from "../../services/context/swapiContext";
// import DoorDashFavorite from "../../components/ContentLoader/ContentLoader";

function createData(
  title: string,
  director: string,
  producer: string,
  date: string,
  episode: string,
  characters: string
) {
  return { title, director, producer, date, episode, characters };
}

const rows: any = [];

const FilmTable = () => {
  const classes = filmTable();
  const { films, isLoading, error } = useContext(SwapiContext);

  // fetch films
  // const { isLoading, data, error } = useFetch("all-films", "films");

  if (films && !isLoading) {
    films.results.forEach((film: Record<string, any>) => {
      rows.push(
        createData(
          film.title,
          film.director,
          film.producer,
          new Date(film.created)
            .toLocaleString("en-US")
            .split(",")[0]
            .split("/")
            .join("-"),
          film.episode_id,
          film.characters[0]
        )
      );
    });
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transit}
      className={classes.container}
    >
      <h2 className={classes.films}>Films</h2>
      {error && <h5>An Error occurred, please try again</h5>}
      {isLoading ? (
        <DataTable />
      ) : (
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow className={clsx(classes.tableHeader, classes.tableRow)}>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
              >
                Film Title
              </TableCell>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
                align="justify"
              >
                Director
              </TableCell>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
                align="justify"
              >
                Producer
              </TableCell>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
                align="justify"
              >
                Release Date
              </TableCell>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
              >
                Episode ID
              </TableCell>
              <TableCell
                className={clsx(classes.tableHeading, classes.tableCell)}
              >
                Characters
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {rows.map((row: Record<string, any>, idx: number) => (
              <TableRow key={idx} className={classes.tableRow}>
                <TableCell
                  className={clsx(
                    classes.tableCell,
                    classes.tablePadding,
                    classes.tableText
                  )}
                  component="th"
                  scope="row"
                >
                  <div className={classes.dotCell}>{row.title}</div>
                </TableCell>
                <TableCell
                  className={clsx(
                    classes.tableCell,
                    classes.tablePadding,
                    classes.tableText
                  )}
                  align="justify"
                >
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <figure className={classes.tableImgBox}>
                      <img
                        src={testImg}
                        className={classes.tableImg}
                        alt="director"
                      />
                    </figure>
                    <p>{row.director}</p>
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
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <figure className={classes.tableImgBox}>
                      <img
                        src={testImg}
                        className={classes.tableImg}
                        alt="director"
                      />
                    </figure>
                    <p>{limitSentence(row.producer)}</p>
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
                  {row.date}
                </TableCell>
                <TableCell
                  className={clsx(
                    classes.tableCell,
                    classes.tablePadding,
                    classes.tableText
                  )}
                  align="justify"
                >
                  {row.episode}
                </TableCell>
                <TableCell
                  className={clsx(
                    classes.tableCell,
                    classes.tablePadding,
                    classes.linkText
                  )}
                  // align="justify"
                >
                  {row.characters}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {/* <div className={classes.pagination}>
        <div className={classes.arrowBox}>
          <ArrowBackIcon className={clsx(classes.arrow)} />
        </div>
        <p className={classes.page}>Page 1</p>
        <div className={classes.arrowBox}>
          <ArrowForwardIcon className={clsx(classes.active, classes.arrow)} />
        </div>
    </div> */}
    </motion.div>
  );
};

export default FilmTable;

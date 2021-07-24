import React, { useContext, useState, useEffect } from "react";
import subNavStyles from "../../components/SubNavBar/subNav.styles";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import StarShipsTable from "../../components/StarShipsTable/StarShipsTable.component";
import { SwapiContext } from "../../services/context/swapiContext";
import DataTable from "../../components/DataTableLoader/DataTableLoader";
import axios from "axios";

function createData(
  name: string,
  model: string,
  clas: string,
  cost: string,
  passengers: string,
  length: string,
  crew: string
) {
  return { name, model, clas, cost, passengers, length, crew };
}

const StarshipPage = () => {
  const navStyles = subNavStyles();
  const history = useHistory();

  const { starShips, isLoading, error } = useContext(SwapiContext);
  const [rows, setRows] = useState<null | Record<string, any>[]>(null);
  const [total, setTotal] = useState(0);
  const [currentStart, setCurrentStart] = useState(1);
  const [currentEnd, setCurrentEnd] = useState(10);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState<any>(null);

  useEffect(() => {
    if (starShips && !isLoading) {
      setTotal(starShips.count);
      setNextPage(starShips.next);
      setPrevPage(starShips.previous);

      const newRows: any = [];
      starShips.results.forEach((ship: Record<string, any>) => {
        newRows.push(
          createData(
            ship.name,
            ship.model,
            ship.starship_class,
            ship.cost_in_credits,
            ship.passengers,
            ship.length,
            ship.crew
          )
        );
      });
      setRows(newRows);
    }
  }, [isLoading, starShips]);

  const handlePaginate = async (page: string | null) => {
    if (!page) {
      return;
    }

    try {
      setFetchError(null);
      setIsFetching(true);
      const newData = await axios.get(page);
      setIsFetching(false);
      setNextPage(newData.data.next);
      setPrevPage(newData.data.previous);

      if (newData.data.previous) {
        setCurrentStart(+newData.data.previous.split("=")[1] * 10);
        setCurrentEnd(
          +newData.data.previous.split("=")[1] * 10 +
            newData.data.results.length
        );
      } else {
        setCurrentStart(1);
        setCurrentEnd(10);
      }

      const newRows: any = [];
      newData.data.results.forEach((ship: Record<string, any>) => {
        newRows.push(
          createData(
            ship.name,
            ship.model,
            ship.starship_class,
            ship.cost_in_credits,
            ship.passengers,
            ship.length,
            ship.crew
          )
        );
      });
      setRows(newRows);
    } catch (err) {
      setIsFetching(false);
      setFetchError(err);
    }
  };

  return (
    <div>
      <nav className={navStyles.root}>
        <Button
          className={navStyles.navBack}
          startIcon={<ArrowBackIosIcon className={navStyles.navBackIcon} />}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <p className={navStyles.total}>{total ? `${total} total` : ""}</p>
        <p className={navStyles.page}>
          {total ? `Showing ${currentStart}-${currentEnd} of ${total}` : ""}
        </p>
        {starShips && (
          <div className={navStyles.navigation}>
            <IconButton
              disabled={(!prevPage || isFetching) ? true : false}
              onClick={() => {
                handlePaginate(prevPage);
              }}
            >
              <ArrowBackIosIcon className={navStyles.navigationIcon} />
            </IconButton>

            <IconButton
              disabled={(!nextPage || isFetching) ? true : false}
              onClick={() => {
                handlePaginate(nextPage);
              }}
            >
              <ArrowForwardIosRoundedIcon
                className={navStyles.navigationIcon}
              />
            </IconButton>
          </div>
        )}
        <div className={navStyles.searchBox}>
          <input
            type="search"
            name="search"
            className={navStyles.search}
            placeholder="Search for starship"
          />
          <SearchOutlinedIcon className={navStyles.searchIcon} />
        </div>
      </nav>
      {isLoading || isFetching ? (
        <DataTable />
      ) : (
        rows && <StarShipsTable tableData={rows} />
      )}
      {(fetchError || error) && <h2>An Error occurred, please try again</h2>}
    </div>
  );
};

export default StarshipPage;

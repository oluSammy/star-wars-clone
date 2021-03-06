import React, { useState, useEffect, useContext } from "react";
import subNavStyles from "../../components/SubNavBar/subNav.styles";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import IconButton from "@material-ui/core/IconButton";
import { SwapiContext } from "../../services/context/swapiContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DataTable from "../../components/DataTableLoader/DataTableLoader";
import VehicleTable from "../../components/VehicleTable/VehicleTable.components";

function createData(
  name: string,
  model: string,
  clas: string,
  manufacturer: string,
  length: string,
  crew: string,
  passengers: string,
  cargo: string
) {
  return {
    name,
    model,
    clas,
    manufacturer,
    length,
    crew,
    passengers,
    cargo,
  };
}

const VehiclesPage = () => {
  const navStyles = subNavStyles();
  const [total, setTotal] = useState(0);
  const [currentStart, setCurrentStart] = useState(1);
  const [currentEnd, setCurrentEnd] = useState(10);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState<any>(null);
  const [rows, setRows] = useState<null | Record<string, any>[]>(null);

  const { vehicles, isLoading, error } = useContext(SwapiContext);
  const history = useHistory();

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
      newData.data.results.forEach((vehicle: Record<string, any>) => {
        newRows.push(
          createData(
            vehicle.name,
            vehicle.model,
            vehicle.vehicle_class,
            vehicle.manufacturer,
            vehicle.length,
            vehicle.crew,
            vehicle.passengers,
            vehicle.cargo_capacity
          )
        );
      });
      setRows(newRows);
    } catch (err) {
      setIsFetching(false);
      setFetchError(err);
    }
  };

  useEffect(() => {
    if (vehicles && !isLoading) {
      setTotal(vehicles.count);
      setNextPage(vehicles.next);
      setPrevPage(vehicles.previous);

      const newRows: any = [];
      vehicles.results.forEach((vehicle: Record<string, any>) => {
        newRows.push(
          createData(
            vehicle.name,
            vehicle.model,
            vehicle.vehicle_class,
            vehicle.manufacturer,
            vehicle.length,
            vehicle.crew,
            vehicle.passengers,
            vehicle.cargo_capacity
          )
        );
      });
      console.log(vehicles, "MY vehicles");
      setRows(newRows);
    }
  }, [isLoading, vehicles]);

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
        {vehicles && (
          <div className={navStyles.navigation}>
            <IconButton
            disabled={!prevPage || isFetching ? true : false}
            onClick={() => {
              handlePaginate(prevPage);
            }}
            >
              <ArrowBackIosIcon className={navStyles.navigationIcon} />
            </IconButton>

            <IconButton
            disabled={!nextPage || isFetching ? true : false}
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
        rows && <VehicleTable tableData={rows} />
      )}
      {(fetchError || error) && <h2>An Error occurred, please try again</h2>}
    </div>
  );
};

export default VehiclesPage;

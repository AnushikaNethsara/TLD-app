import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/sidebar";
import { Container } from "react-bootstrap";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import constants from "../constants/constants";
import Axios from "axios";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #0ed2f7;
    background-image: linear-gradient(#0ed2f7, #b2fefa);

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tr:hover {
      background-image: linear-gradient(#021b79, #0575e6);
      color: white;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  );
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <input
        value={filterValue[0] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
        placeholder={`Min (${min})`}
        style={{
          width: "70px",
          marginRight: "0.5rem",
        }}
      />
      to
      <input
        value={filterValue[1] || ""}
        type="number"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
        placeholder={`Max (${max})`}
        style={{
          width: "70px",
          marginLeft: "0.5rem",
        }}
      />
    </div>
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

// Our table component
function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    useGlobalFilter // useGlobalFilter!
  );

  // We don't want to render all of the rows for this example, so cap
  // it for this use case
  const firstPageRows = rows.slice(0, 10);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== "number";

export default function AdminApplicationPage() {
  const [applications, getApplications] = useState([]);

  useEffect(() => {
    getAllApplications();
  }, []);

  const getAllApplications = () => {
    Axios.get(constants.backend_url + "/application/getAllDetails")
      .then((res) => {
        const allApplications = res.data;
        getApplications(allApplications);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(applications);

  const columns = React.useMemo(
    () => [
      {
        Header: "Registration Details",
        columns: [
          {
            Header: "UID",
            accessor: "UID",
          },
          {
            Header: "Citizen Ragistration Number",
            accessor: "regNo",
          },
          {
            Header: "Unique Application Id",
            accessor: "applicationId",
          },
        ],
      },
      {
        Header: "Trade Owner Details",
        columns: [
          {
            Header: "Owner First Name",
            accessor: "fName",
          },
          {
            Header: "District",
            accessor: "district",
          },
          {
            Header: "Middle Name",
            accessor: "mName",
          },
          {
            Header: "Last Name",
            accessor: "lName",
          },
          {
            Header: "Pla Code",
            accessor: "pCode",
          },
          {
            Header: "Owner SSSID No. ",
            accessor: "ssId",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone No.",
            accessor: "phone",
          },
          {
            Header: "Fax",
            accessor: "fax",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "Father/Husband First Name",
            accessor: "spouseFName",
          },
          {
            Header: "Father/Husband Middle Name",
            accessor: "spouseLName",
          },
          {
            Header: "Father/Husband Last Name",
            accessor: "spouseMName",
          },
          {
            Header: "Father/Husband",
            accessor: "relationship",
          },
          {
            Header: "Residence Door No",
            accessor: "doorNo",
          },
          {
            Header: "Residence Address ( Line 1 )",
            accessor: "line1",
          },
          {
            Header: "Residence Address ( Line 2 )",
            accessor: "line2",
          },
          {
            Header: "Trade Title",
            accessor: "tradeTitle",
          },
          {
            Header: "Revenue Ward No",
            accessor: "revenueWardNo",
          },
          {
            Header: "Trade Type",
            accessor: "tradeType",
          },
          {
            Header: "Trade Nature",
            accessor: "Trade Nature",
          },
          {
            Header: "Trade Door No",
            accessor: "tradeDoorNo",
          },
          {
            Header: "Trade Address ( Line 1 )",
            accessor: "tLine1",
          },
          {
            Header: "Trade Address ( Line 2 )",
            accessor: "tLine2",
          },
          {
            Header: "Trade License Required Form Data",
            accessor: "licenseDetails",
          },
          {
            Header: "Zone No",
            accessor: "zoneNo",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Election Ward No",
            accessor: "wardNo",
          },
          {
            Header: "Building Permission No",
            accessor: "permissionNo",
          },
          {
            Header: "Assessment No",
            accessor: "assessmentNo",
          },
          {
            Header: "City",
            accessor: "tCity",
          },
          {
            Header: "District",
            accessor: "tDistrict",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <Sidebar />
      <br />
      <Container style={{ marginTop: "20px" }}>
        <h3>Apllications Submitted</h3>
        <br />
        <div style={{ "overflow-x": "auto" }}>
          <Styles>
            <Table columns={columns} data={applications} />
          </Styles>
        </div>
      </Container>
    </>
  );
}

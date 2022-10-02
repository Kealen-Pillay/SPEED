import React, { useState, useEffect } from "react";
import "./SearchArticle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

export const SearchArticle = () => {
  const [titles, setTitles] = useState([]);
  const [journalNames, setJournalNames] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [pages, setPages] = useState([]);
  const [dois, setDois] = useState([]);
  const [practices, setPractices] = useState([]);
  const [claims, setClaims] = useState([]);
  const [researchTypes, setResearchTypes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [publishedDates, setPublishedDates] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const navigateHome = () => {
    navigate("/");
  };
  const navigateSubmit = () => {
    navigate("/post");
  };

  const searchArticle = () => {
    axios
      .get("http://localhost:8082/api/articles/")
      .then((res) => {
        setTitles(res.data.map((article) => article.title));
        setJournalNames(res.data.map((article) => article.journalName));
        setVolumes(res.data.map((article) => article.volume));
        setPages(res.data.map((article) => article.pages));
        setDois(res.data.map((article) => article.doi));
        setPractices(res.data.map((article) => article.practice));
        setClaims(res.data.map((article) => article.claim));
        setResearchTypes(res.data.map((article) => article.researchType));
        setAuthors(res.data.map((article) => article.author));
        setDescriptions(res.data.map((article) => article.description));
        setPublishedDates(res.data.map((article) => article.published_date));
        setPublishers(res.data.map((article) => article.publisher));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const heading = [
    "Title",
    "Journal Name",
    "Volume",
    "Pages",
    "DOI",
    "Practice",
    "Claim",
    "Research Type",
    "Author",
    "Description",
    "Published Date",
    "Publisher",
  ];

  const tableData = [
    titles,
    journalNames,
    volumes,
    pages,
    dois,
    practices,
    claims,
    researchTypes,
    authors,
    descriptions,
    publishedDates,
    publishers,
  ];

  const createData = (
    title,
    journalName,
    volume,
    pages,
    doi,
    practice,
    claim,
    researchType,
    author,
    description,
    published_date,
    publishers
  ) => {
    return (
      title,
      journalName,
      volume,
      pages,
      doi,
      practice,
      claim,
      researchType,
      author,
      description,
      published_date,
      publishers
    );
  };

  const getData = () => {
    axios
      .get("http://localhost:8082/api/articles/")
      .then((res) => {
        // setTitles(res.data.map((article) => article.title));
        // setJournalNames(res.data.map((article) => article.journalName));
        // setVolumes(res.data.map((article) => article.volume));
        // setPages(res.data.map((article) => article.pages));
        // setDois(res.data.map((article) => article.doi));
        // setPractices(res.data.map((article) => article.practice));
        // setClaims(res.data.map((article) => article.claim));
        // setResearchTypes(res.data.map((article) => article.researchType));
        // setAuthors(res.data.map((article) => article.author));
        // setDescriptions(res.data.map((article) => article.description));
        // setPublishedDates(res.data.map((article) => article.published_date));
        // setPublishers(res.data.map((article) => article.publisher));
        res.data.map((article) => {
          const newArticle = {
            title: article.title,
            journalName: article.journalName,
            volume: article.volume,
            pages: article.pages,
            doi: article.doi,
            practice: article.practice,
            claim: article.claim,
            researchType: article.researchType,
            author: article.author,
            description: article.description,
            published_date: article.published_date,
            publishers: article.publishers,
          };
          rows.push(newArticle);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rows = [
    // axios
    //   .get("http://localhost:8082/api/articles/")
    //   .then((res) => {
    //     res.data.map((article) => {
    //       console.log(article);
    //       createData(
    //         article.title,
    //         article.journalName,
    //         article.volume,
    //         article.pages,
    //         article.doi,
    //         article.practice,
    //         article.claim,
    //         article.researchType,
    //         article.author,
    //         article.description,
    //         article.published_date,
    //         article.publishers
    //       );
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   }),
  ];

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return (order = "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy));
  };

  const stableSort = (array, comparator) => {
    const stablizisedThis = array.map((el, index) => [el, index]);
    stablizisedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
  };

  const headCells = [
    { id: "title", numeric: false, disablePadding: true, label: "Title" },
    { id: "journal", numeric: false, disablePadding: true, label: "Journal" },
    { id: "volume", numeric: true, disablePadding: true, label: "Volume" },
    { id: "pages", numeric: false, disablePadding: true, label: "Pages" },
    { id: "doi", numeric: false, disablePadding: true, label: "DOI" },
    { id: "practice", numeric: false, disablePadding: true, label: "Practice" },
    { id: "claim", numeric: false, disablePadding: true, label: "Claim" },
    { id: "research", numeric: false, disablePadding: true, label: "Research" },
    { id: "author", numeric: false, disablePadding: true, label: "Author" },
    {
      id: "description",
      numeric: false,
      disablePadding: true,
      label: "Description",
    },
    {
      id: "published_date",
      numeric: false,
      disablePadding: true,
      label: "Published Date",
    },
    {
      id: "publisher",
      numeric: false,
      disablePadding: true,
      label: "Publisher",
    },
  ];

  const EnhancedTableHead = (props) => {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all articles",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Articles
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const EnhancedTable = () => {
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("title");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {console.log(rows)}
                {rows
                  .slice()
                  .sort(getComparator(order, orderBy))
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    console.log(row);
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.title}
                        </TableCell>
                        <TableCell align="right">{row.journalName}</TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">{row.pages}</TableCell>
                        <TableCell align="right">{row.doi}</TableCell>
                        <TableCell align="right">{row.practice}</TableCell>
                        <TableCell align="right">{row.claim}</TableCell>
                        <TableCell align="right">{row.researchType}</TableCell>
                        <TableCell align="right">{row.author}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">
                          {row.published_date}
                        </TableCell>
                        <TableCell align="right">{row.publisher}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  };

  return (
    // <body>
    //   <button id="homeButton" onClick={navigateHome}>
    //     <h6 className="gradient-text">Home</h6>
    //   </button>
    //   <button id="searchButton" onClick={navigateSubmit}>
    //     <h6 className="gradient-text">Submit Article</h6>
    //   </button>
    //   <div className="container">
    //     <h1>Search Articles</h1>
    //     <table>
    //       <thead>
    //         <tr>
    //           {heading.map((head) => (
    //             <th>{head}</th>
    //           ))}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {tableData.map((data) => (
    //           <td>
    //             {data.map((item) => (
    //               <tr>
    //                 <td>{item}</td>
    //               </tr>
    //             ))}
    //           </td>
    //         ))}
    //       </tbody>
    //     </table>
    //     <button id="searchButton" onClick={searchArticle}>
    //       <h6 className="gradient-text">Search</h6>
    //     </button>
    //   </div>
    // </body>

    <body>
      <button id="homeButton" onClick={navigateHome}>
         <h6 className="gradient-text">Home</h6>
      </button>
      <button id="searchButton" onClick={navigateSubmit}>
        <h6 className="gradient-text">Submit Article</h6>
      </button>
      <EnhancedTable />
    </body>
  );
};

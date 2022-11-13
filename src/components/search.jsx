import React, { useState } from "react";
import "../index.css";
import {
  InputGroup,
  Input,
  Button,
  FormGroup,
  Label,
  Spinner,
} from "reactstrap";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BookCard from "./bookCard";
function Search() {
  // States
  const [maxResults, setMaxResults] = useState(12);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = (e) => {
    if (!query.trim()) {
      toast.error("Input Your Book Title  First");
    } else {
      if (maxResults > 40 || startIndex < 1) {
        toast.warn("Max results must be between 1 and 40");
      } else {
        setLoading(true);
        document.getElementById("body").style.opacity = 0.5;
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
          )
          .then((res) => {
            if (startIndex >= 40 || startIndex < 1) {
              toast.error(
                `Result Must be between 1 and ${res.data.totalItems}`
              );
            } else {
              if (res.data.items.length > 0) {
                setCards(res.data.items);
                setLoading(false);
                // console.log(res.data);
                toast.success("Sucess get Books");
                document.getElementById("body").style.opacity = 1;
              }
            }
          })
          .catch((err) => {
            // console.log(err.response);
            setTimeout(() => {
              document.getElementById("body").style.opacity = 1;
              toast.error(
                `Book ${query} could not be found, Search another book!`
              );
              setLoading(false);
            }, 5000);
          });
      }
    }
  };
  const handleKeyDown = (e) => {
    if (!query.trim() && e.key === "Enter") {
      toast.error("Input Your Book Title  First");
    } else {
      if (e.key === "Enter") {
        if (maxResults > 40 || startIndex < 1) {
          toast.warn("Results must be between 1 and 40");
        } else {
          setLoading(true);
          document.getElementById("body").style.opacity = 0.5;
          axios
            .get(
              `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
            )
            .then((res) => {
              if (startIndex >= 40 || startIndex < 1) {
                toast.error(
                  `max result must be between 1 and ${res.data.totalItems}`
                );
              } else {
                if (res.data.items.length > 0) {
                  setCards(res.data.items);
                  setLoading(false);
                  // console.log(res.data);
                  toast.success("Sucess get Books");
                  document.getElementById("body").style.opacity = 1;
                }
              }
            })

            .catch((err) => {
              // console.log(err.response);
              setTimeout(() => {
                document.getElementById("body").style.opacity = 1;
                toast.error(
                  `Book ${query} could not be found, Search another book!`
                );
                setLoading(false);
              }, 5000);
            });
        }
      }
    }
  };
  // Main Show Case
  const searchSection = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* Overlay */}
        <div className="filter"></div>
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2, fontWeight: "bolder" }}
        >
          Google Books
        </h1>
        <div style={{ width: "50%", zIndex: 2 }}>
          <InputGroup size="lg" className="mb-3">
            <Input
              className="input-search large"
              placeholder="Search Books Here..."
              value={query}
              type="search"
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Input
              className="input-search small"
              placeholder="Search..."
              value={query}
              type="search"
              onKeyDown={handleKeyDown}
              onChange={(e) => setQuery(e.target.value)}
            />
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                color="secondary"
                style={{ width: "185px", fontSize: "19px" }}
                className="DD-Toogle"
              >
                Search Setting
              </DropdownToggle>
              <DropdownMenu dark className="DM-Toogle">
                <DropdownItem header className="DD-Font">
                  How Many Books You Want?
                </DropdownItem>
                <FormGroup>
                  <Label for="maxResults" className="label-result">
                    Max Results :
                  </Label>
                  <Input
                    className="input-index"
                    type="number"
                    id="maxResults"
                    placeholder="Max Results"
                    value={maxResults}
                    onChange={(e) => setMaxResults(e.target.value)}
                  />
                </FormGroup>
                <DropdownItem header className="DD-Font">
                  Start Index of Google Books?
                </DropdownItem>
                <FormGroup>
                  <Label for="startIndex" className="label-result">
                    Start Index:
                  </Label>
                  <Input
                    className="input-index"
                    type="number"
                    id="startIndex"
                    placeholder="Start Index"
                    value={startIndex}
                    onChange={(e) => setStartIndex(e.target.value)}
                  />
                </FormGroup>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button
              color="secondary"
              onClick={handleSubmit}
              className="btn-search"
              type="search"
            >
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
          {/* <div className="d-flex text-white justify-content-center">
            <FormGroup>
              <Label for="maxResults" className="label-result">
                Max Results
              </Label>
              <Input
                className="input-index"
                type="number"
                id="maxResults"
                placeholder="Max Results"
                value={maxResults}
                onChange={(e) => setMaxResults(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="ms-5">
              <Label for="startIndex" className="label-result">
                Start Index
              </Label>
              <Input
                className="input-index"
                type="number"
                id="startIndex"
                placeholder="Start Index"
                value={startIndex}
                onChange={(e) => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div> */}
        </div>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = "";
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              categories={item.volumeInfo.categories}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
              averageRating={item.volumeInfo.averageRating}
            />
          </div>
        );
      });
      return (
        <div className="container my-5 main-content">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return (
    <div className="w120 h120">
      {searchSection()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default Search;

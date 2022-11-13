import React, { useState } from "react";
import "../index.css";
import BasicFn from "./rating";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";
const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink,
  averageRating,
  infoLink,
  categories,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card
      style={{ width: "275px" }}
      className="m-auto shadow p-2 bg-white rounded "
    >
      <CardImg
        top
        style={{ width: "100%", height: "253px" }}
        src={thumbnail}
        alt={title}
      />
      <CardBody>
        <span>
          {!categories ? (
            <span className="tag tag-red">None</span>
          ) : (
            <span className="tag tag-brown">{categories}</span>
          )}
        </span>

        <CardTitle className="card-title">{title}</CardTitle>
        <Button className="btn-more col-5" onClick={toggle}>
          More info
        </Button>
        <Button
          href={previewLink}
          className="btn-more col-6"
          type="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview Link
        </Button>
        <div className="card__footer">
          <div className="user">
            <div className="user__info">
              <h5>
                {!authors ? (
                  <span className="authorName noneAuthor">Unknown Author</span>
                ) : (
                  <span className="authorName">
                    <span>{authors[0]}</span>
                    {/* {authors > 1 ? (
                      <span>{authors[0]}</span>
                    ) : (
                      <span>{authors[0] + " dkk"}</span>
                    )} */}
                  </span>
                )}
              </h5>
              <small>
                {/* Rating:{" "}
                {!averageRating ? (
                  <span className="noneRating">None </span>
                ) : (
                  <span className="rating">
                    <BasicFn averageRating={averageRating} />
                  </span>
                )} */}
                Rating:
                <span className="rating">
                  <BasicFn averageRating={averageRating} />
                </span>
              </small>
            </div>
          </div>
        </div>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="exampleModalLabel">
            {title}
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img src={thumbnail} alt={title} style={{ height: "233px" }} />
            <div>
              <p>
                Page Count:{" "}
                {!pageCount ? (
                  <span className="noneCategory">Unknown</span>
                ) : (
                  <span>{pageCount}</span>
                )}
              </p>
              <p>Language : {language}</p>
              <p>
                Authors :{" "}
                {!authors ? (
                  <span className="authorName noneAuthor">Unknown Author</span>
                ) : (
                  <span className="authorName">
                    <span>{authors[0]}</span>
                    {/* {authors > 1 ? (
                      <span>{authors[0]}</span>
                    ) : (
                      <span>{authors[0] + " dkk"}</span>
                    )} */}
                  </span>
                )}
              </p>
              <p>Publisher : {publisher}</p>
              <p>
                Category:{" "}
                {!categories ? (
                  <span className="noneCategory">None</span>
                ) : (
                  <span>{categories}</span>
                )}
              </p>
              <div className="rating">
                {/* Rating:{" "}
                {!averageRating ? (
                  <span className="noneRating">None</span>
                ) : (
                  <span>{averageRating}</span>
                )} */}
                Rating:
                <span className="rating">
                  <BasicFn averageRating={averageRating} />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3" style={{ textAlign: "justify" }}>
            {description}
          </div>
        </div>
        <div className="modal-footer">
          <div className="left-silde">
            <a
              href={previewLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview Link
            </a>
          </div>
          <div className="divider"></div>
          <div className="right-silde">
            <a
              href={infoLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;

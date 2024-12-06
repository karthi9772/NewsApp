import newsImg from "./NewsImg.png";

const NewsItem = ({ title, src, description, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "360px", maxHeight: "fit-content" }}
    >
      <img
        src={src ? src : newsImg}
        style={{ height: "200px", width: "340px" }}
        className="card-img-top "
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title fs-5 fw-normal">{title.slice(0, 50)}</h5>
        <p className="card-text fs-6 fw-light">
          {description
            ? description.slice(0, 90)
            : "To know more about this news Click Read Button"}
        </p>
        <a href={url} className="btn btn-primary">
          Read
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

function Card({cardInfo}) {
const{thumbnail,price, brand, description, category}=cardInfo;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          <p>Price: {price}$</p>
          <p>Device: {category}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
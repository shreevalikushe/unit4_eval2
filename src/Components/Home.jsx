import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.state.cart);
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "1rem",
              margin: "1rem"
            }}
          >
            <h3>Name: {item.name}</h3>
            <h4>Country of origin: {item.country_of_origin}</h4>
            <img
              style={{ width: "100px" }}
              src={item.image}
              alt={item.id}
            ></img>
            <p>{item.description} </p>
            <h5>Price: {item.price}</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "40px",
                margin: "1rem"
              }}
            >
              <button>-</button>
              <p>Quantity</p>
              <button>+</button>
            </div>

            <button>ADD</button>
          </div>
        );
      })}
    </>
  );
}
export default Home;

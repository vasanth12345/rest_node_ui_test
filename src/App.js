import { useState, useEffect } from "react";

function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://easy-gray-donkey-ring.cyclic.app/api/data/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>ha ha ha test rest</h1>
      <div className="status">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {typeof Data !== undefined && Data !== "" ? (
            Data.map((e) => (
              <div
                key={e.name}
                style={{
                  border: "2px solid #f00",
                  width: "30%",
                  textAlign: "center",
                }}
              >
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <p>{e.desig}</p>
              </div>
            ))
          ) : (
            <h1>noo data</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

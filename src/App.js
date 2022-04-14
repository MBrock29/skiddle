import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.skiddle.com/api/v1/events/search/?api_key=008f1e6099ecc48e990e3776784d447b"
    )
      .then((resp) => resp.json())
      .then(function (data) {
        setEventData(data.results);
        setFilteredData(data.results);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const filterData = (searchTerm) => {
    const results = eventData.filter((event) =>
      event.eventname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  };

  return (
    <div className="App">
      <Header search={filterData} />
      <Card eventData={filteredData} />
    </div>
  );
}

export default App;

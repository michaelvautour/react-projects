import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // const [removeItem, setRemoteItem] = useState();

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour: { id: string }) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button type="button" className="btn" onClick={() => getTours()}>
          refresh
        </button>
      </div>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

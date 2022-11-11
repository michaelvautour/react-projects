import React, { useState } from "react";
import { data } from "./data";
import List from "./List";
import { Person } from "./types";

function App() {
  const [people, setPeople] = useState(data);

  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday's today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear List</button>
      </section>
    </main>
  );
}

export default App;

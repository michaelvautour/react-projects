import React, { useState } from "react";
import { data } from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday's today</h3>
        <List people={people} setPeople={setPeople} />
        <button onClick={() => setPeople([])}>Clear List</button>
      </section>
    </main>
  );
}

export default App;

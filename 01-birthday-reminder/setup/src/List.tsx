import React from "react";
import { Person } from "./types";


const List = ({ people, setPeople }: any) => {
  const removePerson = (id: number) => {
    const removeName = people.filter((e: any) => e.id !== id);
    setPeople(removeName);
  };

const List =({ people }: any) => {

  return (
    <>
      {people.map((person: Person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button type="button" onClick={() => removePerson(id)}>
              remove
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;

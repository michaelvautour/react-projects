import React from "react";

const Dashboard = ({ user }: any) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;

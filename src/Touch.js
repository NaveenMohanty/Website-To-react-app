import React from "react";
import Card from "./Card";

const Touch = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card title="Hello world" />
          </div>
          <div className="col-4">
            <Card title="Hello World" button="Hello Button" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Touch;

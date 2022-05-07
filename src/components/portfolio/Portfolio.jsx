import React, { useState } from "react";
import data from "./data";
const Portfolio = () => {
  const [value, setValue] = useState(data);
  const filterItem = (cateItem) => {
    const updatedItem = data.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setValue(updatedItem);
  };
  return (
    <>
      <section className="Portfolio mtop">
        <div className="container">
          <div className="head flexSB">
            <div className="left">
              <span className="baget">Portfolio</span>
              <h1 className="title">Creative Portfolio</h1>
            </div>
            <div className="links">
              <ul className="flexSB">
                <li className="active" onClick={() => setValue(data)}>
                  All
                </li>
                <li onClick={() => filterItem("Design")}>Design</li>
                <li onClick={() => filterItem("Branding")}>Branding</li>
                <li onClick={() => filterItem("Photography")}>Photography</li>
              </ul>
            </div>
          </div>
          <div className="content grid mtop">
            {value.map((item) => {
              const { cover, title, category } = item;
              return (
                <div className="box" key={item.id}>
                  <div className="img">
                    <img src={cover} alt="" />
                  </div>
                  <div className="overlay">
                    <h1>{title}</h1>
                    <p>{category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  return (
    <div className="container mt-5">
        <h2 style={{fontWeight:"700"}}>Calculator</h2>
      <div className="row justify-content-center">
        <div className="col-sm-4 bg-dark p-3">
          <div className="calculator">
            <input type="text" className="form-control mb-3" />
            <div className="row">
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">1</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">2</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">3</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning btn-block w-50">+</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">4</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">5</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">6</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning btn-block w-50">-</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">7</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">8</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary btn-block w-50">9</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning btn-block w-50">*</button>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <button className="btn btn-primary w-50">.</button>
              </div>
              <div className="col-3">
                <button className="btn btn-primary w-50">0</button>
              </div>
              <div className="col-3">
                <button className="btn btn-success btn-block w-50">=</button>
              </div>
              <div className="col-3">
                <button className="btn btn-warning btn-block w-50">/</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button className="btn btn-danger btn-block w-100 ">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

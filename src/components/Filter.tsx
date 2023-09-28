import React from "react";

function Filter() {
  return (
    <>
      <div className="bg-white col-12 search d-flex align-items-center justify-content-around mt-7">
        <p className="m-0">
          <i className="fa-solid fa-magnifying-glass me-2"></i>
          Serach by name, edu, exp or #tag
        </p>
        <p className="m-0">
          <i className="fa-solid fa-circle-exclamation"></i>
        </p>
      </div>
      <div className="filter bg-white col-12 mt-4">
        <div className="section d-flex align-items-center mx-4 ">
          <p className="m-0 fw-bold flex-grow-1">Filters</p>
          <p className="m-0">0 Selected</p>
        </div>

        <hr className="border-color m-0 opacity-1" />

        <div className="section d-flex align-items-center mx-4">
          <p className="m-0 flex-grow-1">
            <i className="fa-regular fa-file-lines me-2"></i>
            Personal Information
          </p>
          <p className="m-0">
            <i className="fa-solid fa-chevron-down col-light-blue"></i>
          </p>
        </div>
        <hr className="border-color m-0 opacity-1" />

        <div className="section d-flex align-items-center mx-4">
          <p className="m-0 flex-grow-1">
            <i className="fa-regular fa-file-lines me-2"></i>
            Education
          </p>
          <p className="m-0">
            <i className="fa-solid fa-chevron-down col-light-blue"></i>
          </p>
        </div>
        <hr className="border-color m-0 opacity-1" />

        <div className="section d-flex align-items-center mx-4">
          <p className="m-0 flex-grow-1">
            <i className="fa-regular fa-file-lines me-2"></i>
            Work Experience
          </p>
          <p className="m-0">
            <i className="fa-solid fa-chevron-down col-light-blue"></i>
          </p>
        </div>
        <hr className="border-color m-0 opacity-1" />

        <div className="section d-flex align-items-center mx-4">
          <p className="m-0 flex-grow-1">
            <i className="fa-regular fa-file-lines me-2"></i>
            Activity Filter
          </p>
          <p className="m-0">
            <i className="fa-solid fa-chevron-down col-light-blue"></i>
          </p>
        </div>
        <hr className="border-color m-0 opacity-1" />

        <div className="section d-flex align-items-center mx-4">
          <p className="m-0 flex-grow-1">
            <i className="fa-regular fa-file-lines me-2"></i>
            Advanced Filter
          </p>
        </div>
      </div>
    </>
  );
}

export default Filter;

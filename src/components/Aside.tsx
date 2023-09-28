import React from "react";

function Aside() {
  return (
    <aside className="aside bg-white d-flex flex-column text-center vh-100 justify-content-between position-fixed">
      <div className="d-flex flex-column gap-4 mx-auto mt-4">
        <div className="bg-dark-grey logo"></div>
        <i className="fa-solid fa-house active"></i>
        <i className="fa-solid fa-users"></i>
        <i className="fa-regular fa-calendar-check "></i>
        <i className="fa-solid fa-share-nodes"></i>
        <i className="fa-regular fa-file-lines"></i>
        <i className="fa-solid fa-book"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="d-flex flex-column gap-4 mx-auto mb-4">
        <i className="fa-solid fa-gear"></i>
        <div className="sign blue-div ">AS</div>
      </div>
    </aside>
  );
}

export default Aside;

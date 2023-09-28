import React from "react";

function Header() {
  interface Opportunity {
    id: number;
    status: string;
    count: number;
  }
  let opportunities: Opportunity[] = [
    { id: 1, status: "Applied", count: 1745 },
    { id: 2, status: "Shortlisted", count: 453 },
    { id: 3, status: "Technical Interview", count: 123 },
    { id: 4, status: "Opportunity Browsing", count: 243 },
    { id: 5, status: "Video Interview |", count: 25 },
    { id: 6, status: "Video Interview ||", count: 25 },
    { id: 7, status: "Video Interview |||", count: 25 },
    { id: 8, status: "Offer", count: 25 },
    { id: 9, status: "Withdrawn", count: 25 },
  ];
  return (
    <div className="mt-4 header row mx-3">
      <div className="col-12 col-md-4">
        <p className="col-blue h4 fw-bold">London Internship Program</p>
        <p>London</p>
      </div>

      <div className="col-12 col-md-8 d-flex flex-wrap">
        <div className="dropdown col-12 col-md-4 mb-2 mb-md-0">
          <a
            className="btn bg-white col-blue dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Opportunity Browsing
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {opportunities.map((item, index) => {
              return (
                <li key={item.id}>
                  <a
                    className="dropdown-item d-flex justify-content-between py-2"
                    href="#"
                  >
                    <span>{item.status}</span>{" "}
                    <span className="gray-bg-col count text-center d-block">
                      {item.count}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="d-flex col-12 col-md-8 flex-wrap justify-content-start justify-content-md-end gap-2">
          <div className="program-icon bg-white">
            <i className="fa-solid fa-tag fs-5"></i>
          </div>
          <div className="program-icon bg-white red-col">
            <i className="fa-solid fa-user-xmark fs-5"></i>
          </div>
          <div className="program-icon bg-white">
            <i className="fa-solid fa-user-check fs-5"></i>
          </div>
          <div className="program-icon bg-white">
            <i className="fa-solid fa-user-pen fs-5"></i>
          </div>
          <div className="program-icon bg-white">
            <i className="fa-regular fa-envelope fs-5"></i>
          </div>
          <div>
            <button className="btn text-white bg-blue">
              Move To Video Interview I{" "}
              <span className="ms-2 border border-1 py-1"></span>{" "}
              <i className="fa-solid fa-chevron-down ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";

function Tasks() {
    interface Student {
        id: number;
        name: string;
        address: string;
        unversity:string;
      }
      let students: Student[] = [
        { id: 1, name: "Aaliyah Sanderson", address:"Riyadh, saudi Arabia",unversity:"Cambridge" },
        { id: 2, name: "John Doe", address:"Bostom, USA",unversity:"MIT"},
        { id: 3, name: "Thomas Matt",address:"Edinburgh, UK",unversity:"Harvard"},
        { id: 4, name: "Kamilia Smith", address:"London, UK",unversity:"Boston" },
        { id: 5, name: "Roy Jade", address:"Cambridge, UK",unversity:"Yale" },
      ];
  return (
    <div className="bg-white tasks">
      <div className="task-header d-flex align-items-center mx-3 border-bot justify-content-between">
        <div className="d-flex">
          <input className="form-check-input me-4" type="checkbox" value="" />
          <p className="col-light-blue m-0 fw-bold">247 Candidates</p>
        </div>
        <div className="d-flex col-8">
          <p className="m-0 col-light-blue fw-600">Qualified</p>
          <div className="line mx-3"></div>
          <p className="m-0">
            Task{" "}
            <span className="circle-number rounded-circle d-inline-block task-num text-center ms-2">
              25
            </span>
          </p>
          <div className="line mx-3"></div>
          <p className="m-0">
            Disqualified{" "}
            <span className="circle-number rounded-circle d-inline-block task-num text-center ms-2">
              78
            </span>
          </p>
        </div>
      </div>
      {students.map((item,index)=>{
        return(

      <div className="d-flex align-items-center mx-3 border-bot mt-3 task-body" key={item.id}>
        <input className="form-check-input me-4" type="checkbox" value="" />
        <div className="blue-div rounded-circle avatar d-flex justify-content-center align-items-center fs-3 me-3">
          AS
        </div>
        <div className="d-flex flex-column">
          <p className="h2">{item.name}</p>
          <p className="h4"> {item.address}</p>
          <p>Bachelor - {item.unversity} University (2023 - 2023)</p>
          <p className="col-blue">
            <span className="me-2">#top_candidate</span> #top_candidate
          </p>
          <div className="d-flex">
            <p className="city px-2 py-1 rounded-pill me-2 fw-600">New York</p>
            <p className="city px-2 py-1 rounded-pill me-2 fw-600">Marketing</p>
            <p className="city px-2 py-1 rounded-pill fw-600">London</p>
          </div>
        </div>
      </div>
        )
      })}

      <div className="d-flex align-items-center mx-3 mt-3 task-body">
        <input className="form-check-input me-4" type="checkbox" value="" />
        <div className="blue-div rounded-circle avatar d-flex justify-content-center align-items-center fs-3 me-3">
          AS
        </div>

        <div className="d-flex flex-column">
          <div className="d-flex  flex-wrap justify-content-between align-items-center">
            <p className="h2 me-3">Ahmed Salman</p>
            <div className="d-flex">
              <p className="px-2 py-1 rounded-pill media m-0 me-3 ">
                <i className="fa-solid fa-circle-play"></i>4{" "}
              </p>
              <p className="px-2 py-1 rounded-pill programs m-0">
                <i className="fa-solid fa-book"></i> 5 Programs
              </p>
            </div>
          </div>

          <p className="h4"> New York, USA</p>
          <p>Bachelor - Cambridge University (2023 - 2023)</p>
          <p className="col-blue">
            <span className="me-2">#top_candidate</span> #top_candidate
          </p>
          <div className="d-flex">
            <p className="city px-2 py-1 rounded-pill me-2 fw-600">New York</p>
            <p className="city px-2 py-1 rounded-pill me-2 fw-600">Marketing</p>
            <p className="city px-2 py-1 rounded-pill fw-600">London</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

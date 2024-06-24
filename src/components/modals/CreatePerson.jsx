import React from "react";

const CreatePerson = ({ name, setName, age, setAge, handleCreate }) => {
  return (
    <div className="modal fade" id="modalCreatePerson" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <label className="h5">Crear Persona</label>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa-solid fa-hourglass"></i>
              </span>
              <input
                type="text"
                id="age"
                className="form-control"
                placeholder="Edad"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" onClick={handleCreate}>
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePerson;

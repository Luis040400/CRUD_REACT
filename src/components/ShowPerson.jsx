import React, { useEffect, useState } from "react";
import { show_alerta, show_alert_confirmacion } from "../plugins/sweetAlert";
import {
  getAllPeople,
  createPerson,
  updatePerson,
  deletePerson,
} from "../services/main/person";
import CreatePerson from "./modals/CreatePerson";
import UpdatePersonModal from "./modals/UpdatePerson";

const ShowProducts = () => {
  const [people, setPeople] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    getAllPeople()
      .then((data) => {
        setPeople(data);
      })
      .catch((err) => {
        show_alerta(err.message, "error");
      });
  };

  const handleCreate = async () => {
    createPerson({ name, age })
      .then(() => {
        show_alerta("Persona creada correctamente", "success");
        getData();
      })
      .catch((err) => {
        show_alerta(err.message, "error");
      });

    // Resetear el formulario y cerrar el modal
    setName("");
    setAge("");
    setTitle("");
    document.querySelector("#modalCreatePerson .btn-close").click();
  };

  const handleUpdate = async () => {
    updatePerson(id, { id, name, age })
      .then(() => {
        show_alerta("Persona actualizada correctamente", "success");
        getData();
      })
      .catch((err) => {
        show_alerta(err.message, "error");
      });

    // Resetear el formulario y cerrar el modal
    setId("");
    setName("");
    setAge("");
    setTitle("");
    document.querySelector("#modalUpdatePerson .btn-close").click();
  };

  const handleEdit = (person) => {
    setId(person.id);
    setName(person.name);
    setAge(person.age);
  };

  const handleDelete = async (id) => {
    show_alert_confirmacion(
      "¿Estás seguro de que deseas eliminar esta persona?",
      "La persona ha sido eliminada.",
      "Esta acción no se puede deshacer.",
      "",
      "warning",
      "success",
      async () => {
        deletePerson(id)
          .then(() => {
            getData();
          })
          .catch((err) => {
            show_alerta(err.message, "error");
          });
      }
    );
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalCreatePerson"
                onClick={() => {
                  setTitle("Añadir Persona");
                  setId("");
                  setName("");
                  setAge("");
                }}
              >
                <i className="fa-solid fa-circle-plus"></i> Añadir
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Persona</th>
                  <th>Edad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {people.map((person, i) => (
                  <tr key={person.id}>
                    <td>{i + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modalUpdatePerson"
                        onClick={() => handleEdit(person)}
                      >
                        <i className="fa-solid fa-edit"></i>
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(person.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CreatePerson
        title={title}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        handleCreate={handleCreate}
      />
      <UpdatePersonModal
        title={title}
        id={id}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default ShowProducts;

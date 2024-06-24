import { MainApi } from "../axiosInstances";

const RESOURCE = "Person";

export const getAllPeople = () => {
  return MainApi.get(`/${RESOURCE}`);
};

export const getPerson = (id) => {
  return MainApi.get(`/${RESOURCE}/${id}`);
};

export const createPerson = (payload) => {
  return MainApi.post(`/${RESOURCE}`, payload);
};

export const updatePerson = (id, payload) => {
  return MainApi.put(`/${RESOURCE}/${id}`, payload);
};

export const deletePerson = (id) => {
  return MainApi.delete(`/${RESOURCE}/${id}`);
};

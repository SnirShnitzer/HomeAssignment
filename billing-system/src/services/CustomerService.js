import http from "../http-common";

const base_customers_url = '/api/customers'

const getAll = () => {
  return http.get(base_customers_url);
};

const get = id => {
  return http.get(`${base_customers_url}/${id}`);
};

const create = data => {
  return http.post(base_customers_url, data);
};

const update = (id, data) => {
  return http.put(`${base_customers_url}/${id}`, data);
};

const remove = id => {
  return http.delete(`${base_customers_url}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
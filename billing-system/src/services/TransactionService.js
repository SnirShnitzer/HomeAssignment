import http from "../http-common";

const base_transactions_url = '/api/transactions'

const getAll = () => {
  return http.get(base_transactions_url);
};

const get = id => {
  return http.get(`${base_transactions_url}/${id}`);
};

const create = data => {
  return http.post(base_transactions_url, data);
};

const update = (id, data) => {
  return http.put(`${base_transactions_url}/${id}`, data);
};

const remove = id => {
  return http.delete(`${base_transactions_url}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};
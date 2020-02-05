const axios = require("axios");

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:8000/wp-json";

const getAllData = async () => {
  const resp = await axios.get(`${BASE_URL}`);
  console.log(resp.data);
};

// getAllData();

const getAvailableNavItems = async () => {
  const resp = await axios.get(`${BASE_URL}/northern-trust/v1/navs-available`);
  console.log(resp.data);
};

// getAvailableNavItems();

const gItems = async () => {
  const resp = await axios.get(`${BASE_URL}/northern-trust/v1/footer-menu`);
  console.log(resp.data);
};

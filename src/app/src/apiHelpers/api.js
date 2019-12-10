const axios = require("axios");

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:8000/wp-json/northern-trust/v1";

export const getMenuItems = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/nav/menu-1`);
    if (resp.data.success === true) {
      console.log(resp.data);

      return resp.data;
    } else console.log("GET request failed");
  } catch (e) {
    console.error(e);
  }
};

export const getPortraitGridData = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/portrait-grid/test-grid/`);
    if (resp.data.success === true) {
      return resp.data;
    } else console.log("GET request failed");
  } catch (e) {
    console.error(e);
  }
};

export const getIconGridData = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/icon-grid/test-grid/`);
    if (resp.data.success === true) {
      return resp.data;
    } else console.log("GET request failed");
  } catch (e) {
    console.error(e);
  }
};

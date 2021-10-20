/* Change the path of the local machine*/
const BASE_API = "http://192.168.1.105:3000/";

/* Encapsulate the API request of fetch */
const request = {
  async post({ url, data }) {
    console.log(JSON.stringify(data));

    const res = await fetch(BASE_API + url, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //console.log(res);
    return res.json();
  },
  async get(url) {
    const res = await fetch(BASE_API + url);
    return res.json();
  },
  async delete(url, id) {
    console.log(JSON.stringify(id));
    const res = await fetch(BASE_API + url, {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });
    // console.log(res);
    return res.json();
  },
};

export default request;

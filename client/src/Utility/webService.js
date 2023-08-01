import axios from "axios";

const remoteMethod = async ({ type = "GET", data = [] || {}, url, files, token }) => {
  const methodMap = {
    GET: "get",
    POST: "post",
    PATCH: "patch",
  };
  const method = methodMap[type.toUpperCase()];
  return await axios({
    method,
    url,
    data,
    headers: setHeader(files, token)
  })
};
function setHeader(files, token) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': `application/${files ? "octet-stream" : "json"}`
  }
}
export default remoteMethod;

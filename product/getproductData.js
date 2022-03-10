const productmodal = require("./config");
const getproduct = async (props) => {
  //console.log(props);
  let data = await productmodal.find(props);
  //console.log(data);
  return data;
};
module.exports = getproduct;

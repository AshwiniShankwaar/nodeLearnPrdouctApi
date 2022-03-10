const registrationmodel = require("./config");
const deleteAccount = async (props) => {
    //console.log(props);
  let data = await registrationmodel.deleteOne({
    props
  });
  if(data.deletedCount!=0){
    let message = { key: "Account deleted" };
    return JSON.stringify(message);
  }
};
module.exports = deleteAccount;

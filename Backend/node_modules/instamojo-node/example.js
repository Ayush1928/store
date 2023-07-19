var r=require('./lib.js');
var instamojo=new r('494fa9c31404f789b9ba86de7fb94480','eefb9b6c0114e18126349b73ecab8310');
instamojo.listRefunds(function (err,data,res) {
  console.log(data);
});

var urllib = require('urllib');


var request=function(link,api_key,auth_token,callback) {
urllib.request(link,{
  method:'GET',
  headers:{
    'X-API-KEY':api_key,
    'X-AUTH-TOKEN':auth_token
  }
},function (err,data,res) {
  callback(err,JSON.parse(data),res);
})
}


var deleteRequest=function (link,api_key,auth_token,callback) {
  urllib.request(link,{
    method:'DELETE',
    headers:{
      'X-API-KEY':api_key,
      'X-AUTH-TOKEN':auth_token
    }
  },function (err,data,res) {
    //console.log(res);
    callback(err,data,res);
  })
}
var createRequest=function (link,api_key,auth_token,body,callback) {
  urllib.request(link,{
    method:'POST',
    headers:{
      'X-API-KEY':api_key,
      'X-AUTH-TOKEN':auth_token
    },
    data:body
  },function (err,data,res) {
    callback(err,JSON.parse(data),res);
  })
}

module.exports=function (api_key,auth_token) {
  var urls={
    links:'https://www.instamojo.com/api/1.1/links/',
    debug:'https://www.instamojo.com/api/1.1/debug/',
    payment_list:'https://www.instamojo.com/api/1.1/payments/',
    refund:'https://www.instamojo.com/api/1.1/refunds/'
  }
  return{
     listLinks:function (callback) {
        request(urls.links,api_key,auth_token,callback)
     },
     listPayments:function (callback) {
       request(urls.payment_list,api_key,auth_token,callback)
     },
     getPayment:function (id,callback) {
              request(urls.payment_list+id+'/',api_key,auth_token,callback)
     },
     getLink:function (slug,callback) {
            request(urls.links+slug+'/',api_key,auth_token,callback)
     },
     createLink:function (body,callback) {
            createRequest(urls.links,api_key,auth_token,body,callback)
     },
     archiveLink:function (slug,callback) {
            deleteRequest(urls.links+slug+'/',api_key,auth_token,callback)
     },
     createRefund:function (body,callback) {
       createRequest(urls.refund,body,api_key,auth_token,body,callback)
     },
     listRefunds:function (callback) {
       request(urls.refund,api_key,auth_token,callback)
     },
     getRefund:function (id,callback) {
       request(urls.refund+id+'/',api_key,auth_token,callback)
     }
  }
}

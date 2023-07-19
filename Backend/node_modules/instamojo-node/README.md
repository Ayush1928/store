# Instamojo-node

Instamojo-node is a nodejs library for instamojo
# installation
```sh
$ npm install instamojo-node
```
## usage
      var instamojo=require('instamojo-node');
      var api=new instamojo('api-key','auth-token');
      api.listLinks(function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
      
      
## API Doc
### List Payments
    api.listPayments(function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### get Payment
     api.getPayment('payment-id',function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### List Links
     api.listLinks(function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### get Link
     api.getLink('slug',function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### create Link
      api.createLink({title:'hello',description:'schoolboy's api',currency:'INR', base_price:0},function(err,data,res){
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
#### required
     -title
     -description
     -currency
     -base_price
### archive Link
     api.archiveLink('slug',function(err,data,res)
      {
        if(err) throw err;//handle the error
        //archive link doesn't have response json
        console.log(res);// if staus code 204 link is archived
      })
### create Refund
     api.createRefund({payment_id:'payment-id',type:'RFD',body:'desc for refund'},function(err,data,res)
      {
        if(err) throw err;//handle the error
        //archive link doesn't have response json
        console.log(res);// if staus code 204 link is archived
      })
#### requierd
 payment_id: Payment ID of the payment against which you're initiating the refund.
 type: A three letter short-code identifying the reason for this case.
 Valid values for type:

    RFD: Duplicate/delayed payment.
    TNR: Product/service no longer available.
    QFL: Customer not satisfied.
    QNR: Product lost/damaged.
    EWN: Digital download issue.
    TAN: Event was canceled/changed.
    PTH: Problem not described above.

 body: Additonal text explaining the refund
### List Refunds
    api.listRefunds(function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### get Refund
    api.getRefund('refund-id',function(err,data,res)
      {
        if(err) throw err;//handle the error
        console.log(data);//result json
        console.log(res);//res headers
      })
### ISC License
Copyright (c) 2016, schoolboy(balaji)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.


function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

const express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = express();

app.get('/', (req, res) => {
	//
  res.render('home', {title: "Bhav's Portfolio"});
});






const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
//this get function will be called when the guest method will be called

app.use(express.static('public'));
app.use(express.urlencoded());
app.set('view engine', 'pug');
// app.set("views", path.join(__dirname, "views"));

app.get('/contact', (req, res) => {
	//
	console.log(__dirname)
  res.render('contact', {title: "Contact Me"});
});
app.post('/submit-form', (req, res) => {
  console.log("i am here in the submit form post method!");
  const message = req.body.message;
  //...
  res.end()
})



var json_obj = JSON.parse(Get("https://api.github.com/users/bhavsingh2017"));
console.log(json_obj);
console.log(__dirname)
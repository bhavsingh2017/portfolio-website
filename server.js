

const express = require('express');
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
app.set('view engine', 'pug');
//document.getElementByID("myButton").onclick = ()=>{
//    console.log("hey")
//    };

console.log(__dirname)
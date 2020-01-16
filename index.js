var express = require('express');
var bodyParser = require("body-parser");

var total = 0;

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index');
  setInterval(function() {
      var d = new Date();
      var m = d.getMinutes();
      var h = d.getHours();
     }, 15);
});

app.post('/addtask', function (req, res) {
   var am_f = req.body.am_from;
   var am_t = req.body.am_to;
   var am_from = am_f.split(':')
   var am_to = am_t.split(':')
   var am_d = [Number(am_to[0])*60+Number(am_to[1])] - [Number(am_from[0])*60+Number(am_from[1])];
   var mc = req.body.MC
   var yg_f = req.body.yg_from;
   var yg_t = req.body.yg_to;
   var yg_from = yg_f.split(':')
   var yg_to = yg_t.split(':')
   var yg_d = [Number(yg_to[0])*60+Number(yg_to[1])] - [Number(yg_from[0])*60+Number(yg_from[1])];
   var kyg_f = req.body.kyg_from;
   var kyg_t = req.body.kyg_to;
   var kyg_from = kyg_f.split(':')
   var kyg_to = kyg_t.split(':')
   var kyg_d = [Number(kyg_to[0])*60+Number(kyg_to[1])] - [Number(kyg_from[0])*60+Number(kyg_from[1])];
   var app = req.body.Applicability
   var app_f = req.body.app_from;
   var app_t = req.body.app_to;
   var app_from = app_f.split(':')
   var app_to = app_t.split(':')
   var app_d = [Number(app_to[0])*60+Number(app_to[1])] - [Number(app_from[0])*60+Number(app_from[1])];
   var help = req.body.Help
   var forms = req.body.forms5
   var ska = req.body.ska
   var gd_f = req.body.gd_f
   var nem_f = req.body.nem_from;
   var nem_t = req.body.nem_to;
   var nem_from = nem_f.split(':')
   var nem_to = nem_t.split(':')
   var nem_d = [Number(nem_to[0])*60+Number(nem_to[1])] - [Number(nem_from[0])*60+Number(nem_from[1])];
   var letter = req.body.letter
   total = am_d||0 + yg_d||0 + kyg_d||0 + app_d||0 + nem_d||0
   console.log(gd_f)
   //console.log(req.body)
   res.render('total',{am_d:am_d,mc:mc,yg_d:yg_d,kyg_d:kyg_d,app:app,app_d:app_d,help:help,forms:forms,ska:ska,gd_f:gd_f,nem_d:nem_d,letter:letter,time:total});
});

app.get('/addtask', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});





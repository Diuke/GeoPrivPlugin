"use strict";angular.module("iEmotionsApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"soundsController",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("iEmotionsApp").controller("soundsController",["$scope","soundsFactory",function(a,b){a.emotions=b.getEmotions(),a.emotions.forEach(function(a){a.componente.click(function(){a.sound.play()})})}]),angular.module("iEmotionsApp").factory("soundsFactory",function(){var a,b,c,d,e,f,g={},h="sounds";soundManager.setup({url:"bower_components/SoundManager2/swf/",onready:function(){a=soundManager.createSound({id:"sound1",url:h+"/ignorar.mp3"}),b=soundManager.createSound({id:"sound2",url:h+"/si.mp3"}),c=soundManager.createSound({id:"sound3",url:h+"/no.mp3"}),d=soundManager.createSound({id:"sound4",url:h+"/nope.mp3"}),e=soundManager.createSound({id:"sound5",url:h+"/sapbe.mp3"}),f=soundManager.createSound({id:"sound6",url:h+"/jueputa.mp3"})},ontimeout:function(){alert("error")}});var i,j=[];i=$("#ignorar");var k={componente:i,name:"ignorar",sound:a};i=$("#si");var l={componente:i,name:"si",sound:b};i=$("#no");var m={componente:i,name:"no",sound:c};i=$("#nope");var n={componente:i,name:"nope",sound:d};i=$("#sapbe");var o={componente:i,name:"sapbe",sound:e};i=$("#jueputa");var p={componente:i,name:"jueputa",sound:f};return j.push(k),j.push(l),j.push(m),j.push(n),j.push(o),j.push(p),g.getEmotions=function(){return j},g}),angular.module("iEmotionsApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="container"> <div class="row" style="margin-top: 10%"> <div class="col-xs-12 center-content"> <h1 class="appTitle">iEmotions</h1> </div> </div> <div class="row" style="margin-top: 10%"></div> <div class="row"> <div class="col-xs-12 center-content button soft-purple" id="ignorar"> <h1>IGNORAR</h1> </div> <div class="col-xs-12 center-content button soft-red" id="si"> <h1>SI</h1> </div> <div class="col-xs-12 center-content button soft-blue" id="no"> <h1>NO</h1> </div> <div class="col-xs-12 center-content button soft-green" id="nope"> <h1>NOPE</h1> </div> <div class="col-xs-12 center-content button soft-orange" id="sapbe"> <h1>SAPBEEEE</h1> </div> <div class="col-xs-12 center-content button last soft-yellow" id="jueputa"> <h1>JUEPUTA</h1> </div> </div> </div>')}]);
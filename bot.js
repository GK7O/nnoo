const Eris = require("eris");
var x5bzteam = new Eris("NDU2NzQ2OTYwNTE1MzY2OTIz.DtjEtA.8tpS8yUtg0YowoPsZsh-kPcmQ40");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "457949142053027850";
nick = "Saleeh.";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();

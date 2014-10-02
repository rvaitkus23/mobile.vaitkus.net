var gaPlugin = null,

initGA = function(){
  gaPlugin = window.plugins.gaPlugin;
  gaPlugin.init(successGAHandler, errorGAHandler, "UA-50314640-1", 10);
  
  gaPlugin.trackEvent( successGAHandler, errorGAHandler, "App", "Open", "open", 1);
},

successGAHandler = function(result){
  console.log("GA Success: " + result);
}, 

errorGAHandler = function(error){
  console.log("GA error: " + error);
};



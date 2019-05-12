//CHALLENGE 1
function powerOn(){
  if(ship.powerOn === false)
    ship.powerOn = true;
}

//CHALLENGE 2
function countModules(){
  
 return availableModules.length;
  
}

//CHALLENGE 3
function countEssential(){
  
  var count = 0;
  var length = availableModules.length;
  
 for(let i = 0; i < length; i++)
  {
    if(availableModules[i].essential === true)
    {
      count ++;
    }
    
  }
  
  return count;
}

//CHALLENGE 4
function loadModules(index){
  
    var index_lifesupport = index;
    availableModules[index_lifesupport].enabled = true;
    ship.modules.push(this.availableModules[index_lifesupport]);
    
  }
  
  function findIndex(){
    
    var index = 0;
    var length = availableModules.length;
    
   for(let i = 0; i < length; i++)
    {
      if(availableModules[i].name === "life-support")
      {
        index = i;
      }
      
    }
    
    loadModules (index);
  }
  
  findIndex();

  //CHALLENGE 5
  function findModuleIndex(mod_name){
  
    for(var i = 0; i < availableModules.length; i++)
     {
       if(availableModules[i].name === mod_name && availableModules[i].essential === true){
         return i;
       }
     }
   }
   
   function loadMod(index){
     
     availableModules[index].enabled = true;
     ship.modules.push(this.availableModules[index]);
     
   }
   
   loadMod(findModuleIndex("life-support"));
   loadMod(findModuleIndex("propulsion"));

   //CHALLENGE 6
   loadMod(findModuleIndex("navigation"));

   //CHALLENGE 7
    function resetLARRY(){
  
    for(var i = 0; i < 10; i++){
      
      LARRY.quack();
      
    }
    
    }
  
    resetLARRY();

    //CHALLENGE 8
    loadMod(findModuleIndex("communication"));

    //CHALLENGE 9
    function setMessage(){

    radio.message = JSON.stringify(navigation);
    
  }
    setMessage();

    //CHALLENGE 10
    function activateBeacon(){
  
    radio.beacon = true;
  
  }
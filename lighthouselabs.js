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
    //CHALLENGE 11
    function setFrequency(){
      
      radio.frequency = (radio.range.high + radio.range.low) / 2;
  }

    //CHALLENGE 12
    function initialize(){
    
    navigation.x = 0;
    navigation.y = 0;
    navigation.z = 0;
  }

  //CHALLENGE 13
  function calibrateX(){
  
  for(let i = 0; i < 12; i++){
    
    signal = checkSignal();
    
    if(signal !== undefined)
    {
      navigation.x = signal;
      break;
      
    }
    
  }
}


  //CHALLENGE 14
  function calibrateY(){
    
    for(let i = 0; i < 60; i++){
      
      signal = checkSignal();
      
      if(signal !== undefined)
      {
        navigation.y = signal;
        break;
        
      }
      
  }
}

  //calibrateY();

  function calibrateZ(){
    
    for(let i = 0; i < 60; i++){
      
      signal = checkSignal();
      
      if(signal !== undefined)
      {
        navigation.z = signal;
        break;
        
      }
      
    }
}

  //calibrateZ();

  //CHALLENGE 15
  function calibrate(){
    
    calibrateX();
    calibrateY();
    calibrateZ();
}

  //CHALLENGE 16
  function setSpeed(speed){
    
    if (speed >= 0)
      navigation.speed = parseInt(speed);
  
}

  //CHALLENGE 17
  function activateAntenna(){
    
    ship.antenna.active = true;
    
  }

  //activateAntenna();

  //CHALLENGE 18
  function sendBroadcast(){
    
    for(let i = 0; i < 100; i++)
      broadcast();
    
  }

  //sendBroadcast();

  //CHALLENGE 19
  function configureBroadcast(){
    
    setFrequency();
    activateAntenna();
    sendBroadcast();
    
  }

  configureBroadcast();

  //CHALLENGE 20
  function decodeMessage(message){
    
    message = message.replace(/0/g, "o");
    message = message.replace(/1/g, "i");
    message = message.replace(/2/g, "u");
    message = message.replace(/3/g, "e");
    message = message.replace(/4/g, "a");
    message = message.replace(/5/g, "y");

    return message;
  }

  //CHALLENGE 21
  function returnToEarth(){
    
    var hexx = broadcast("x");
    var hexy = broadcast("y");
    var hexz = broadcast("z");
    
    navigation.x = parseInt(decodeMessage(hexx), 16);
    navigation.y = parseInt(decodeMessage(hexy), 16);
    navigation.z = parseInt(decodeMessage(hexz), 16);
  }
  returnToEarth();
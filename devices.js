


var devices = (function() {
   this.clockLocale = "Relógio";	
   this.chooseYourDevice = "Escolha seu dispositivo";	
   this.deviceList = {"items": {"sdk4": ["Ionic", "Versa", "Versa Lite", "Versa 2" ],
           "sdk5": ["Versa 3", "Sense"]
		  }
   };
    this.get = function() {
		
		return this.deviceList;

    };


   this.getDeviceLabel = function(){
	   return this.chooseYourDevice;
   };
    

   this.getClockLocale = function(){
	   return this.clockLocale;
   };
   return this;


}());
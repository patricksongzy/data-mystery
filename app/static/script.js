function insertBreaks(json) {
    for(let key in json) {
		for(let i = 0; i < json[key].length; i++) {
			line = document.createElement('label');
			line.textContent = json[key][i];
			line.display = 'block';

			container = document.querySelector('#' + key.toLowerCase());
			container.appendChild(line);
		}
    }
}

function convertJSON(json_object){
    console.log(json_object)
    while(json_object.includes("&#34;")){
        json_object = json_object.replace("&#34;", '"')
    }
    return JSON.parse(json_object)
}

function MakeVisible(name) {
	var x = document.getElementById(name);
	if(x.style.visibility == "visible")
		x.style.visibility = "hidden";
	else
		x.style.visibility = "visible";
}



function update(i, events){
	
	var a = ["8:00", "API11", "Dave"];
	var b = ["8:05", "na", "Dave"];
	var c = ["8:10", "API13", "Dave"];
	var d = ["8:15", "API14", "Dave"];
	var e = ["8:15", "101", "Dave"];
	var f = ["8:15", "151", "Dave"];
	var g = ["8:15", "155", "Dave"];
	var h = ["8:15", "150", "Dave"];
	var j = ["8:15", "156", "Dave"];
	var k = ["8:15", "156B", "Dave"];
	var l = ["8:15", "154", "Dave"];
	var m = ["8:15", "152", "Dave"];
	var n = ["8:15", "105", "Dave"];
	var o = ["8:15", "130", "Dave"];
	var p = ["8:15", "110", "Dave"];
	var q = ["8:15", "100", "Dave"];
	var r = ["8:15", "Elevator", "Dave"];
            
    //console.log(events);
    events = convertJSON(events);
	var event;
	
	function myLoop () {   
			console.log(event);
			
			setTimeout(function () {  
				
				event = events[i];
				
				if(event[2]=="n/a"){
					event[2] = "unkown";
				}

				if(event[1]=="ap1-1"){
					
					moveToAPI11(event[2]); 
				}
				else if(event[1]=="ap1-2"){
					
					moveToAPI12(event[2]);	
					
				}else if(event[1]=="ap1-3"){
					
					moveToAPI13(event[2]);
					
				}else if(event[1]=="ap1-4"){
					
					moveToAPI14(event[2]);
						
				}else if(event[1]=="101"){
					
					moveTo101(event[2]);
						
				}else if(event[1]=="100"){
					
					moveTo100(event[2]);
						
				}else if(event[1]=="151"){
					
					moveTo151(event[2]);
						
				}else if(event[1]=="155"){
					
					moveTo155(event[2]);
						
				}else if(event[1]=="150"){
					
					moveTo150(event[2]);
						
				}else if(event[1]=="156"){
					
					moveTo156(event[2]);
						
				}else if(event[1]=="156B"){
					
					moveTo156B(event[2]);
						
				}else if(event[1]=="154"){
					
					moveTo154(event[2]);
						
				}else if(event[1]=="105"){
					
					moveTo105(event[2]);
						
				}else if(event[1]=="130"){
					
					moveTo130(event[2]);
						
				}else if(event[1]=="110"){
					
					moveTo110(event[2]);
						
				}else if(event[1]=="152"){
					
					moveTo152(event[2]);
						
				}else if(event[1]=="Elevator"){
					
					moveToElevator(event[2]);
				}else if(event[1]=="210"){
					
					moveTo210(event[2]);
				}else if(event[1]=="231"){
					
					moveTo231(event[2]);
				}else if(event[1]=="233"){
					
					moveTo233(event[2]);
				}else if(event[1]=="235"){
					
					moveTo235(event[2]);
				}else if(event[1]=="241"){
					
					moveTo241(event[2]);
				}else if(event[1]=="247"){
					
					moveTo247(event[2]);
				}else if(event[1]=="250"){
					
					moveTo250(event[2]);
				}else if(event[1]=="ap2-2"){
					
					moveToAPI22(event[2]);
				}else if(event[1]=="200"){
					
					moveTo200(event[2]);
				}else if(event[1]=="ap2-3"){
					
					moveToAPI23(event[2]);
				}else if(event[1]=="Elevator2"){
					
					moveToElevator2(event[2]);
				}else if(event[1]=="ap2-1"){
					
					moveToAPI21(event[2]);
				}else if(event[1]=="220"){
					
					moveTo220(event[2]);
				}else if(event[1]=="232"){
					
					moveTo232(event[2]);
				}else if(event[1]=="236"){
					
					moveTo236(event[2]);
				}else if(event[1]=="244"){
					
					moveTo244(event[2]);
				}else if(event[1]=="248"){
					
					moveTo248(event[2]);
				}else if(event[1]=="ice machine"){
					
					moveToIceMachine(event[2]);
				}else if(event[1]=="n/a"){
					
					removeFromScene(event[2]);
				}												
				i++;                     
				if (i < events.length) {            
					myLoop();            
				}                        
			}, 1000)
		}
	
	myLoop();    
	
}

function removeFromScene(location){
    document.getElementById(location).style.top = "0px";
    document.getElementById(location).style.left = "0px";
}
function moveToElevator(location){
    
    document.getElementById(location).style.left = "285px";
    document.getElementById(location).style.top = "150px";
}
function moveTo150(location){
    
    document.getElementById(location).style.left = "570px";
    document.getElementById(location).style.top = "150px";
}
function moveTo105(location){
    
    document.getElementById(location).style.left = "285px";
    document.getElementById(location).style.top = "210px";
}
function moveTo130(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "230px";
}
function moveTo110(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "100px";
}
function moveTo100(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "30px";
}
function moveTo101(location){
    
    document.getElementById(location).style.left = "408px";
    document.getElementById(location).style.top = "20px";
}
function moveTo151(location){
    
    document.getElementById(location).style.left = "408px";
    document.getElementById(location).style.top = "70px";
}
function moveTo155(location){
    
    document.getElementById(location).style.left = "500px";
    document.getElementById(location).style.top = "70px";
}
function moveTo152(location){
    
    document.getElementById(location).style.left = "395px";
    document.getElementById(location).style.top = "250px";
}
function moveTo154(location){
    
    document.getElementById(location).style.left = "455px";
    document.getElementById(location).style.top = "250px";
}
function moveTo156(location){
    
    document.getElementById(location).style.left = "515px";
    document.getElementById(location).style.top = "205px";
}
function moveTo156B(location){
    
    document.getElementById(location).style.left = "515px";
    document.getElementById(location).style.top = "257px";
}
function moveToAPI11(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "125px";
}
function moveToAPI12(location){
    
    document.getElementById(location).style.left = "457px";
    document.getElementById(location).style.top = "147px";
}
function moveToAPI13(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "260px";
}
function moveToAPI14(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "70px";
}
function moveTo210(location){
    
    document.getElementById(location).style.left = "760px";
    document.getElementById(location).style.top = "43px";
}
function moveTo231(location){
    
    document.getElementById(location).style.left = "833px";
    document.getElementById(location).style.top = "43px";
}
function moveTo233(location){
    
    document.getElementById(location).style.left = "910px";
    document.getElementById(location).style.top = "43px";
}
function moveTo235(location){
    
    document.getElementById(location).style.left = "986px";
    document.getElementById(location).style.top = "43px";
}
function moveTo241(location){
    
    document.getElementById(location).style.left = "1061px";
    document.getElementById(location).style.top = "48px";
}
function moveTo247(location){
    
    document.getElementById(location).style.left = "1134px";
    document.getElementById(location).style.top = "48px";
}
function moveTo250(location){
    
    document.getElementById(location).style.left = "1200px";
    document.getElementById(location).style.top = "140px";
}
function moveToAPI22(location){
    
    document.getElementById(location).style.left = "1100px";
    document.getElementById(location).style.top = "145px";
}
function moveTo200(location){
    
    document.getElementById(location).style.left = "1045px";
    document.getElementById(location).style.top = "145px";
}
function moveToAPI23(location){
    
    document.getElementById(location).style.left = "993px";
    document.getElementById(location).style.top = "145px";
}
function moveToElevator2(location){
    
    document.getElementById(location).style.left = "914px";
    document.getElementById(location).style.top = "145px";
}
function moveToAPI21(location){
    
    document.getElementById(location).style.left = "838px";
    document.getElementById(location).style.top = "145px";
}
function moveTo220(location){ 
    
    document.getElementById(location).style.left = "760px";
    document.getElementById(location).style.top = "210px";
}
function moveTo232(location){
    
    document.getElementById(location).style.left = "835px";
    document.getElementById(location).style.top = "244px";
}
function moveTo236(location){
    
    document.getElementById(location).style.left = "993px";
    document.getElementById(location).style.top = "244px";
}
function moveTo244(location){
    
    document.getElementById(location).style.left = "1062px";
    document.getElementById(location).style.top = "230px";
}
function moveTo248(location){
    
    document.getElementById(location).style.left = "1137px";
    document.getElementById(location).style.top = "230px";
}
function moveToIceMachine(location){
    
    document.getElementById(location).style.left = "916px";
    document.getElementById(location).style.top = "213px";
}


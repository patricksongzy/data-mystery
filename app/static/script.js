function convertJSON(json_object){
    console.log(json_object);
    while(json_object.includes("&#34;")){
        json_object = json_object.replace("&#34;", '"');
    }
    return JSON.parse(json_object);
}

function insertBreaks(json) {
    let people = ['Dave', 'Thomas', 'Harrison', 'Rob', 'Alok', 'Kristina', 'Veronica', 'Eugene', 'Jason', 'Marc-Andre', 'Salina', 'Unknown'];
    json = convertJSON(json);
    let count = 0;
    for(let key in json) {
        let person = people[count];
		for(let i = 0; i < json[key].length; i++) {
            let line = document.createElement('p');
			line.textContent = json[key][i];
			line.display = 'block';

			let container = document.querySelector('#' + person);
			container.appendChild(line);
        }
        count++;
    }
}

function MakeVisible(name) {
	let x = document.getElementById(name);
	if(x.style.visibility == "visible")
		x.style.visibility = "hidden";
	else
		x.style.visibility = "visible";
}

function MakeLarger(name) {
    let x = document.querySelector('#' + name);
    x.style.width = '75px';
    x.style.height = '75px';
}

function MakeSmaller(name) {
    let x = document.querySelector('#' + name);
    x.style.width = '50px';
    x.style.height = '50px';
}

function update(i, events){
    var element = document.getElementById("time");   
    events = convertJSON(events);
	var event;
	
	function myLoop () {   
			console.log(event);
			
			setTimeout(function () {  
				
				event = events[i];

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
				element.innerHTML = "Time: "+event[0];
				if(checkIfOverlap(document.getElementById(event[2]).style.left, document.getElementById(event[2]).style.top)){
					document.getElementById(event[2]).style.top -= "10px";
					console.log("Cant do shit");
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
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo150(location){
    
    document.getElementById(location).style.left = "570px";
    document.getElementById(location).style.top = "150px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo105(location){
    
    document.getElementById(location).style.left = "285px";
    document.getElementById(location).style.top = "210px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo130(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "230px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo110(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "100px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo100(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "30px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo101(location){
    
    document.getElementById(location).style.left = "408px";
    document.getElementById(location).style.top = "20px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo151(location){
    
    document.getElementById(location).style.left = "408px";
    document.getElementById(location).style.top = "70px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo155(location){
    
    document.getElementById(location).style.left = "500px";
    document.getElementById(location).style.top = "70px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo152(location){
    
    document.getElementById(location).style.left = "395px";
    document.getElementById(location).style.top = "250px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo154(location){
    
    document.getElementById(location).style.left = "455px";
    document.getElementById(location).style.top = "250px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo156(location){
    
    document.getElementById(location).style.left = "515px";
    document.getElementById(location).style.top = "205px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo156B(location){
    
    document.getElementById(location).style.left = "515px";
    document.getElementById(location).style.top = "257px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI11(location){
    
    document.getElementById(location).style.left = "145px";
    document.getElementById(location).style.top = "125px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI12(location){
    
    document.getElementById(location).style.left = "457px";
    document.getElementById(location).style.top = "147px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI13(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "260px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI14(location){
    
    document.getElementById(location).style.left = "283px";
    document.getElementById(location).style.top = "70px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo210(location){
    
    document.getElementById(location).style.left = "760px";
    document.getElementById(location).style.top = "43px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo231(location){
    
    document.getElementById(location).style.left = "833px";
    document.getElementById(location).style.top = "43px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo233(location){
    
    document.getElementById(location).style.left = "910px";
    document.getElementById(location).style.top = "43px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo235(location){
    
    document.getElementById(location).style.left = "986px";
    document.getElementById(location).style.top = "43px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo241(location){
    
    document.getElementById(location).style.left = "1061px";
    document.getElementById(location).style.top = "48px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo247(location){
    
    document.getElementById(location).style.left = "1134px";
    document.getElementById(location).style.top = "48px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo250(location){
    
    document.getElementById(location).style.left = "1200px";
    document.getElementById(location).style.top = "140px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI22(location){
    
    document.getElementById(location).style.left = "1100px";
    document.getElementById(location).style.top = "145px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo200(location){
    
    document.getElementById(location).style.left = "1045px";
    document.getElementById(location).style.top = "145px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI23(location){
    
    document.getElementById(location).style.left = "993px";
    document.getElementById(location).style.top = "145px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToElevator2(location){
    
    document.getElementById(location).style.left = "914px";
    document.getElementById(location).style.top = "145px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToAPI21(location){
    
    document.getElementById(location).style.left = "838px";
    document.getElementById(location).style.top = "145px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo220(location){ 
    
    document.getElementById(location).style.left = "760px";
    document.getElementById(location).style.top = "210px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo232(location){
    
    document.getElementById(location).style.left = "835px";
    document.getElementById(location).style.top = "244px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo236(location){
    
    document.getElementById(location).style.left = "993px";
    document.getElementById(location).style.top = "244px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo244(location){
    
    document.getElementById(location).style.left = "1062px";
    document.getElementById(location).style.top = "230px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveTo248(location){
    
    document.getElementById(location).style.left = "1137px";
    document.getElementById(location).style.top = "230px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}
function moveToIceMachine(location){
    
    document.getElementById(location).style.left = "916px";
    document.getElementById(location).style.top = "213px";
	if(checkIfOverlap()){
		document.getElementById(location).style.top -= "10px";
		console.log("Cant do shit");
	}	
}

function checkIfOverlap(x, y){
	var i = 0, person = "";
	console.log("checking");
	for(i<13; i++;){
		switch(i){
			case 0: person = "Dave"
			case 1: person = "Thomas"
			case 2: person = "Harrison"
			case 3: person = "Rob"
			case 4: person = "Alok"
			case 5: person = "Kristina"
			case 6: person = "Veronica"
			case 7: person = "James"
			case 8: person = "Eugene"
			case 9: person = "Jason"
			case 10: person = "Marc-Andre"
			case 11: person = "Salina"
			case 12: person = "Unkown"
		}
		if(document.getElementById(person).style.top==y&&document.getElementById(person).style.left==x){
			console.log("overlap");
			return (true);
		}
	}
	
	
}
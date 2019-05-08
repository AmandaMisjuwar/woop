

var clicked = 0;
function moveBox(){	
	var myBox = document.getElementById("box"),
	posX = 0,
	posY = 0,
	speedX = 10,
	speedY = 20;
	if (clicked == 0){
		clicked = 1;
		var timer = setInterval(function() {
				posX += speedX;
				posY += speedY;

				if (posX >= 1350 || posX <= 0){
					speedX *= -1;
				}
				if(posY >= 720 || posY <= 0){
					speedY *= -1;
				}
				
				myBox.style.left = posX + "px";
				myBox.style.top = posY + "px";	
			
			},80); 
	} else{
		clearInterval(timer);
		clicked = 0;
	}
	

}






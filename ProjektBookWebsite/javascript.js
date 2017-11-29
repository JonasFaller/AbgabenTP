function clickaufbutton(zahl){
	switch(zahl)
	{
	
		case 1: var modal = document.getElementById('myModal1');
				var btn = document.getElementById("button1");
				modal.style.display = "block";
				break;
			    
	
		case 2: var modal = document.getElementById('myModal2');
				var btn = document.getElementById("button2");
				var btn2 = document.getElementById("authorbutton");
				modal.style.display = "block";
				break;
				

	    case 3: var modal = document.getElementById('myModal3');
				var btn = document.getElementById("button3");
				var btn2 = document.getElementById("informationbutton");
				modal.style.display = "block";
				break;
				
		
		case 4: var modal = document.getElementById('myModal4');
				var btn = document.getElementById("buttton4");
				modal.style.display = "block";
				break;
			
				
		case 5: var modal = document.getElementById('myModal5');
				var btn = document.getElementById("buttton5");
				modal.style.display = "block";
				break;

		case 6: var modal = document.getElementById('myModal6');
				var btn = document.getElementById("buttton6");
				modal.style.display = "block";
				break;
		
	
	
	}
	
	
   
	
	window.onclick = function(event) 
	{
		if (event.target == modal) 
		{
			modal.style.display = "none";
			
		}
	}
	

}




function clickaufimage(zahl){
	switch(zahl)
	{
	
		case 1: var modal = document.getElementById('myModalImage'); 
				var img = document.getElementById('myImg');
				var modalImg = document.getElementById("img01");
				var captionText = document.getElementById("caption");
				
				img.onclick = function(){
					modal.style.display = "block";
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
				}
				
				break;
	
		case 2: var modal = document.getElementById('myModalImg2'); // Get the image and insert it inside the modal - use its "alt" text as a caption
				var img = document.getElementById('myImg2');
				var modalImg = document.getElementById("img02");
				var captionText = document.getElementById("caption2");
				img.onclick = function(){
					modal.style.display = "block";
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
				}
				
				break;

	    case 3: var modal = document.getElementById('myModalImg3'); // Get the image and insert it inside the modal - use its "alt" text as a caption
				var img = document.getElementById('myImg3');
				var modalImg = document.getElementById("img03");
				var captionText = document.getElementById("caption3");
				img.onclick = function(){
					modal.style.display = "block";
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
				}
				break;
				
		case 4: var modal = document.getElementById('myModalImg4'); // Get the image and insert it inside the modal - use its "alt" text as a caption
				var img = document.getElementById('myImg4');
				var modalImg = document.getElementById("img04");
				var captionText = document.getElementById("caption4");
				img.onclick = function(){
					modal.style.display = "block";
					modalImg.src = this.src;
					captionText.innerHTML = this.alt;
				}
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
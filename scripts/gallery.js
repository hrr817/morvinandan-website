    
	/* Function to show image in Viewer, set image id attribute as function parameter */

	function showInViewer(id) {

	    let myView = document.getElementById("view");
    	let imgView = document.getElementById("imgView");
     	let img = document.getElementById(id);
        let caption = document.getElementById("caption");
   	    myView.style.display = "flex";
		imgView.src = img.src;
        caption.innerHTML = img.alt;
	}

	
	/* Close Button */
    let myView = document.getElementById("view");
	let imgView = document.getElementById("imgView");
	let img = document.getElementById("img1");
	
    let closebtn = document.getElementsByClassName("close")[0];
    closebtn.onclick = function() { 
    myView.style.display = "none"; }
var start = function() {

}

var trigger = function() {
	hideTrigger();
	// showExclam();
	setTimeout(function(){
		console.log("0");
		showPopup0();

		setTimeout(function(){
			showPopup1();
		 	console.log("1");

		 	setTimeout(function(){
		 		showPopup2();
		 		console.log("2");

		 		setTimeout(function(){
			 		showPopup3();
			 		console.log("3");

			 		setTimeout(function(){
				 		showPopup4();
				 		console.log("4");

			 		}, 400);
		 		}, 500);
		 	}, 700);
		 }, 1500);
	}, 750);

	// showPopup0();
	// showPopup1();
	// showPopup2();
	// showPopup3();
	// showPopup4();
}

var hideTrigger = function() {
	var plus = document.getElementById("plus");
	var ring = document.getElementsByClassName("trigger");
	// console.log(plus + ", " + ring[0]);

	plus.style.opacity = "0";
	ring[0].style.opacity = "0";

	setTimeout(function(){
		plus.style.display = "none";
		ring[0].style.display = "none";
	}, 1000);
}

var showExclam = function() {
	var exclam = document.getElementById("exclam");
		exclam.className = "exclam_out";
	setTimeout(function(){
		exclam.className = "exclam_in";
		// showPopup0();
	}, 3000)
}

var showPopup0 = function() {
	var pop0 = document.getElementsByClassName("popup0");
	var addText = function() {pop0[0].innerHTML = "Popup Goes Here";}
	pop0[0].addEventListener("transitionend", addText());
	pop0[0].classList.add("open");
}

var showPopup1 = function() {
	var pop1 = document.getElementsByClassName("popup1");
	pop1[0].classList.add("open");
	var addText = function() {pop1[0].innerHTML = "Popup Goes Here";}
	pop1[0].addEventListener("transitionend", addText());
}

var showPopup2 = function() {
	var pop2 = document.getElementsByClassName("popup2");
	pop2[0].classList.add("open");
}

var showPopup3 = function() {
	var pop3 = document.getElementsByClassName("popup3");
	pop3[0].classList.add("open");
}

var showPopup4 = function() {
	var pop4 = document.getElementsByClassName("popup4");
	pop4[0].classList.add("open");
}
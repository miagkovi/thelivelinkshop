//

// (function(){
	// var specialOffers = document.getElementById("specialOffers");
	// var bestsellers = document.getElementById("bestsellers");
	// var latests = document.getElementById("latests");
	// var soonests = document.getElementById("soonests");
	// var specialOffersBtnRight = document.getElementById("specialOffersBtnRight");
	// var specialOffersBtnLeft = document.getElementById("specialOffersBtnLeft");
	// specialOffers.style.marginLeft,
	// bestsellers.style.marginLeft,
	// latests.style.marginLeft,
	// soonests.style.marginLeft = "0";

	// var increment = 20;
	// var myMarginLeft = 0;

	// specialOffersBtnRight.onclick = function() {
	// 	if (myMarginLeft > -100) {
	// 		myMarginLeft = myMarginLeft - increment;
	// 		specialOffers.style.marginLeft = myMarginLeft + "%";
	// 		if (myMarginLeft === -100) {
	// 			specialOffersBtnRight.classList.remove("arrow-fefe-r-a");
	// 			specialOffersBtnRight.classList.add("arrow-fefe-r");
	// 		};
	// 	} else {
	// 		myMarginLeft = myMarginLeft;
	// 	};
	// }
// }())

// 	var specialOffers = document.getElementById("specialOffers");
// 	var bestsellers = document.getElementById("bestsellers");
// 	var latests = document.getElementById("latests");
// 	var soonests = document.getElementById("soonests");

// 	var specialOffersBtnRight = document.getElementById("specialOffersBtnRight");
// 	var specialOffersBtnLeft = document.getElementById("specialOffersBtnLeft");

// 	specialOffers.style.marginLeft,
// 	bestsellers.style.marginLeft,
// 	latests.style.marginLeft,
// 	soonests.style.marginLeft = "0";

// one object

// var app = {
// 	increment: 230,
// 	margin: 0,
// 	right: function() {
// 		if (this.margin > -2300/2) {
// 			this.margin = this.margin - this.increment;
// 			specialOffers.style.marginLeft = this.margin + "px";
// 			// if (this.margin === -2300/2) {
// 			// 	specialOffersBtnRight.classList.remove("arrow-fefe-r-a");
// 			// 	specialOffersBtnRight.classList.add("arrow-fefe-r");
// 			// };
// 		} else {
// 			this.margin = this.margin;
// 		};
// 	},
// 	left: function() {
// 		if (this.margin < 0) {
// 			this.margin = this.margin + this.increment;
// 			specialOffers.style.marginLeft = this.margin + "px";
// 			// if (this.margin !== 0) {
// 			// 	specialOffersBtnLeft.classList.remove("arrow-fefe-l");
// 			// 	specialOffersBtnLeft.classList.add("arrow-fefe-l-a");
// 			// };
// 		} else {
// 			this.margin = this.margin;
// 		};
// 	}
// };

//independent margins

var App = function(elemId, leftBtnId, rightBtnId) {
	//constructor
	this.elem = document.getElementById(elemId);
	this.lBtn = document.getElementById(leftBtnId);
	this.rBtn = document.getElementById(rightBtnId);
	this.increment = 230;
	this.margin = 0;
	this.elem.style.marginLeft = "0";
};

App.prototype.right = function() {
	//right move
	if (this.margin > -2300/2) {
		this.margin = this.margin - this.increment;
		this.elem.style.marginLeft = this.margin + "px";
	} else {
		this.margin = this.margin;
	};
	//control over arrows classes
	if (this.margin !== 0) {
		this.lBtn.classList.add("arrow-fefe-l-a");
	} else {
		this.lBtn.classList.remove("arrow-fefe-l-a");
	};
	if (this.margin === -2300/2) {
		this.rBtn.classList.add("arrow-fefe-r");
	} else {
		this.rBtn.classList.remove("arrow-fefe-r");
	};
};

App.prototype.left = function() {
	//left move
	if (this.margin < 0) {
		this.margin = this.margin + this.increment;
		this.elem.style.marginLeft = this.margin + "px";
	} else {
		this.margin = this.margin;
	};
	//control over arrows classes
	if (this.margin !== 0) {
		this.lBtn.classList.add("arrow-fefe-l-a");
	} else {
		this.lBtn.classList.remove("arrow-fefe-l-a");
	};
	if (this.margin === -2300/2) {
		this.rBtn.classList.add("arrow-fefe-r");
	} else {
		this.rBtn.classList.remove("arrow-fefe-r");
	};
};

var specialOffersApp = new App("specialOffers", "specialOffersBtnLeft", "specialOffersBtnRight");
var bestsellersApp = new App("bestsellers", "bestsellersBtnLeft", "bestsellersBtnRight");
var latestsApp = new App("latests", "latestsBtnLeft", "latestsBtnRight");
var soonestsApp = new App("soonests", "soonestsBtnLeft", "soonestsBtnRight");
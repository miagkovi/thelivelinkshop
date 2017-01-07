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

	var specialOffers = document.getElementById("specialOffers");
	var bestsellers = document.getElementById("bestsellers");
	var latests = document.getElementById("latests");
	var soonests = document.getElementById("soonests");

	var specialOffersBtnRight = document.getElementById("specialOffersBtnRight");
	var specialOffersBtnLeft = document.getElementById("specialOffersBtnLeft");

	specialOffers.style.marginLeft,
	bestsellers.style.marginLeft,
	latests.style.marginLeft,
	soonests.style.marginLeft = "0";

var app = {
	increment: 230,
	margin: 0,
	right: function() {
		if (this.margin > -2300/2) {
			this.margin = this.margin - this.increment;
			specialOffers.style.marginLeft = this.margin + "px";
			// if (this.margin === -100) {
			// 	specialOffersBtnRight.classList.remove("arrow-fefe-r-a");
			// 	specialOffersBtnRight.classList.add("arrow-fefe-r");
			// };
		} else {
			this.margin = this.margin;
		};
	},
	left: function() {
		if (this.margin < 0) {
			this.margin = this.margin + this.increment;
			specialOffers.style.marginLeft = this.margin + "px";
			// if (tis.margin !== 0) {
			// 	specialOffersBtnLeft.classList.remove("arrow-fefe-l");
			// 	specialOffersBtnLeft.classList.add("arrow-fefe-l-a");
			// };
		} else {
			this.margin = this.margin;
		};
	}
};

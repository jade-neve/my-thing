// Checking for js
document.body.classList.remove("no-js");

// Add toggle button to page, first create elememt components...
var togglebutton = document.createElement("button");
	togglebutton.classList.add("switch");

// ... then add element to page
var listingtitle = document.querySelector(".listing-title");
var listingheader = document.querySelector(".listing-header");
	listingheader.insertBefore(togglebutton, listingtitle.nextSibling);


// Data attribute switch function
var toggleState	= function (elem, one, two) {
	var elem	= document.querySelector(elem);
		elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

	// Select the filters container...
	var filters = document.querySelector('.product-filters');
		filters.setAttribute('data-state', 'closed');

	// ... apply the toggle function to it
	if (typeof(filters) != 'undefined' && togglebutton != null) {
		togglebutton.onclick = function (e) {
			toggleState('.product-filters', 'closed', 'open');
			e.preventDefault();
		};
	};

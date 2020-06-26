//Waiting for the DOM model to load all components, then start
window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	//Setting the function content
	function simpleTabs(tabHeadingList, tabHeading, tabText) {

		//Putting into variables the Tab Heading List, Tab Headings as an array and Tab Content as an array
		let info = document.querySelector('.' + tabHeadingList),
			tab = document.querySelectorAll('.' + tabHeading),
			tabContent = document.querySelectorAll('.' + tabText);

		//Function for HIDING the Tab Content, has argument 'a' which sets the number of content sections to be hidden
		function hideTabContent(a) {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}
		//Launching the hiding function
		hideTabContent(1);

		//Function for SHOWING the Tab Content which has number set in argument 'b'
		function showTabContent(b) {
			if (tabContent[b].classList.contains('hide')) {
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}

		//On click on the Tab Heading List we check if the click was on a certain Tab Heading. 
		//If so, we check which Tab we clicked on. 
		//We take its number and show the tab content with the same number, hiding all others.

		info.addEventListener('click', function (event) {
			let target = event.target;
			if (target && target.classList.contains(tabHeading)) {
				for (let i = 0; i < tab.length; i++) {
					if (target == tab[i]) {
						hideTabContent(0);
						showTabContent(i);
						break;
					}
				}
			}
		});
	}
	//Simply add into the function arguments REAL class names of your elements
	// ! Without a dot 
	// Argument 1: headings list class
	// Argument 2: tab heading class
	// Argument 3: tab content class
	// If in doubt, see the HTML preview 

	simpleTabs('info-header', 'info-header-tab', 'info-tabcontent');

});
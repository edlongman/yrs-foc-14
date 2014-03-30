$(document).ready(function() {
	function randomNumber(min, max) {
	    return Math.floor(Math.random() * (max - min + 1) + min);
	}
	$("html").addClass("n-" + randomNumber(1, 7));
});
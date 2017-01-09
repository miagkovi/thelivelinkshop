$("document").ready(function() {
	var i = 2;
	$(".special__context-btn").on("click", function() {
		if (i > 4) { i = 1 };
		var idToCheck = "#so-" + String(i);
		$(idToCheck).prop('checked', true);
		i = i + 1;
	});
});
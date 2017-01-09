$("document").ready(function() {
	$("#contextButton").on("click", function() {
		var selectedOption = $( "#select option:selected" );
		var fulldropToShow = "#fulldrop_" + selectedOption.val();
		$(fulldropToShow).toggle("fast");
	});
});
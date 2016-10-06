$(function(){

	// convert the contact form type to select.
	if ($(window).width() < 453) {
		$radio = $('form.contact>.form-group.radio');
		var $select = $("<select id=\"type\" name=\"type\" />");
		var data = ["Corporation", "Individual", "CSR", "Media", "NGO"];
		for(var val in data) {
		    $("<option />", {value: val, text: data[val]}).appendTo($select);
		}
		$($select).insertAfter($radio);
		$radio.remove();
	}


	// contact form radio button
	$('input[name="type"]').on('click', function(){
		$(this).parent().siblings().removeClass('selected');
		$(this).parent().addClass('selected');
	});

});

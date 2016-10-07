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


	$('form.contact#contact').on('submit', function(ev){
		ev.preventDefault();

		var data = {
			'type': $('input[name=type]').val(),
			'position': $('input[name=position]').val(),
		  'first_name': $('input[name=first_name]').val(),
		  'last_name': $('input[name=last_name]').val(),
		  'message': $('textarea[name=message]').val()
		};


	// process the form
	$.ajax({
		type: 'POST',
		url : '/scripts/contact.php',
		data: data
	}).done(function(data) {
			// log data to the console so we can see
			console.log(data);
			// here we will handle errors and validation messages
		});


	});// end on form submit



});

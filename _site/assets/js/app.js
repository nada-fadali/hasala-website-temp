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


	$('form.contact#contact').on('submit', function(event){
		event.preventDefault();

		var data = {
			'type': $('input[name=type]:checked').val(),
			'position': $('input[name=position]').val(),
		  'first_name': $('input[name=first_name]').val(),
		  'last_name': $('input[name=last_name]').val(),
		  'email': $('input[name=email]').val(),
		  'phone': $('input[name=phone]').val(),
		  'message': $('textarea[name=message]').val()
		};

		// process the form
		$.ajax({
			type: 'POST',
			url : '/scripts/contact.php',
			data: data
		}).done(function(data) {
				console.log(data);
				$('#contact-msg').html("Thank you. Your message was submitted.");
		}).fail(function() {
    		$('#contact-msg').html("We are sorry, seems like we are having technical diffculties. Try contacting us through our facebook page. Thank you.");
  	}).always(function() {
  			$('#contact-submit').prop('disabled', true);
  	});

	});// end on form submit


}); // end of function ready

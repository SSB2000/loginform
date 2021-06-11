$('#form-submit').click (function() {

	event.preventDefault();

	if ($("#username").val() == "admin" && $("#password").val() == "password") {
		$('#valid').css('display', 'block').css('width', '250px');
	} else {
		$('#error').css('display', 'block');
	}
});


$("#login").click(function() {
	var email = $("#login-email").val()
	var password = $("#login-password").val()
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function() {
		$(".modal").hide()
		$(".page").hide()
	})
	.catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		$("#login-error").html(errorMessage)
	})
})
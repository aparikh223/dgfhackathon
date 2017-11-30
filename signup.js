$("#signup").click(function() {
	var email = $("#signup-email").val()
	var password = $("#signup-password").val()
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function() {
		$(".modal").hide()
		$(".page").hide()
		firebase.auth().signInWithEmailAndPassword(email, password)
	})
	.catch(function(error) {
		var errorCode = error.code
		var errorMessage = error.message
		$("#signup-error").html(errorMessage)
	})
})
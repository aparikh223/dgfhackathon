firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		$("#title-buttons-logged-out").hide()
		$("#title-buttons-logged-in").show()
		isLoggedIn = true
	} else {
		$("#title-buttons-logged-out").show()
		$("#title-buttons-logged-in").hide()
		isLoggedIn = false
	}

	// always load this news source first
	getNews("recode", isLoggedIn)
})
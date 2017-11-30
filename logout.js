$("#logout").click(function() {
	firebase.auth().signOut().then(function() {
		location.reload()
	})
})
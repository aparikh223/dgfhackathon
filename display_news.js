$(".container").html('')    // clear existing articles
$(".title-link").css('text-decoration', 'none')
$("#" + source).css('text-decoration', 'underline')     // underline the source link

for (var i = 0; i < data.articles.length; i++) {
	var article = data.articles[i]

	$( "<div></div>", {
		id: "article-container-" + i,
		class: "article-container",
		style: "background-image: url(" + article.urlToImage + ")",
	}).appendTo($(".container"))
	
	$("#article-container-" + i).bind("click", { url: article.url }, function(e) {
		window.open(e.data.url)
	})

	$( "<div></div>", {
		class: "article-text",
	}).appendTo($("#article-container-" + i))
	
	$( "<div></div>", {
		class: "article-title",
		text: article.title
	}).appendTo($("#article-container-" + i + " .article-text"));

	$( "<div></div>", {
		class: "article-datetime",
		text: moment(article.publishedAt).format("MMMM Do YYYY, h:mm:ss a")
	}).appendTo($("#article-container-" + i + " .article-text"))

	if (isLoggedIn) {
		$( "<div></div>", {
			class: "slack-button",
			id: "slack-button-" + i,
			text: "Send to Slack",
		}).appendTo($("#article-container-" + i))

		$("#slack-button-" + i).bind("click", {
			source: source,
			article: article
		}, function(e) {
			e.preventDefault()
			e.stopPropagation()
			var source = e.data.source
			var article = e.data.article
			sendToSlack(source, article.title, article.description, article.url, article.urlToImage)
		})
	}
}
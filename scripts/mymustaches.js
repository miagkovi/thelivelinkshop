$("document").ready(function() {
	$.getJSON('./data.json', function(data) {
		// promos
			var promos_template = $('#promosTpl').html();
			var promos_html = Mustache.to_html(promos_template, data);
			$('#promos-mustache').html(promos_html);
		// shares
			var shares_template = $('#sharesTpl').html();
			var shares_html = Mustache.to_html(shares_template, data);
			$('#shares-mustache').html(shares_html);
		// specials
			// offers
				var offers_template = $('#offersTpl').html();
				var offers_html = Mustache.to_html(offers_template, data);
				$('#offers-mustache').html(offers_html);
			// bestsellers
				var bestsellers_template = $('#bestsellersTpl').html();
				var bestsellers_html = Mustache.to_html(bestsellers_template, data);
				$('#bestsellers-mustache').html(bestsellers_html);
			// latests
				var latests_template = $('#latestsTpl').html();
				var latests_html = Mustache.to_html(latests_template, data);
				$('#latests-mustache').html(latests_html);
			// soonests
				var soonests_template = $('#soonestsTpl').html();
				var soonests_html = Mustache.to_html(soonests_template, data);
				$('#soonests-mustache').html(soonests_html);
		// articles
			var articles_template = $('#articlesTpl').html();
			var articles_html = Mustache.to_html(articles_template, data);
			$('#articles-mustache').html(articles_html);
	});
});
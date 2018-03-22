count = 0;
opened_count = parseInt(localStorage["opened_count"]) || 0;

function badge_text() {
	chrome.browserAction.setBadgeText({text: String(count)});
}

function update(op) {
	if (op !== null) {
		count += op;

		if (0 < op)
			opened_count += op;
			localStorage["opened_count"] = opened_count;
	}

	badge_text();
	
}

chrome.tabs.onCreated.addListener(function() {
	update(1);
});

chrome.tabs.onRemoved.addListener(function() {
	update(-1);
});

chrome.windows.getAll({populate: true}, function(windows) {
	for(var i=0; i<windows.length; i++)
		update(windows[i].tabs.length);
		// count += windows[i].tabs.length;

	//update(0);
});

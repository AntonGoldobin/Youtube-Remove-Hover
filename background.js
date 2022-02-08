function reddenPage() {
	let previews = document.querySelectorAll('#preview')
	previews.forEach((el) => el.remove())
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: reddenPage,
	})
})

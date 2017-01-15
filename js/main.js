var links = {
	google: 'https://www.google.es/search?q=',
	youtube: 'https://www.youtube.com/results?search_query=',
	amazon: 'https://www.amazon.es/s/field-keywords=',
	ddgo: 'https://duckduckgo.com/html/?q='
};
var emptyLinks = {
	google: 'https://www.google.es/',
	youtube: 'https://www.youtube.com/',
	amazon: 'https://www.amazon.es/',
	ddgo: 'https://duckduckgo.com/'
};

function searchByText(e) {
	var textToSearch = document.getElementById('searcher').value;
	var selectedSite = document.getElementById('searchSelector').value;

	if (e.which == "13") {
		if (selectedSite == 'google' || selectedSite == 'youtube' ||
		selectedSite == 'gaming' || selectedSite == 'lyrics' ||
		selectedSite == 'bing' || selectedSite == 'amazon' ||
		selectedSite == 'ddgo') {
			if (textToSearch != '' && selectedSite != '') {
				window.open(links[selectedSite.toLowerCase()] + textToSearch);
			} else if (textToSearch == '' && selectedSite != '') {
				window.open(emptyLinks[selectedSite.toLowerCase()]);
			}
		} else {
			alert("La página especificada es inválida.");
		}
	}
};
function showNotes() {
	document.getElementById('enabledSites').style.visibility = "visible";
};
function hiddeNotes() {
	document.getElementById('enabledSites').style.visibility = "hidden";
};

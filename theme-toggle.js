(function () {
	if (sessionStorage.getItem('theme') === 'theme-dark-red') {
		setTheme('theme-dark-red');
		document.getElementById('slider').checked = true;
	} else {
		setTheme('theme-light-green');
		document.getElementById('slider').checked = false;
	}
})();

function setTheme(themeName) {
	sessionStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}
function toggleTheme() {
	if (sessionStorage.getItem('theme') === 'theme-dark-red') {
		setTheme('theme-light-green');
	} else {
		setTheme('theme-dark-red');
	}
}
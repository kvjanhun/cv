function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}
function toggleTheme() {
	if (localStorage.getItem('theme') === 'theme-dark-red') {
		setTheme('theme-light-green');
	} else {
		setTheme('theme-dark-red');
	}
}  
(function () {
	if (localStorage.getItem('theme') === 'theme-dark-red') {
		setTheme('theme-dark-red');
		document.getElementById('slider').checked = true;
	} else {
		setTheme('theme-light-green');
		document.getElementById('slider').checked = false;
	}
})();
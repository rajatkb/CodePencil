/* JavaScript code for the project goes here */
function onLoading() {
	htmlMinimizer = document.getElementById('html-minimizer');
	cssMinimizer = document.getElementById('css-minimizer');
	jsMinimizer = document.getElementById('js-minimizer');
	htmlcode = document.getElementById('html');
	csscode = document.getElementById('css');
	jscode = document.getElementById('javascript');
	htmlcontent = document.getElementById('htmlcontent');
	csscontent = document.getElementById('csscontent');
	jscontent = document.getElementById('jscontent');
	htmlMinimizer.addEventListener('click', function() {
		htmlcode.classList.toggle('animate');
		/* htmlcontent.style.width = '0px';
		htmlcontent.style.height = '0px';
		htmlcode.style.width = '0px';
		htmlcode.style.height = '0px'; */
	});
	cssMinimizer.addEventListener('click', function() {
		csscode.classList.toggle('animate');
		/* csscontent.style.width = '0px';
		csscontent.style.height = '0px';
		csscode.style.width = '0px';
		csscode.style.height = '0px'; */
	});
	jsMinimizer.addEventListener('click', function() {
		jscode.classList.toggle('animate');
		/* jscontent.style.width = '0px';
		jscontent.style.height = '0px';
		jscode.style.width = '0px';
		jscode.style.height = '0px'; */
	});
}
window.addEventListener('load', onLoading);

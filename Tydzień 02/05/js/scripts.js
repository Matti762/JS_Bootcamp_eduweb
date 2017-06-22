//(function() {
 
    function debounce(fn, time, immediate) {
        // docelowo powinna być wywoływana
        // funkcja fn w ten sposób fn()
 
        // część kodu tutaj
var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) fn.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, time);
		if (callNow) fn.apply(context, args);
	};
 }
    var handleScroll = debounce(function() {
        console.log("Scrollujemy!");
    }, 200);
 
    // w tym miejscu pod handleScroll
    // powinna być nowa funkcja
 
    // Przypisanie zdarzenia "scroll"
    window.addEventListener("scroll", handleScroll, false);
//console.log(window.addEventListener("scroll", handleScroll, false));

    // Możesz również przetestować funkcję
    // ze zdarzeniem "resize" skalując okno
    var handleResize = debounce(function() {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);
 
    window.addEventListener("resize", handleResize, false);
 
//})();
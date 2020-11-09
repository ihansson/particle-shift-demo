export default function renderWithFont(func, canvasRef, id) {
	return () => {
	    var f = new FontFace("LexendDeca", 'url(https://fonts.gstatic.com/s/lexenddeca/v3/K2F1fZFYk-dHSE0UPPuwQ5qnJy8.woff2)');
	    f.load().then(function() {
	      func(canvasRef, id)
	    });
	}
}
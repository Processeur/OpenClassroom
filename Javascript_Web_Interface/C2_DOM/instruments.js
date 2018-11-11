function infoliens () {
	var lien = document.querySelector("a").hasAttribute("href");
	console.log(lien);
	var lienQTY = lien.length;
	var lienFirst = lien[0].innerHTML;
	var lientlast = lien[lienQTY].innerHTML;
	description = lienQTY + '\n' + lienFirst + '\n' + lientlast;
	return description;
}
console.log(infoliens());
function addWishList(list, product_name, quantity, retailer_name, product, promo)
{
 let req = new XMLHttpRequest();

	 //Open GET request, using queryString

 let queryString = `/search?p1=${product_name}&q1=${quantity}&ret=${retailer_name}`;
	 req.open("GET", queryString, true);
	 req.setRequestHeader('Content-Type', 'application/json');

	 if(req.status >= 200 && req.status < 400)
 {
	 let results = JSON.parse(req.responseText);
			 listAdder(list, results, promo);
 }
	 else
 console.log("Error: " + req.statusText);
req.send();
}

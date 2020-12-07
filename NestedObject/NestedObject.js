//<html>
//<head>
//<metadata arguments>
//<title>HEllO</title>
//</head>
//<body>
//<script>

//function to pass in the object and a key and get back the value.

function makeItem(){
	return{
		data:{
			item:{
				name: 'Hoodies',
				size:{
					XL: 42,
					XXL: 44
				}
			}
		},
		status: 'available'
	}
}

const { data: {item:{ name, size: { XL, XXL} }}, status } = makeItem();

console.log(name, XL, XXL);



//</script>
//</body>
//</html>

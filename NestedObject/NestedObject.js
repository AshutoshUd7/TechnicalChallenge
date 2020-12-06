




function makeItem(){
	return{
		data:{
			item:{
				name: 'Hoodies',
				size:{
					XL: 42,
					XXL: 44,
				}
			}
		},
		status: 'available'
	}
}



const { data: {item:{ name, size: { XL, XXL} }}, status } = makeItem();

console.log(name, XL, XXL);

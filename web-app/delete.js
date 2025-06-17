
export function deleteAddress(addresses, id){
	const parsedId = parseInt(id)
	const filteredAddresses = addresses
		.filter
		((address) => address.id !== parsedId
		);
	return filteredAddresses;
}


export function getList(addresses){
	return `<!DOCTYPE html>
		<html>
			<head>
				<title>Address book Version 2</title>
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<h1>Address book version 2</h1>
				<table>
					<thead>
						<tr>
							<th>Image</th>	
							<th>Id</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						${addresses.map(createRow).join('')}
					</tbody>
				</table>
			</body>
		</html>
	`;
};


function createRow(address){
	let img = address.file
	if (img === null){
		img = '';
	} else {
		img = `<img src="${address.file}" height="20" width="20">`;
	}
	 return `<tr>
	 			<td>${img}</td>
	 			<td>${address.id}</td>
	 			<td>${address.firstname}</td>
	 			<td>${address.lastname}</td>
	 			<td>
	 				<a href="/delete/${address.id}">
	 					delete
	 				</a>
	 			</td>
			</tr>`;
	};
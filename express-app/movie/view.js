
export function render(movies){
	return `
		<!DOCTYPE html>
		<html lang="eng">
		<head>
			<meta charset="UFT-8">
			<title>Movie List</title>
		</head>
		<body>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					${movies.map(movie => 
						`<tr>
							<th>${movie.id}</th>
							<th>${movie.title}</th>
						</tr>`).join('')}
				</tbody>
			</table>
		</body>
		</html>
	`
	;
};
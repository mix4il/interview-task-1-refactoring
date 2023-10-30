import React from 'react'

export const Table = ({ universities }) => {
	return (
		<>
			{universities?.length ? (
				<table>
					<thead>
						<tr>
							<th>University name</th>
							<th>Country code</th>
							<th>Domains</th>
						</tr>
					</thead>
					<tbody>
						{universities.map(university => (
							<tr key={university.name}>
								<td>{university.name}</td>
								<td>{university.alpha_two_code}</td>
								<td>
									{university.domains.map(domain => (
										<a href={`https://${domain}`} target="_blank">
											{domain}
										</a>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</>
	)
}

import React, { useState, useEffect, useId, useMemo, Suspense } from 'react'
import { useUniversity } from './hooks'
import { Pagination } from './components/Pagination'
import { Table } from './components/Table'

export const App = () => {
	const searchId = useId()
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const [activePage, setActivePage] = useState(1)

	const { handleCountrySearchChange, universities, countrySearch } = useUniversity()

	const start = useMemo(() => {
		return itemsPerPage * (activePage - 1)
	}, [itemsPerPage, activePage])

	const currentUniversities = useMemo(() => {
		return universities.slice(start, start + itemsPerPage)
	}, [start, itemsPerPage, universities])

	return (
		<div>
			<label htmlFor={searchId}>Поиск</label>
			<br />
			<input id={searchId} onChange={handleCountrySearchChange} type="string" value={countrySearch} />
			<Table universities={currentUniversities} />
			<Pagination
				itemsPerPage={itemsPerPage}
				activePage={activePage}
				totalItems={universities.length}
				onPageChange={setActivePage}
			/>
		</div>
	)
}

export default App

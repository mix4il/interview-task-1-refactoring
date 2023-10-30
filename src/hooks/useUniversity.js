import { useCallback, useEffect, useState } from 'react'
import { HttpService } from '../services/http/http'
import { useApiUniversity } from './useApiUniversity'

export const useUniversity = () => {
	const [universities, setUniversities] = useState([])
	const [countrySearch, setCountrySearch] = useState('Russian Federation')

	const { searchUniversity } = useApiUniversity(countrySearch)

	useEffect(() => {
		const getUniversity = async () => {
			const res = await searchUniversity()
			setUniversities(res.data)
		}

		getUniversity()
	}, [countrySearch])

	const handleCountrySearchChange = useCallback(event => {
		setCountrySearch(event.target.value)
	}, [])

	return {
		handleCountrySearchChange,
		universities,
		countrySearch
	}
}

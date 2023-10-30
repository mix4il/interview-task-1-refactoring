import { useCallback, useEffect, useState } from 'react'
import { HttpService } from '../services/http/http'

export const useApiUniversity = (countrySearch, page, limit) => {
	const searchUniversity = useCallback(async () => {
		try {
			return HttpService.get('search', {
				country: countrySearch,
				page,
				limit
			})
		} catch (e) {
			console.error(e)
		}
	}, [countrySearch, page, limit])

	return {
		searchUniversity
	}
}

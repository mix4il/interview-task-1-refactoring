import React, { useMemo } from 'react'
import styles from './Pagination.module.scss'

export const Pagination = ({ totalItems, itemsPerPage, activePage, onPageChange }) => {
	const totalPages = useMemo(() => {
		return Math.ceil(totalItems / itemsPerPage)
	}, [totalItems, itemsPerPage])

	const pageNumbers = useMemo(() => {
		const resultPages = []
		for (let i = 1; i <= totalPages; i++) {
			resultPages.push(i)
		}
		return resultPages
	}, [totalPages])

	return (
		<div className={styles.pagination__list}>
			{pageNumbers.map(number => (
				<button
					key={number}
					onClick={() => onPageChange(number)}
					className={number === activePage ? styles.pagination__item_active : styles.pagination__item}
				>
					{number}
				</button>
			))}
		</div>
	)
}

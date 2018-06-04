// src/reducers/board.test.js

import { searchForContact } from './functions'

describe('searchForContact', () => {
	const companies = [
		{
			id: 1,
			users: [
				{
					id: 1,
					firstName: 'Safidy',
					lastName: 'Ratsimbazafy'
				},
				{
					id: 3,
					firstName: 'Safidy',
					lastName: 'Rats'
				},
				{
					id: 4,
					firstName: 'Bianca',
					lastName: 'Steyn'
				}
			]
		},
		{
			id: 2,
			users: [
				{
					id: 2,
					firstName: 'Safidy',
					lastName: 'Ratsimbazafy'
				},
				{
					id: 5,
					firstName: 'Julia',
					lastName: 'Schneider'
				},
				{
					id: 6,
					firstName: 'Bianca',
					lastName: 'Steyn'
				}
			]
		}
	]

	const companiesResult = [
		{
			id: 1,
			users: [
				{
					id: 1,
					firstName: 'Safidy',
					lastName: 'Ratsimbazafy'
				},
				{
					id: 3,
					firstName: 'Safidy',
					lastName: 'Rats'
				}
			]
		},
		{
			id: 2,
			users: [
				{
					id: 2,
					firstName: 'Safidy',
					lastName: 'Ratsimbazafy'
				}
			]
		}
	]

	it('returns the const companiesResult if seaching for Safidy', () => {
		expect(searchForContact(companies, 'Safidy')).toEqual(companiesResult)
	})
})

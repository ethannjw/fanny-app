import axios from 'axios'

export { login } from './login'

export const getClues = () => {
	const token = localStorage.getItem("sessionToken").replace(/"/g,"")
	return axios.get("http://localhost:3000/v1/clues" , {
		headers: {
			Authorization: `Bearer ${token}` 
		}
	})

}

export const createClue = (clue) => {
	const token = localStorage.getItem("sessionToken").replace(/"/g,"")
	return axios.post("http://localhost:3000/v1/clues" , 
		clue, 
		{
			headers: {
				Authorization: `Bearer ${token}` 
			},
		}
	)

}

export const modifyClue = (clueId, clue) => {
	const token = localStorage.getItem("sessionToken").replace(/"/g,"")
	return axios.patch("http://localhost:3000/v1/clues/" + clueId, 
		clue, 
		{
			headers: {
				Authorization: `Bearer ${token}` 
			},
		}
	)

}

export const deleteClue = (clueId) => {
	const token = localStorage.getItem("sessionToken").replace(/"/g,"")
	return axios.delete("http://localhost:3000/v1/clues/" + clueId, 
		{
			headers: {
				Authorization: `Bearer ${token}` 
			},
		}
	)

}
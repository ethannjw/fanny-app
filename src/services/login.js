import axios from 'axios'

export const login = (email, password) => {
    return axios.post("http://localhost:3000/v1/auth/login" , {
				email,
				password
		})
}
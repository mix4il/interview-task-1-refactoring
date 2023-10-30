import axios from 'axios'

class HTTPService {
	client = axios.create({
		baseURL: process.env.REACT_APP_API_URL
	})

	get(url, params, config) {
		return this.client.get(url, { params, ...config }).catch(err => console.error(err))
	}
}

export const HttpService = new HTTPService()

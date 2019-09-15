import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 67def1b4a6f5271cf6f279fec1034f4f6b719587c09abd8f88ce91dc421e05ee'
	}
})
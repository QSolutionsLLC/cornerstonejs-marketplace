import axios from 'axios'

const API_BASE = 'https://f0yz2zh64h.execute-api.us-east-2.amazonaws.com/demo/';

const plugins = {
  getList: () => axios.get(`${API_BASE}/plugins`),
  getBySlug: (slug) => axios.get(`${API_BASE}/plugins/${slug}`)
}

export default {
  plugins
}
import axios from 'axios'

const AWS_BUCKET = 'csmarket-listing-assets';
const API_BASE = 'https://f0yz2zh64h.execute-api.us-east-2.amazonaws.com/demo';
const AWS_ASSET_BASE = `https://s3.us-east-2.amazonaws.com/${AWS_BUCKET}`;

const plugins = {
  getList: () => axios.get(`${API_BASE}/plugins`),
  getBySlug: (slug) => axios.get(`${API_BASE}/plugins/${slug}`),
  getDetailContent: (repositoryFullName) => axios.get(`${AWS_ASSET_BASE}/${repositoryFullName}/index.html`)
}

export default {
  plugins
}
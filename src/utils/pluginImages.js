const AWS_BUCKET = 'csmarket-listing-assets';

export default {
  getListing: (repositoryFullName) => `https://s3.us-east-2.amazonaws.com/${AWS_BUCKET}/${repositoryFullName}/listing.png`
}
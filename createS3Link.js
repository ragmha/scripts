/**
 * Creates a link to an object stored in s3 amazon service
 *
 * @see {@link https://aws.amazon.com/s3/} for more information
 * @param {Object} opts - Parameters to create the link
 * @param {string} opts.name - The bucket name where the object is
 * @param {string} opts.region - The region where the bucket was created
 * @param {string} opts.id - The id of the object in the bucket
 * @return {string}
 */
const createS3Link = opts => {
  opts = opts || {};
  const { name, region, id } = opts;

  if (!name || !id || !region) {
    throw new Error('It needs the following properties: id, name, region');
  }

  return `https://s3-${region}.amazonaws.com/${name}/${opts.id}`;
};

module.exports = createS3Link;

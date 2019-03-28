import DRACOEncoder from './draco-encoder';

function encodeSync(data, options) {
  const dracoEncoder = new DRACOEncoder();
  dracoEncoder.setOptions(options);

  return options.pointcloud
    ? dracoEncoder.encodePointCloud(data, options)
    : dracoEncoder.encodeMesh(data, options);
}

export default {
  name: 'DRACO',
  extension: 'drc',
  encodeSync,
  options: {
    pointcloud: false // Set to true if pointcloud (mode: 0, no indices)
  }
};

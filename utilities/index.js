import uuid from 'uuid';
import mime from 'mime';
import Promise from 'bluebird';

export const groupBy = (xs, key, flag) => {
  const group = xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  // const out = [{ service: '1', providers: [] }];
  if (!flag) return group;
  const keys = Object.keys(group);
  const out = [];
  for (let index = 0; index < keys.length; ++index) {
    out.push({ service: keys[index], providers: group[keys[index]] });
  }
  return out;
};

export const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
};
const fs = Promise.promisifyAll(require('fs'));

export const accessFile = async path => {
  try {
    await fs.accessAsync(path);
  } catch (e) {
    return false;
  }

  return true;
};

export const generateFileId = mimetype => `${uuid.v4()}.${mime.getExtension(mimetype)}`;

import { normalize, schema } from 'normalizr';

const list = new schema.Entity('list');

export default (data) => normalize(data, [list])

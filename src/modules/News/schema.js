
import { normalize, schema } from 'normalizr';

const news = new schema.Entity('news');

export default (data) => normalize(data, [news])

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const key_schema = new Schema({
  name: String,
});

export default mongoose.model('keys', key_schema);
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  patientId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function (params: string | Date) {
        return new Date(params);
      },
      message: 'Incorrect birthday'
    }
  },
  diagnosis: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
});

export default mongoose.model('visits', schema);
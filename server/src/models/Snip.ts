import mongoose from 'mongoose';

const Snip = new mongoose.Schema(
  {
    id: { type: String, required: true },
    url: { type: String, required: true },
    expireAt: {
      type: Date,
      default: new Date(Date.now() + 2.62974383e9).toISOString(),
    },
  },
  { timestamps: true }
);

export default mongoose.model('Snip', Snip);
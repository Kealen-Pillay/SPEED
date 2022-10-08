const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  journalName: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  pages: {
    type: String,
    required: true,
  },
  doi: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
  claim: {
    type: String,
    required: true,
  },
  researchType: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  credible: {
    type: String,
    required: false,
  },
  approvalStatus: {
    type: String,
    required: false,
  },
  relevancyStatus: {
    type: String,
    required: false,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);

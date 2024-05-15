import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
    quote: {type:String},
    by: {type : mongoose.Schema.Types.ObjectId,required:true},
});

const QuoteModel = mongoose.model('Quote', QuoteSchema);
export default QuoteModel;
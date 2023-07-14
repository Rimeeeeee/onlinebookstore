const express=require('express');
const router=express.Router();
const{getBook,getAllBooks,createBook,deleteBook,updateBook}=require('../controller/lib');
router.route('/').get(getAllBooks).post(createBook);
router.route('/search').get(getBook);
router.route('/:id').patch(updateBook).delete(deleteBook);
module.exports=router;
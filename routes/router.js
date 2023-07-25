const express=require('express')
const router =express.Router()

const {createBooks ,updateBook, deleteBook ,getBooksById ,getAllBooks, searchBooks} =require('../controllers/booksControlers')


router.post("/" ,createBooks)
router.get("/book/:id",getBooksById)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)
router.route("/").get(getAllBooks)
router.route("/search").get(searchBooks)


module.exports=router;
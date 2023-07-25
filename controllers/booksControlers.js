const Books=require('../models/booksModal')
const asyncHandler=require('express-async-handler')



const createBooks = asyncHandler(async( req,res)=>{

    if(!req.body.title || !req.body.author ){
        res.status(400)
        throw new Error('please add fields')
     }
     const books = await Books.create(
        {
            title:req.body.title,
            author:req.body.author,
            description:req.body.description,
            publicationyear:req.body.publicationyear

        })
        res.status(200).json(books)
    


})


const getBooksById =asyncHandler(async (req,res)=>{
    const books = await Books.findById(req.params.id )
    if(books._id == req.params.id){
        
        res.status(200).json(books)
    }
    else{
        res.status(401)
        throw new Error('id doest match')
    }
    
    })


    const updateBook =asyncHandler(async (req,res)=>{
        const book = await Books.findById(req.params.id)
    
        if(!book){
            res.status(400)
            throw new Error('book not found')  
        }
       
    
    
    const updateaction= await Books.findByIdAndUpdate(req.params.id, req.body ,{new :true})
    res.status(200).json(updateaction)
    
    })

    const deleteBook =asyncHandler(async (req,res)=>{
        const book = await Books.findById(req.params.id)
    
        if(!book){
            res.status(400)
            throw new Error('book not found')  
        }
       
    
    
        await book.deleteOne()
        res.status(200).json({ id: req.params.id })

    
    })
    

    const getAllBooks =asyncHandler(async (req,res)=>{
        const books = await Books.find().limit(10)
        res.status(200).json(books)
        
        })

        const searchBooks = asyncHandler(async(req, res) => {
            const keyword = req.query
            ? {
                $or: [
                  { title: { $regex: req.query.search, $options: "i" } },
                  { author: { $regex: req.query.search, $options: "i" } },
                  { description: { $regex: req.query.search, $options: "i" } },
                ],
              }
            : {};
        
            const books = await Books.find(keyword)
            res.send(books);
          });

module.exports={
    createBooks,
    getBooksById,
    updateBook,
    deleteBook,
    getAllBooks,
    searchBooks
}
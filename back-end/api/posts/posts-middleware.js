


const checkTags = ( req, res, next ) => {
  const  { tag }  = req
  console.log(req)

  if(!tag) {
    res.status(400).json( {"error": "Tags parameter is required"} )
  }
  else{
    next()
  }
};

module.exports ={
  checkTags
}
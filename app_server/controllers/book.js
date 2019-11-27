var booksArray=[
    {
    name:"Hamlet",genre:"Drama",author:"William Shakespeare"
  },
  {
    name:"The Notebook",genre:"Love Story",author:"Nicholas Sparks"
  },
    {
      name:"Pride and Prejudice",genre:"Love Story",author:"Jane Austen"  
    },
    {
      name:"David Copperfield",genre:"Fiction",author:"Charles Dickens"  
    },
  {
  name:"The Unknown",genre:"Horror",author:"Patrick K. O'Donnell"
  }];
  
  const book = function(req, res){
      res.render('list-display', { books: booksArray });
    };
    
  
  
  
    
  
  
    module.exports = {
        book    
    };
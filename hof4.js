const books =[
    {title:'book1',aurthor:'aditya jain',year:'2011'},
    {title:'book2',aurthor:'akshay jain',year:'2015'},
    {title:'book3',aurthor:'anurag singh',year:'2010'},
    {title:'book4',aurthor:'ankur gupta',year:'2005'},
    {title:'book5',aurthor:'om jain',year:'2009'},
    {title:'book6',aurthor:'aman jain',year:'2020'},
    {title:'book7',aurthor:'ms jain',year:'2007'}
];

const bookcontainer=books.filter(book=>book.year>=2010)
.map(book=>{
    return{
   title:book.title,
   aurthor:book.aurthor.toUpperCase(),
   year:book.year
    };
});
console.log(bookcontainer);
let urlPattern =/^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._]+[.][a-zA-Z]+$/;
let user= "https://www.example.com";//assign valid or invalid Url for testing

if (urlPattern.test(user)) {
    console.log("Input matches the URL pattern.");
}else{
    console.log("Input does not macth the URL pattern");
}


//some example 

// Matches:

"http://example.com"
"https://www.example.com"
"https://subdomain.example.co.uk"

// Does not match:

"ftp://example.com"
"example.com"
"http://"
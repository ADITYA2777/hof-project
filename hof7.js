function linkedinvalidation(url) {
    let pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9-_]{5,30}[a-zA-Z0-9]$/


    if (pattern.test(url)) {
        console.log('valid linkedin profile url');
    }else{
        console.log('invalid linkedin profile url');
    }
}

linkedinvalidation("ht://www.linkedin.com/in/jane_doe123");
linkedinvalidation("https://www.linkedin.com/in/invalid-url");
linkedinvalidation("https://www.linkedin.com/in/invalid-url");

let delay = 3;
for(let i = delay;i>0;i--){
    setTimeout(() => {
        console.log(`time remaning: ${i} second(s)`);
    },(delay -1) * 1000 );
}

setTimeout(() => {
    let randomNumber = Math.random();
    console.log(`random number:${randomNumber}`);
}, delay*1000);



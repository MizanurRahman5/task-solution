function displayMassag2(){
    const setIntervall = setInterval(() => {
        console.log('massage 2')
    }, 2000);

    setTimeout(() => {
        clearInterval(setIntervall)
    }, 10000);
}
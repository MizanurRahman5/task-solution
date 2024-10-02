const displayMassage = async() => {
    const res = await fetch('https://v2.jokeapi.dev/joke/programming?type=single')
    const data = await res.json();
    console.log(data.joke)
}
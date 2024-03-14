const form = document.getElementById('form');
const submit = document.getElementById('submit');
const url = document.getElementById('url');
submit.addEventListener('click', async (e) => {
    console.log("event")
    e.preventDefault();
    const url = document.getElementById('url').value;
    // cors issue
    

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await res.json();
    console.log(data);
    document.getElementById('short-url').innerHTML = data.url;
    window.location.replace(data.url);
});
const My_STATUS_URL = "https://gameinfo-sgp.albiononline.com/api/gameinfo/players/qJkHQXYsQI-_H71DF0Qw0Q"


async function fetchAPI() {
    const headers = { "Content-Type": "application/json" };


    const res = await fetch(My_STATUS_URL, {
        headers,
        method: "GET",
    })
    return res.json();
}


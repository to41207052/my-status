
export async function getMainHand(){
    const data = await fetchAPI();
    console.log(data)
    return data;
    }

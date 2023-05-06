export const getVynils = async () => {
    try {
        let vynils = []
        const importData = await fetch("../src/data/data.json");
        const data = await importData.json();
        data.forEach(item => {
            vynils.push(
                {id: item.id,
                name: item.name, 
                price: item.price, 
                artist: item.artist, 
                state: item.state, 
                discs: item.discs, 
                description: item.description, 
                picture: item.picture}
            )
        })
        return vynils
    } catch(error) {
        console.log(error);
    }
}
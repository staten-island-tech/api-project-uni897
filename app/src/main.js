import './style.css'

///api/v1/convert?api_key=hXa8noH6212PYfVLSPB32jVH3zAvGcGB&from=USD&to=EUR&amount=600000
const apiKey = "hXa8noH6212PYfVLSPB32jVH3zAvGcGB"
async function getData(params) {
    try{
        
        //get data from api
        const response = await fetch(`/api/v1/latest?api_key=${apiKey}`)
        if(response.status != 200){
            throw new Error(response)
        }else{
            //converts response into json we can use
            const data = await response.json()
            console.log(data)
            return data
        }
    }catch(error){
        console.log(error)
    }
}
function addOption(data){
    Object.entries(data.rates).forEach(([name, rate]) => {
        console.log(name, rate)
    });
}

async function main(){
    const data = await getData()
    addOption(data)
}

main()


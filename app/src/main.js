import './style.css'

const apiKey = "hXa8noH6212PYfVLSPB32jVH3zAvGcGB"
async function getData(params) {
    try{
        
        //get data from api
        const response = await fetch(`https://api.currencyscoop.com/v1/latest?api_key=${apiKey}`)
        if(response.status != 200){
            throw new Error(response)
        }else{
            //converts response into json we can use
            const data = await response.json()
            console.log("success")
            console.log(data)
        }
    }catch(error){
        console.log(error + " Grrrr")
    }
}
getData()
//https://api.currencyscoop.com/v1/convert?api_key=hXa8noH6212PYfVLSPB32jVH3zAvGcGB&from=USD&to=EUR&amount=600000
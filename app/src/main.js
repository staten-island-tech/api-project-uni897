import './style.css'

///api/v1/convert?api_key=hXa8noH6212PYfVLSPB32jVH3zAvGcGB&from=USD&to=EUR&amount=600000
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
            return data
        }
    }catch(error){
        console.log(error)
    }
}
function addOption(data){
    const select1 = document.getElementById("select1")
    const select2 = document.getElementById("select2")
    Object.entries(data.rates).forEach(([name, rate]) => {
        const option = document.createElement("option");
        option.text = name;
        select1.add(option);
        const option2 = document.createElement("option");
        option2.text = name;
        select2.add(option2);
    });
}

async function main(){
    const data = await getData()
    addOption(data)
}

async function convert(){
    const current = document.getElementById("current")
    const converted = document.getElementById("converted")
    const select1 = document.getElementById("select1")
    const select2 = document.getElementById("select2")
    try{
        //get data from api
        const response = await fetch(`/api/v1/convert?api_key=${apiKey}&from=${select1.value}&to=${select2.value}&amount=${current.value}`)
        if(response.status != 200){
            throw new Error(response)
        }else{
            //converts response into json we can use
            const data = await response.json()
            converted.textContent = `Amount: ${Number(current.value).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${select1.value} = ${Number(data.response.value).toLocaleString('en-US',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${select2.value}` 
            console.log(data)
        }
    }catch(error){
        converted.textContent = "Please select a currency or select an amount"
    }
}

function switcharoo(){
    let select1 = document.getElementById("select1")
    let select2 = document.getElementById("select2")
    let temp = select1.value
    select1.value = select2.value
    select2.value = temp
}

main()

document.getElementById("button").addEventListener("click", () => convert())
document.getElementById("switch").addEventListener("click", () => switcharoo())

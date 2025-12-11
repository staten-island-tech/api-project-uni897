import './style.css'

async function getData(params) {
    try{
        //get data from api
        const response = await fetch(``)
        if(response.status != 200){
            throw new Error(response)
        }else{
            //converts response into json we can use
            const data = await response.json()
            console.log(data)
        }
    }catch(error){
        console.log(error)
    }
}
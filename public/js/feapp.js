console.log('Client side java script file is loading')



const weatherForm = document.querySelector("#weatherForm")
const address = document.querySelector("#address")
const resultBox = document.querySelector("#resultBox") 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(address.value){
        fetch("http://localhost:3000/location?address="+address.value).then((response) => {

            response.json().then((data) => {
        
                if(data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                    resultBox.textContent = data.place_name
                }
                
            })
        
        })
    }
})
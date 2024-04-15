const dictionary =(word)=>{
    const url = 'https://api.api-ninjas.com/v1/dictionary?word='+word;
const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': 'H9qXe7C1cLwHh1YQE/gWHA==9wmGT2XIHnu5rpi7'
	},
    query:{
        'word' :word
    }
};

fetch(url,options)
    .then(response =>response.json())
    .then((response) =>{
        
        console.log(response)
        wordhead.innerHTML=response.word;
        definition.innerHTML=response.definition;
    })
    .catch(err=>console.error(err))
}

searchbtn.addEventListener("click", (e)=>{
e.preventDefault();
dictionary(searchinput.value)
})

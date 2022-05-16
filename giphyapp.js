console.log("Let's get this party started!");
const form=document.querySelector('#searchform');
const submit=document.querySelector('#submit');
const div=document.querySelector('#Gifts');


form.addEventListener('submit', async function(e){
    e.preventDefault();

    const input=document.querySelector('#search');
    // input.value="";
    
    const res= await axios.get('http://api.giphy.com/v1/gifs/search',{
        params: {
          q: input.value,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });

    makeGiphy(res.data);
})    


function makeGiphy(res){
let numResults = res.data.length;
let randomIdx = Math.floor(Math.random() * numResults);
newimg=document.createElement('img');
newimg.src=res.data[randomIdx].images.original.url,
div.append(newimg);
return div;
 
}
const btn=document.querySelector('#btn');
btn.addEventListener('click',function(e){
  div.innerHTML="";
})


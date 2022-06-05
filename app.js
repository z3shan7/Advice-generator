const adviceId = document.getElementById('advice-id');
const adviceText = document.querySelector('.advice-text');
const adviceBtn = document.querySelector('.diceImg');
const loading = document.querySelector('.loading');

const URL = 'https://api.adviceslip.com/advice';

const showLoading = () => {
    loading.classList.remove('hide-loading')  
    adviceText.classList.add('hide-advice') 
}
const hideLoading = () =>{
    loading.classList.add('hide-loading')   
    adviceText.classList.remove('hide-advice') 

}
const getAdvice = async () =>{
    showLoading()
    try{
        const response = await fetch(URL)
        const result = await response.json()
        const {slip} = result
        adviceId.innerHTML =`<h4 class="advice-id" id="advice-id">Advice # ${slip.id}</h4>`
        adviceText.innerHTML = `<p class="advice-text">"${slip.advice}"</p>`
        hideLoading()
    } catch{
        console.log(Error);
    }

}
adviceBtn.addEventListener('click',getAdvice) ;
window.addEventListener('DOMContentLoaded',getAdvice);
    



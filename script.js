let numberBtn = document.querySelectorAll(".rate");
let rating = 1;

// Number Rating Buttons

numberBtn.forEach((number)=>{

    number.addEventListener('click', (e)=>{

        let item = e.target;

        if (item.classList.contains('rate')){

            rating = item.id;

            let otherRatings = item.parentElement.children;
            for (let i = 0; i < otherRatings.length; i++) {
        
                otherRatings[i].classList.remove('selected');
                // console.log(otherRatings[i]);
            }

            item.classList.add('selected');
            // console.log(rating);
        }
    })
    
})

// submit button
let submitBtn = document.querySelector(".submit-btn button");
submitBtn.addEventListener('click', ()=>{
    let mainCard = document.querySelector(".main-container");
    let thankCard = document.querySelector(".thank-you-card");
    let thankValue = document.querySelector('.thank-you-text span')
    mainCard.style.display = 'none';
    thankCard.style.display = 'flex';;
    thankValue.innerHTML = `You selected ${rating} out of 5`

})
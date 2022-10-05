window.onload=function(){
    let subscribeContainer = document.getElementById('subscribe-container');
    let popupContainer = document.getElementById('popup-container');
    let subscribeBtn = document.getElementById('subscribe-btn');
    let continueBtn = document.getElementById('continue-btn');
    let closeBtn = document.getElementById('close');

                subscribeBtn.addEventListener('click',function(){
                    popupContainer.style.display='flex';
                    subscribeContainer.style.display='none';
                })

                continueBtn.addEventListener('click',function(){
                    subscribeContainer.style.display='flex';
                    popupContainer.style.display='none';
                })
                
closeBtn.addEventListener('click',function(){
                    subscribeContainer.style.display='flex';
                    popupContainer.style.display='none';
                })
            }

//             UI CREDIT 
            
// Dheerendra Kushwaha
// https://www.sololearn.com/profile/16949282
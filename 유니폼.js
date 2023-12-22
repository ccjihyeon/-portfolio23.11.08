 const uniformModal = document.getElementById('modal-uniform')
  const modalImg = document.getElementById('uniform-img');
  const buttons = document.getElementsByClassName('uniform-button');

  const images = {
    'fd-black': 'img/유니폼검정.png',
    'fd-white': 'img/유니폼녹색.png',
    'fd-red': 'img/유니폼빨강.png',
    'gk-black': 'img/키퍼유니폼검정.png',
    'gk-green':'img/키퍼유니폼녹색.png',
    'gk-blue':'img/키퍼유니폼파랑.png'
  };


  for(let i = 0 ; i < buttons.length ; i ++) {

      buttons[i].addEventListener('click', ()=>{
          const key = buttons[i].getAttribute('key');
          uniformModal.style.display = 'flex';
          
          modalImg.src = images[key];
        })
    }



  uniformModal.addEventListener('click', function () {
    uniformModal.style.display = 'none';
  });

 

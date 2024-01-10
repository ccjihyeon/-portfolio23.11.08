const playersData = [
    { number: 17, name: "김진이", birthdate: "1993.06", position: "LB", height: 180, weight: 83, joinDate: "2021.1.1",affiliation:"경남개발공사"},
    { number: 19, name: "김다영", birthdate: "1996.09", position: "LB", height: 170, weight: 56, joinDate: "2020.12.1",affiliation:"소니(일본)"},
    { number: 9, name: "정가희", birthdate: "1997.08", position: "LW", height: 155, weight: 49, joinDate: "2016.1.1",affiliation:"인천비즈니스고"},
    { number: 10, name: "송해리", birthdate: "1997.10.", position: "PV", height: 173, weight: 68, joinDate: "2021.8.1",affiliation:"인천시청"},
    { number: 7, name: "신진미", birthdate: "1998.06", position: "CB", height: 167, weight: 60, joinDate: "2021.1.1",affiliation:"한국체육대학교"},
    { number: 86, name: "김수연", birthdate: "1998.06", position: "GK", height: 182, weight: 70, joinDate: "2023.3.1",affiliation:"SK슈글즈"},
    { number: 88, name: "최유나", birthdate: "2001.07", position: "GK", height: 180, weight: 75, joinDate: "2024.1.1",affiliation:"한국체육대학교"},
    { number: 91, name: "이지우", birthdate: "2001.07", position: "PV", height: 178, weight: 73, joinDate: "2023.11.1",affiliation:"경남개발공사"},
    { number: 77, name: "박시연", birthdate: "2001.10", position: "RW", height: 169, weight: 73, joinDate: "2020.1.1",affiliation:"경남체고"},
    { number: 16, name: "이주현", birthdate: "2003.02", position: "GK", height: 174, weight: 75, joinDate: "2022.1.1",affiliation:"의정부여고"},
    { number: 39, name: "이혜원", birthdate: "2004.05", position: "LB", height: 169, weight: 68, joinDate: "2024.1.1",affiliation:"대구시청"},
    { number: 14, name: "황수미", birthdate: "2004.05", position: "RB", height: 178, weight: 64, joinDate: "2024.1.1",affiliation:"정읍여고"},
    { number: 96, name: "조아나", birthdate: "1996.07", position: "RB", height: 183, weight: 76, joinDate: "2024.1.1",affiliation:""},
    { number: 99, name: "알리나", birthdate: "1997.08", position: "LB", height: 183, weight: 78, joinDate: "2024.1.1",affiliation:""}  
  ];

  const playersByName = {};
  playersData.forEach(player => {
      playersByName[player.name] = player;
  });

  const players = document.querySelectorAll('.player-profile');
  const modal = document.getElementById('playerModal');
  const modalImage = document.getElementById('modalPlayerImage');

players.forEach(player => {
    player.addEventListener('click', () => {
        const playerName = player.getAttribute('data-name');
        const playerInfo = playersByName[playerName];

        // 모달 창 내용 채우기
        const modalText = document.querySelector('.sup-text');
        modalText.innerHTML = `
            <div class="position-name">
                <p class="position">${playerInfo.position}</p>
                <div class="number-name">
                    <p class="red-number">${playerInfo.number}</p>
                    <p class="bold">${playerInfo.name}</p>
                </div>
            </div>
            <div class="detail">
                <div class="personal">
                    <p class="bold">생년월일</p>
                    <p>${playerInfo.birthdate}</p>
                </div>
                <div class="personal">
                    <p class="bold">신장/체중</p>
                    <p>${playerInfo.height}cm/${playerInfo.weight}kg</p>
                </div>
                <div class="personal">
                    <p class="bold">입단일</p>
                    <p>${playerInfo.joinDate}</p>
                </div>
                <div class="personal">
                <p class="bold">전 소속팀</p>
                <p>${playerInfo.affiliation}</p>
            </div>
            </div>
        `;

        // 이미지 설정
        
        modalImage.src = `img/${playerInfo.name}.png`;

        // 모달 창 보이기
        
        modal.style.display = 'flex';
    });
});


window.addEventListener('click',(e)=>{
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})
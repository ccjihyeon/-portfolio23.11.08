const playersData = [
    { number: 23, name: "이미경", birthdate: "1991.10", position: "CB", height: 165, weight: 55, joinDate: "2022.5.1",affiliation:"오므론(일본)"},
    { number: 27, name: "조하랑", birthdate: "1991.07", position: "LW", height: 168, weight: 65, joinDate: "2022.2.1",affiliation:"대구시청"},
    { number: 17, name: "김진이", birthdate: "1993.06", position: "LB", height: 180, weight: 83, joinDate: "2021.1.1",affiliation:"경남개발공사"},
    { number: 11, name: "이한솔", birthdate: "1995.08", position: "PV", height: 180, weight: 80, joinDate: "2023.3.1",affiliation:"SK슈글즈"},
    { number: 3, name: "함지선", birthdate: "1996.04", position: "RW", height: 158, weight: 52, joinDate: "2017.1.1",affiliation:"광주도시공사"},
    { number: 19, name: "김다영", birthdate: "1996.09", position: "LB", height: 170, weight: 56, joinDate: "2020.12.1",affiliation:"소니(일본)"},
    { number: 9, name: "정가희", birthdate: "1997.08", position: "LW", height: 155, weight: 49, joinDate: "2016.1.1",affiliation:"인천비즈니스고"},
    { number: 10, name: "송해리", birthdate: "1997.10.", position: "PV", height: 173, weight: 68, joinDate: "2021.8.1",affiliation:"인천시청"},
    { number: 7, name: "신진미", birthdate: "1998.06", position: "CB", height: 167, weight: 60, joinDate: "2021.1.1",affiliation:"한국체육대학교"},
    { number: 86, name: "김수연", birthdate: "1998.06", position: "GK", height: 182, weight: 70, joinDate: "2023.3.1",affiliation:"SK슈글즈"},
    { number: 77, name: "박시연", birthdate: "2001.10", position: "RW", height: 169, weight: 73, joinDate: "2020.1.1",affiliation:"경남체고"},
    { number: 20, name: "지은혜", birthdate: "2003.02", position: "RB", height: 167, weight: 62, joinDate: "2022.1.1",affiliation:"황지정산고"},
    { number: 16, name: "이주현", birthdate: "2003.02", position: "GK", height: 174, weight: 75, joinDate: "2022.1.1",affiliation:"의정부여고"},
    { number: 13, name: "홍주예", birthdate: "2004.02", position: "LW", height: 172, weight: 54, joinDate: "2023.1.1",affiliation:"경남체고"}
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
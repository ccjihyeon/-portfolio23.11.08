const playersData = [
    { number: 23, name: "이미경", birthdate: "1991.10", position: "CB", height: 165, weight: 55, joinDate: "2022.5.1"},
    { number: 27, name: "조하랑", birthdate: "1991.07", position: "LW", height: 168, weight: 65, joinDate: "2022.2.1"},
    { number: 17, name: "김진이", birthdate: "1993.06", position: "LB", height: 180, weight: 83, joinDate: "2021.1.1"},
    { number: 11, name: "이한솔", birthdate: "1995.08", position: "PV", height: 180, weight: 80, joinDate: "2023.3.1"},
    { number: 03, name: "함지선", birthdate: "1996.04", position: "RW", height: 158, weight: 52, joinDate: "2017.1.1"},
    { number: 19, name: "김다영", birthdate: "1996.09", position: "LB", height: 170, weight: 56, joinDate: "2020.12.1"},
    { number: 09, name: "정가희", birthdate: "1997.08", position: "LW", height: 155, weight: 49, joinDate: "2016.1.1"},
    { number: 10, name: "송해리", birthdate: "1997.10.", position: "PV", height: 173, weight: 68, joinDate: "2021.8.1"},
    { number: 07, name: "신진미", birthdate: "1998.06", position: "CB", height: 167, weight: 60, joinDate: "2021.1.1"},
    { number: 86, name: "김수연", birthdate: "1998.06", position: "GK", height: 182, weight: 70, joinDate: "2023.3.1"},
    { number: 77, name: "박시연", birthdate: "2001.10", position: "RW", height: 169, weight: 73, joinDate: "2020.1.1"},
    { number: 20, name: "지은혜", birthdate: "2003.02", position: "RB", height: 167, weight: 62, joinDate: "2022.1.1"},
    { number: 16, name: "이주현", birthdate: "2003.02", position: "GK", height: 174, weight: 75, joinDate: "2022.1.1"},
    { number: 13, name: "홍주예", birthdate: "2004.02", position: "LW", height: 172, weight: 54, joinDate: "2023.1.1"}
  ];
  
  const playersByName = {};
  
  playersData.forEach(player => {
    playersByName[player.name] = player;
  });
  
  console.log(playersByName);
  const man = document.querySelector('.player-profile');
  console.log(man.getAttribute('data-name'))

  const name = man.getAttribute('data-name')
  console.log(name)
  console.log(playersByName[name])

//   const modalName = 모달창의 이름 가져오기
// modalName.innerText = playersByName[name].name
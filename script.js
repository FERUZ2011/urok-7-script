 const item1 = document.getElementById("info1")

 const massiveInfo1 = [["Active Users", "27/80"],
                       ["Questions Answered", "3,298"],
                       ["AV. Session Length", "2m 34s"],
                       ["Starting Knowledge", "64%"],
                       ["Current Knowledge", "86%"],
                       ["Knowledge Gain", "+34%"]
                      ]
item1.innerHTML = massiveInfo1.map((el) => `
                      <div class="info__item">
                        <h1>${el[0]}</h1>
                        <h6>${el[1]}</h6>
                      </div>
`).join("")


const massiveInfo2 = [
    ["Food Safety", "https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2025-03/Ultraprocessed%20foods%20display%202%20framed%20-%20shutterstock_2137640529_r.jpg?h=ab94ba44&itok=yrOIN-8T", 74],
    ["Compliance Basics Procedures", "https://img.freepik.com/premium-vector/medicine-logo-design-template_269830-1601.jpg?w=360", 52],
    ["Company Networking", "https://www.crn.com/news/networking/2024/media_1c3c0ee314b67a303151cb11be9d9063204be97ee.png?width=750&format=png&optimize=medium", 36]
];

const item2 = document.getElementById("info2");

item2.innerHTML = massiveInfo2.map(el => `
  <div class="info-item-columns">
    <img src="${el[1]}" class="info__item-img">
    <div class="products">
      <h1>${el[0]}</h1>
      <div class="progress">
        <div class="progress_info" style="width: ${el[2]}%;"></div>
      </div>
    </div>
     <h1>${el[2]}% Correct</h1>
  </div>
`).join("");

const massiveInfo3 = [
    ["Covid Protocols", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAZtvXcj-rgU7sFKbsj1MzldLy0GYNnks0w&s", 95],
    ["Cyber Security Basics", "https://www.skillcast.com/hubfs/cyberattack_1200x627.jpg", 92],
    ["Social Media Policies", "https://www.undp.org/sites/g/files/zskgke326/files/2023-08/undp-rbec-socialmedia-social-illustration-omer-sayed-2023-edited.jpg", 89]
];

const item3 = document.getElementById("info3");

item3.innerHTML = massiveInfo3.map(el => `
  <div class="info-item-columns">
    <img src="${el[1]}" class="info__item-img">
    <div class="products">
      <h1>${el[0]}</h1>
      <div class="progress">
        <div class="progress_info2" style="width: ${el[2]}%;"></div>
      </div>
    </div>
     <h1>${el[2]}% Correct</h1>
  </div>
`).join("");

const massiveInfo4 = [
           ["Jesse Thomas","https://i.pinimg.com/originals/c1/11/54/c11154a5126de308d35ccaf663a2eddc.jpg", "637 Points" ],
           ["Thisal Mathiyazhagan", "https://themost.com.tr/wp-content/uploads/2023/04/tm-men1_0001_TM-MEN3.jpg", "637 Points"],
           ["Helen Chuang", "https://cs8.pikabu.ru/post_img/big/2016/08/04/7/14703063251942913.jpg", "637 Points"],
           ["Lura Silverman", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YnoGQbjU8M0VYO3nEgy2IK6Q2Z47zMeXeQ&s", "637 Points"]
];

const item4 = document.getElementById("info4");

item4.innerHTML = massiveInfo4.map(el => `
  <div class="info__names">
    <img src="${el[1]}" class="info__names-image">
    <div class="names">
      <h1>${el[0]}</h1>
      <div class="answer">
        <h2>${el[2]}
      </div>
    </div>
  </div>
`).join("");

const massiveInfo5 = [
           ["Houston Facility", "52 Points" ],
           ["Test Group", "52 Points"],
           ["Sales Leadership", "52 Points"],
           ["Northeast Region", "52 Points"]
];

const item5 = document.getElementById("info5");

item5.innerHTML = massiveInfo5.map(el => `
  <div class="info__names">
    <div class="names">
      <h1>${el[0]}</h1>
      <div class="answer">
        <h2>${el[1]}
      </div>
    </div>
  </div>
`).join("");


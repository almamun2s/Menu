const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./img/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


const menuItems = document.querySelector('.am-menu-items');
const btns      = document.querySelectorAll('.am-fbtn');

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
});

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.dataset.cat);
        // console.log(btn.dataset.cat);
        const category = e.currentTarget.dataset.cat; // The categoty where user clicked
        const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        }else{
            displayMenuItems(menuCategory);
        }
        btns.forEach(function(btn){
            btn.classList.remove('am-selected');
        });
        
        this.classList.add('am-selected');
    });
});


function displayMenuItems(menuItem) {
    let displayMenu = menuItem.map(function( item ){
        // console.log(item);
        return `
    <div class="am-menu-item">
        <div class="am-m-item-left">
            <img src=${item.img} alt=${item.category}>
        </div>
        <div class="am-m-item-right">
            <div class="am-mi-right-top">
                <div class="am-mir-top-title">${item.title}</div>
                <div class="am-mir-top-price">$${item.price}</div>
            </div>
            <div class="am-mi-right-bottom">
                <p>${item.desc}</p>
            </div>
        </div>
    </div>
    `;
    });
    displayMenu = displayMenu.join('');
    menuItems.innerHTML = displayMenu;
}
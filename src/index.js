import "./styles.css";
import homeIcon from './assets/home-icon.png'
import aboutIcon from './assets/about-icon.png'
import contactIcon from './assets/contact-icon.png'
import gitIcon from './assets/git-icon.png';
import menuIcon from './assets/menu-icon.png'
export function CreateMenu() {
    const container= document.createElement('div');
    container.classList.add('menu-container');

    const hamburger = document.createElement('div');
    hamburger.textContent = 'menu';
    hamburger.innerHTML = `<img src =${menuIcon} class='icon'>`;
    hamburger.classList.add('hamburger-icon');
    container.appendChild(hamburger)





    const menulist = document.createElement('ul');
    menulist.classList.add('menu-list');

    var elem = []
    elem.push(createMenuItems('Home', homeIcon ));
    elem.push(createMenuItems('About', aboutIcon ))
    elem.push(createMenuItems('Connect', contactIcon ))
    elem.push(createMenuItems('Git', gitIcon))
    elem.forEach(el => {
        menulist.appendChild(el);
    });

    container.appendChild(menulist);


    hamburger.addEventListener('click', function(){
        menulist.classList.toggle('open-menulist');
        container.classList.toggle('open-container');
        // container.style.height = '100%';

        // menulist.style = 'display:flex; flex-direction:column;'
    })



    return container;
}

function createMenuItems(name, icon){
    
    const item = document.createElement('li');
    item.classList.add('menu-item');
    item.setAttribute('id', name)

    const itemdiv = document.createElement('div');
    itemdiv.classList.add('itemdiv');


    const front = document.createElement('div');
    front.classList.add('flip-front');


    const back = document.createElement('div');
    back.classList.add('flip-back');

    front.textContent = name;
    back.innerHTML = `<img src =${icon} class='icon'>`;
    
    itemdiv.appendChild(front);
    itemdiv.appendChild(back);
    item.appendChild(itemdiv)
    return item;
}

document.body.appendChild(CreateMenu());


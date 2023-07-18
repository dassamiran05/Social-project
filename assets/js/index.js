//Adding active class

const menuItems = document.querySelectorAll(".menu-item");

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !== "notifications"){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    })
})



//highlight message box

const messages = document.querySelector('.messages');
const notificatioMessage = document.querySelector('#message');

notificatioMessage.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    notificatioMessage.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})
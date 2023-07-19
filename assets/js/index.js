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
        if (item.id !== "notifications") {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = "none";
            setTimeout(() => {
                document.querySelector('.notifications-popup').style.display = 'none';
            }, 5000);
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
    }, 2000);
})

//Message for accpet and decline

const requests = document.querySelectorAll('.friend-requests .request');

requests.forEach((requst, idx) => {
    const accept = requst.querySelector("#accept");
    const decline = requst.querySelector("#decline");
    const reqmsg = requst.querySelector('#requst-msg');
    const action = requst.querySelector('.action');
    const info = requst.querySelector('.friend-requests .info');
    const friendrequsts = document.querySelector('.friend-requests');
    accept.addEventListener('click', () => {
        reqmsg.innerHTML = "Requested Accepted";
        action.style.display = "none";
        info.style.marginBottom = "0";
        setTimeout(() => {
            requst.style.display = "none";
            if (idx === requests.length - 1) {
                friendrequsts.style.display = "none";
            }
        }, 2000);
    })

    decline.addEventListener('click', () => {
        reqmsg.innerHTML = "Requested Declined";
        action.style.display = "none";
        info.style.marginBottom = "0";
        setTimeout(() => {
            requst.style.display = "none";
            if (idx === requests.length - 1) {
                friendrequsts.style.display = "none";
            }
        }, 2000);
    })



})
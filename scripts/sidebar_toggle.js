
function toggleSidebar() {
    "use strict";

    let sidebar = document.querySelector('.sidebar'), val = sidebar.style.visibility;
    let navbtn = document.getElementById('navbtn');
    if (val === 'hidden') {
        sidebar.style.visibility = 'visible';
        sidebar.style.height = '280px';
        navbtn.innerHTML = '<i class="fas fa-times" style="padding: 0 3px 0 3px;"></i>';
        
    } else {
        sidebar.style.height = '0';
        sidebar.style.visibility = 'hidden';
        navbtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
}
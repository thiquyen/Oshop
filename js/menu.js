// Lấy các phần tử từ DOM


// Xử lý sự kiện click cho phần tử Categories
document.addEventListener('DOMContentLoaded', function () {

    const iconClick = document.querySelector('#icon_click');
    const menu = document.querySelector('#menu');
    const iconClose = document.querySelector('#icon_close');
    const categoriesElement = document.querySelector('#categories');
    const mainMenuElement = document.querySelector('#mainMenu');
    const categoryInfoElement = document.querySelector('#categoriesContent');
    const mainMenuInfoElement = document.querySelector('#mainMenuContent');

    //sự kiện khi click vao iconclick
    iconClick.addEventListener('click', function () {
        menu.style.display = "block";
    });
    // sự kiện khi click vào icon close
    iconClose.addEventListener('click', function () {
        menu.style.display = "none";
    })
    window.addEventListener('click', function (event) {
        if (event.target === menu) {
            menu.style.display = 'none';
        }
    });

    categoriesElement.addEventListener('click', function () {
        // Hiển thị thông tin về Categories
        categoryInfoElement.style.display = 'flex';
        mainMenuInfoElement.style.display = 'none';
        categoriesElement.style.color='#888';
        mainMenuElement.style.color='black';
    });

    // Xử lý sự kiện click cho phần tử Main Menu
    mainMenuElement.addEventListener('click', function () {
        // Hiển thị thông tin về Main Menu
        categoryInfoElement.style.display = 'none';
        mainMenuInfoElement.style.display = 'flex';
        mainMenuElement.style.color='#888';
        categoriesElement.style.color='black';
    });

});
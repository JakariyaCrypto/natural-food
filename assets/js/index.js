const megaMenu = document.getElementById('click-shop'),
      megaContent = document.getElementById('mega-content'),
      megaIcon = document.getElementById('click-mega-icon')

     // mega menu active
    if(megaMenu){
        megaMenu.addEventListener('click', () => {
            megaContent.classList.toggle('active');
            megaIcon.classList.toggle('rotate');
        })
    }// mega menu active


      // vendors variable
      clickVendor = document.getElementById('click-vendor')
      dropDown1 = document.getElementById('drop1')
      vendorIcon = document.getElementById('vendor-icon')

    // vendor drop down active
    if(clickVendor){
        clickVendor.addEventListener('click', () => {
            dropDown1.classList.toggle('active');
            vendorIcon.classList.toggle('rotate');

        })
    }// vendor drop down active

    // pages variable
      clickPage = document.getElementById('click-page')
      dropDown2 = document.getElementById('drop2')
      pageIcon = document.getElementById('page-icon')

    // pages drop down active
    if(clickPage){
        clickPage.addEventListener('click', () => {
            dropDown2.classList.toggle('active');
            pageIcon.classList.toggle('rotate');

        })
    }// vendor drop down active

    // show mobile menu

    clickMenuIcon = document.getElementById('click-sidebar-icon')
    showSideBar = document.getElementById('mobile-menu') 

    // hidden side nav
    if(clickMenuIcon){
        clickMenuIcon.addEventListener('click', () => {
            showSideBar.classList.add('active');
        })
    } // show-mobile-menu


    // hide mobile menu
    hideSidebarIcon = document.getElementById('close-sidebar') 

    // hidden side nav
    if(hideSidebarIcon){
        hideSidebarIcon.addEventListener('click', () => {
            showSideBar.classList.remove('active')
        })
    } // hide mobile menu show-mobile-menu

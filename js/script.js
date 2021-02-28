let menuItems = {
    'Home': '/home',
    'Dashboard': '/dashboard',
    'Profile': '/profile',
    'Latest': '/latest',
    'Updates': '/updates',
    'News': '/news'
}

$('#sidebar').Sidebar({
    openTriggerId: 'openSidebar',
    header: 'Sidebar',
    items: menuItems,
    width: 150,
    sidebarColor: 'gray',
    closeButtonColor: 'black'
});
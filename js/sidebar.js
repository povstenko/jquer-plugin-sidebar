$.fn.Sidebar = function (options) {
    let settings = $.extend({
        openTriggerId: 'open',
        closeTriggerId: 'close',
        header: 'Header',
        items: ['item1', 'item2', 'item3', 'item4'],
        width: 100,
        backgroundColor: 'black', // color
        closeButtonColor: 'red',
        headerColor: 'blue',
        textColor: 'white',
        textAlign: 'left',
        sidebarClass: 'sidebar-menu', // class
        headerClass: 'sidebar-header',
        itemsClass: 'sidebar-item',
        closeButtonClass: 'sidebar-close',
        closeButtonIcon: '&times;' // close icon
    }, options);

    let sidebar = this;

    // Append Menu Close Button
    sidebar.append($('<a href="#" id="'+settings.closeTriggerId+'">').append(settings.closeButtonIcon).css({
        'text-decoration': 'none',
        'color': settings.closeButtonColor,
        'display': 'block',
        'position': 'absolute',
        'top': 0,
        'right': '25px',
        'font-size': '36px',
        'margin-left': '50px'
    }));
    //Append Menu Header
    sidebar.append($('<a href="#" class="'+settings.headerClass+'">').append(settings.header).css({
        'text-decoration': 'none',
        'color': settings.headerColor,
        'display': 'block'
    }));

    $.each(settings.items, function (i, item) {
        sidebar.append($('<a href="#" class="'+settings.itemsClass+'">').append(item).css({
            'text-decoration': 'none',
            'color': settings.textColor,
            'display': 'block',
            'transition': '0.3s'
        }));
    });

    sidebar.css({
        'margin-left': 0,
        'height': '100%',
        'width': 0,
        'position': 'fixed',
        'z-index': 1,
        'top': 0,
        'left' : 0,
        'background-color': settings.backgroundColor,
        'overflow-x': 'hidden',
        'padding-top': '60px',
        'transition': '0.5s',
        'text-align': settings.textAlign
    })

    sidebar.addClass(settings.sidebarClass);

    // Show/Open Sidebar
    $('#'+settings.openTriggerId).click(function () {
        sidebar.css({ 'width': settings.width+'px' });
    });
    $('#'+settings.closeTriggerId).click(function () {
        sidebar.css({ 'width': '0' });
    });
}
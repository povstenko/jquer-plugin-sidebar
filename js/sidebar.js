$.fn.Sidebar = function (options) {
    let settings = $.extend({
        header: 'Header',
        items: ['item1', 'item2', 'item3', 'item4'],
        side: 'left',
        backgroundColor: 'black',
        textColor: 'white',
        textAlign: 'left',
        sidebarClass: ''
    }, options);

    this.append('a');
}
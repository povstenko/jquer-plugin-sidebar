# Sidebar plugin

## Usage

Add at `index.html`:

```
<div id="sidebar"></div>
<button id="sidebar-open">Open Sidebar Menu</button>
```

```
<script src="https://cdn.jsdelivr.net/gh/povstenko/jquery-plugin-sidebar/js/sidebar.min.js"></script>
```

In `script.js`:

```
$('#sidebar').Sidebar();
```

### Settings

```
openTriggerId: 'sidebar-open',
closeTriggerId: 'sidebar-close',
header: 'Header',
headerRef: '#',
items: {
    'Item1': '#',
    'Item2': '#',
    'Item3': '#'},
width: 120,
sidebarColor: 'gray', // color
closeButtonColor: 'black',
headerColor: 'white',
textColor: 'white',
textAlign: 'left',
sidebarClass: 'sidebar-menu', // class
headerClass: 'sidebar-header',
itemsClass: 'sidebar-item',
closeButtonClass: 'sidebar-close',
closeButtonIcon: '&times;' // close icon
```

const items = [
    { name: 'Pickaxe', image: 'pickaxe.gif' },
    { name: 'Axe', image: 'axe.gif' },
    { name: 'Shovel', image: 'shovel.png' },
    { name: 'Sword', image: 'sword.gif' },
    { name: 'Hoe', image: 'hoe.gif' },
    { name: 'Stick', image: 'stick.gif' },
    { name: 'Bow', image: 'bow.gif' },
    { name: 'Arrow', image: 'arrow.gif' },
    { name: 'Andesite', image: 'Andesite.gif' },
    { name: 'Bucket', image: 'bucjet.gif' },
    { name: 'Chears', image: 'chears.gif' },
    { name: 'Cobblestone Slab', image: 'cobblestone slab.gif' },
    { name: 'Cobblestone Wall', image: 'cobblestone wall gif.gif' },
    { name: 'Compass', image: 'Compass.gif' },
    { name: 'Flint and Steel', image: 'flint and steel.gif' },
    { name: 'Furnace', image: 'furnace.gif' },
    { name: 'Minecart', image: 'minecart.gif' },
    { name: 'Moss cobblestone', image: 'moss cobblestone.gif' },
    { name: 'Polished Andesite', image: 'polished andesite.gif' },
    { name: 'Powered Rail', image: 'powered rail.gif' },
    { name: 'Rail', image: 'rail.gif' },
 
 
 
 
    // Add more items here
];

function displayItems(filteredItems) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <img class="item-image" src="${item.image}" alt="${item.name}">
            <p class="item-name">${item.name}</p>
        `;
        itemList.appendChild(div);
    });
}

function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    displayItems(filteredItems);
}

// Initial display of all items
displayItems(items);

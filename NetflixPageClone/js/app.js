const tabItems = document.querySelectorAll('.tab-item') // tab divs to click
const tabContentItems = document.querySelectorAll('.tab-content-item') // parts to show/hide

console.log(tabItems)
console.log(tabContentItems);


// select tab content item
function selectItem(e) {
    // remove borders from all tabs
    tabItems.forEach(item => item.classList.remove('tab-border'))
    // add border to clicked tab
    this.classList.add('tab-border')

    // remove .show class from all tabs
    tabContentItems.forEach(item => item.classList.remove('show'))

    // add .show class to corresponding tab content
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')

}



// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))

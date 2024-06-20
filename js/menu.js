let modal_nav_buttons = document.getElementById('modal_nav_buttons')
let opem_menu = document.getElementById('opem_menu')
let close_modal = document.getElementById('close_modal')

opem_menu.addEventListener('click', () => {
    modal_nav_buttons.style.display = 'flex'
})

close_modal.addEventListener('click', () => {
    modal_nav_buttons.style.display = 'none'
})

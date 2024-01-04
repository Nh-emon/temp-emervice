function get(element){return document.querySelector(element)}

//handle dashboard popup
const dashboard = get('#account-dashboard')
get('#dashboard-icon').addEventListener('click',()=>{
    dashboard.classList.remove('dis-hide')
    get('#dashboard-icon').classList.add('highlight')
    event.stopPropagation();

})
document.addEventListener('click', (event) => {
    if (!dashboard.contains(event.target)) {
        dashboard.classList.add('dis-hide');
        get('#dashboard-icon').classList.remove('highlight')

    }
});


const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const search = document.querySelector('.search input');
search.parentElement.addEventListener('submit', e => {
    e.preventDefault()
})
const generatetemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash delete"></i>
    </li>
    `;
    list.innerHTML += html;


}
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generatetemplate(todo);
        addForm.reset();
    }
})


const filterTodo = searchKey => {
    Array.from(list.children)
        .filter(item => !item.textContent.toLowerCase().includes(searchKey))
        .forEach(item => {
            item.classList.add('filtered')
        });

    Array.from(list.children)
        .filter(item => item.textContent.includes(searchKey))
        .forEach(item => {
            item.classList.remove('filtered')
        });


}

search.addEventListener('keyup', e => {
    const searchKey = search.value.toLowerCase().trim();
    filterTodo(searchKey)
})


list.addEventListener('click', e => {
    console.log(e.target.classList)
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
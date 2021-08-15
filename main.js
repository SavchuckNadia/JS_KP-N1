//Declaring variables and accessing DOM elements.
let content = document.querySelector('.content');
let block2 = document.querySelector('.block2');
let block1 = document.querySelector('.block1');
let f1 = document.forms.f1;
let f2 = document.forms.f2;
let textarea = f1.blockInnerHTML;
let editBtn = document.querySelector('.edit');
let styleBtn = document.querySelector('.style');
let saveBtn = document.querySelector('.save');
let addBtn = document.querySelector('.add');
let text = content.textContent;

//Event click on edit button. After clicking on the button the form f1, which contains textarea appears.
editBtn.addEventListener('click', function () {
    f1.style.display = 'block';
    f2.style.display = 'none';
    colors1.style.display = 'none';
    colors2.style.display = 'none';
})
textarea.value = content.innerHTML;

saveBtn.addEventListener('click', function () {
    content.innerHTML = textarea.value;
    block1.style.height = 'auto';
})

//Click event on form f2. After clicking on the radio button its font size value is assigned to the style of the content element.
f2.addEventListener('click', function (event) {
    if (event.target.name === 'radio') {
        content.style.fontSize = event.target.value;
    }
})

//Select the font family  with the select element.Selecting the option element changes the font family of the content element.
f2.chooseFont.addEventListener('change', function () {
    content.style.fontFamily = this.value;
})

let checkBold = document.querySelector('.checkBold');
let checkCursive = document.querySelector('.checkCursive');

//Event click on the checkbox to select font weight.
checkBold.addEventListener('click', function () {
    if (this.checked) {
        content.style.fontWeight = 'bold';
    } else {
        content.style.fontWeight = 'normal';
    }
})
//Event click on the checkbox to select font style.
checkCursive.addEventListener('click', function () {
    if (this.checked) {
        content.style.fontStyle = 'italic';
    } else {
        content.style.fontStyle = 'normal';
    }
})
let colorText = f2.colorText;
let backgroundColor = f2.backgroundColor;
let colors1 = document.querySelector('.colors1');
let colors2 = document.querySelector('.colors2');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');

//Event click on style button. After clicking on the button the form f2 which is designed to edit the styles of the content element, appears.
styleBtn.addEventListener('click', function () {
    f2.style.display = 'block';
    f1.style.display = 'none';

})
colorText.addEventListener('click', function () {
    colors1.style.display = 'block';
    colors2.style.display = 'none';

    //If the user clicks on the colored square, set the color of content element to background color of the square.
    box1.addEventListener('click', function (event) {
        let st = getComputedStyle(event.target);
        content.style.color = st.backgroundColor;
        colors1.style.display = 'none';
    })
})
backgroundColor.addEventListener('click', function () {
    colors2.style.display = 'block';
    colors1.style.display = 'none';

    //If the user clicks on the colored square, set the background color of content element to background color of  square.
    box2.addEventListener('click', function (event) {
        st = getComputedStyle(event.target);
        block1.style.backgroundColor = st.backgroundColor;
        colors2.style.display = 'none';
    })
})
let wrapper = document.querySelector('.wrapper');
let wrapper2 = document.querySelector('.wrapper2');
let f3 = document.forms.f3;
let blockAdd = document.querySelector('.blockAdd');
let blockTable = document.querySelector('.blockTable');
let blockList = document.querySelector('.blockList ');
let fTable = document.forms.fTable;
let fList = document.forms.fList;
let btnCreateTable = fTable.btnCreateTable;
let btnCreateList = fList.btnCreateList;
let typeBorder;
let colorBorderT;

//Clicking on the add button, a block where you can choose to create a table or list appears.
addBtn.addEventListener('click', function () {
    wrapper.style.display = 'none';
    wrapper2.style.display = 'block';
    blockAdd.style.display = 'block';
    blockAdd.style.height = 220 + 'px';
    blockTable.style.display = 'none';
    blockList.style.display = 'none';
    // A function that determines which radio button the user have clicked on and makes the table or list creation block visible.
    f3.addEventListener('click', function (event) {
        if (event.target.value === 'table') {
            blockTable.style.display = 'block';
            blockAdd.style.height = 'unset';
            blockList.style.display = 'none';
        }
        if (event.target.value === 'list') {
            blockList.style.display = 'block'
            blockTable.style.display = 'none';
        }
    })
})
btnCreateTable.addEventListener('click', function () {
    //After the user clicks  the create table button, extract the value from the input fields that he filled in.
    let countTR = fTable.countTR.value;
    let countTD = fTable.countTD.value;
    let widthTD = fTable.widthTD.value;
    let heightTD = fTable.heighTD.value;
    let widthBorder = fTable.widthBorder.value;
    let div = document.createElement('div');
    let table = document.createElement('table');
    //  Set the type of border according to the value of the selected option.
    for (let i = 0; i < fTable.typeBorder.options.length; i++) {
        if (fTable.typeBorder.options[i].selected) {
            typeBorderT = fTable.typeBorder.options[i].value;
        }
    }
    //  Set the color of border according to the value of the selected option.
    for (let i = 0; i < fTable.colorBorder.options.length; i++) {
        if (fTable.colorBorder.options[i].selected) {
            colorBorderT = fTable.colorBorder.options[i].value;
        }
    }
    let tr, td;
    //Table creation cycle.
    for (let i = 0; i < countTR; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < countTD; j++) {
            td = document.createElement('td');
            td.textContent = 'TD';
            let colorTextTable = content.style.color;
            td.style.color = colorTextTable;
            td.style.cssText = `width:${widthTD+ 'px'}; height: ${heightTD+ 'px'};border: ${widthBorder+ 'px'} ${typeBorderT} ${colorBorderT}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.appendChild(tr);
    div.appendChild(table);
    textarea.value += div.innerHTML;
    blockAdd.style.display = 'none';
    wrapper.style.display = 'block';
    f1.style.display = 'block';
    table.style.display = 'none';
    //Function of adding a table to the content element.
    saveBtn.addEventListener('click', function () {
        let tbody = document.createElement('tbody');
        tbody.appendChild(tr);
        table.appendChild(tbody);
        div.appendChild(table);
        content.innerHTML = textarea.value;
        textarea.value = content.innerHTML;
        table.style.display = 'table';
        f1.style.display = 'none';
        f3.reset();
        fTable.reset();
        fList.reset();
        block1.style.height = 'auto';
    })
})
btnCreateList.addEventListener('click', function () {
    let typeMarks;
    let li, ul;
    let div2 = document.createElement('div');
    //  Set the type of marks according to the value of the selected option.
    for (let i = 0; i < fList.typeMarks.options.length; i++) {
        if (fList.typeMarks.options[i].selected) {
            typeMarks = fList.typeMarks.options[i].value;
        }
    }
    //List creation cycle.
    let countLi = fList.countLi.value;
    ul = document.createElement('ul');
    for (i = 1; i <= countLi; i++) {
        li = document.createElement('li');
        li.textContent = `item ${i}`;
        let colorTextLi = content.style.color;
        li.style.color = colorTextLi;
        li.style.listStyleType = typeMarks;
        ul.appendChild(li);
    }
    div2.appendChild(ul);
    textarea.value += div2.innerHTML;
    blockAdd.style.display = 'none';
    wrapper.style.display = 'block';
    f1.style.display = 'block';
    ul.style.display = 'none';

    //Function of adding a list to the content element.
    saveBtn.addEventListener('click', function () {
        content.innerHTML = textarea.value;
        ul.style.display = 'block';
        f1.style.display = 'none';
        f3.reset();
        fTable.reset();
        fList.reset();
        block1.style.height = 'auto';
    })
})

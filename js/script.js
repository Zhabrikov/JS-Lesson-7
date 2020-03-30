// редактирование данных в одной персоне
function editBandit(i){
    display('create_pk');
    
    document.getElementById('manufacturer').value = arrPK[i].manufacturer;
    document.getElementById('cpu').value = arrPK[i].cpu;
    document.getElementById('ramType').value = arrPK[i].ramType;
    document.getElementById('ramCapacity').value = arrPK[i].ramCapacity;
    document.getElementById('driveType').value = arrPK[i].driveType;
    document.getElementById('storageCapacity').value = arrPK[i].storageCapacity;
    document.getElementById('videoCard').value = arrPK[i].videoCard;
    document.getElementById('radio_ext1').disabled = true;
    document.getElementById('radio_ext2').disabled = true;

    document.getElementById('headingForAdd').style.display = 'none';
    document.getElementById('headingForEdit').style.display = 'block';  
  

    if (arrPK[i].type == 'Компьютер'){
        document.getElementById('powerSupply').value = arrPK[i].powerSupply;
        document.getElementById('laptopFields').style.display = 'none';
        document.getElementById('computerFields').style.display = 'flex';
        document.getElementById('chipset').value = arrPK[i].chipset;
        document.getElementById('bodyColor').value = arrPK[i].bodyColor;
        document.getElementById('radio_ext1').checked = true;
        
    } else { 
        document.getElementById('laptopFields').style.display = 'flex';
        document.getElementById('computerFields').style.display = 'none';
        document.getElementById('screenDiagonal').value = arrPK[i].screenDiagonal;
        document.getElementById('screenResolution').value = arrPK[i].screenResolution;
        document.getElementById('matrix').value = arrPK[i].matrix;
        document.getElementById('matrixFrequency').value = arrPK[i].matrixFrequency;
        document.getElementById('radio_ext2').checked = true;
    }

    deleteBandit(i, arrPK);
    document.getElementById('mainMenu').style.display = 'none';
}

function deleteBandit(i, arrPK){
    arrPK.splice(i, 1);
    printInfo(arrPK);
}

//вывод всей информации на странице о выбранной персоне в id all_info

function printDefaultInfo(i){
    let form = document.getElementById('all_info').getElementsByTagName('form');
    //первый инпут в форме
    form[0].innerHTML='<br>';
    form[0].innerHTML+= `<div class="tableBodyInfo">
            <div class="tableBodyInfoEl" id="details${i}"> Тип устрйоства</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].type}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Производитель</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].manufacturer}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Процессор</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].cpu}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Тип ОЗУ</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].ramType}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Объём ОЗУ</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].ramCapacity}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Тип накопителя</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].driveType}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Объём накопителя</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].storageCapacity}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Видеокарта</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].videoCard}</div>
        </div>`;

        if(arrPK[i].type == 'Компьютер')
        { 
            form[0].innerHTML+= `<div class="tableBodyInfo">
            <div class="tableBodyInfoEl" id="details${i}"> Блок питания</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].powerSupply}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Чипсет</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].chipset}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Цвет корпуса</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].bodyColor}</div>
            </div>`;
            console.log('computer');
        } else {
            form[0].innerHTML+= `<div class="tableBodyInfo">
            <div class="tableBodyInfoEl" id="details${i}"> Диагональ экрана</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].screenDiagonal}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Разрешение экрана</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].screenResolution}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Матрица</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].matrix}</div>
            <div class="tableBodyInfoEl" id="details${i}"> Частота матрицы</div>
            <div class="tableBodyInfoEl" id="details${i}"> ${arrPK[i].matrixFrequency}</div>
            </div>`;
            console.log('laptop');
        }
        form[0].innerHTML+=`<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;
        
        document.getElementById('mainMenu2').addEventListener('click', function(){
            display('information');
        });
}

//отрисовка всей информации о персонах 
//* ГЛАВНАЯ ТАБЛИЦА

function printInfo(arrPK){
    let form = document.getElementById('information').getElementsByTagName('form');
    form[0].innerHTML = '<br>';
    //Первая (верхняя) строка таблицы
    form[0].innerHTML += '<div class="tableHead">'+
    			'<div class="tableHeadEl">Производитель</div>'+
    			'<div class="tableHeadEl">Процессор</div>'+
    			'<div class="tableHeadEl">Тип ОЗУ</div>'+
    			'<div class="tableHeadEl">Объём ОЗУ</div>'+
    			'<div class="tableHeadEl">Тип накопителя</div>'+
    			'<div class="tableHeadEl">Объём накопителя</div>'+
    			'<div class="tableHeadEl">Видеокарта</div>'+
    		'</div>';
    for(let i = 0; i < arrPK.length; i++){
        // каждое i - информация о персоне
        form[0].innerHTML+= `<div class="tableBody">
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].manufacturer}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].cpu}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].ramType}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].ramCapacity}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].driveType}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].storageCapacity}</div>
        <div class="tableBodyEl" id="details${i}"> ${arrPK[i].videoCard}</div>
        <div class="tableBodyEl" id="edit${i}">Редактировать</div>
        <div class="tableBodyEl" id="remove${i}">Удалить</div>
        </div>`
    }
    form[0].innerHTML+='<br>'+
    '<input type="button" id="newPKButton" class="buttons" value="Добавить новую запись">';

    // добавим обработчики

    for(let i = 0; i < arrPK.length; i++){
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let details = `details${i}`;
        document.getElementById(edit).style.color = 'blue';
        document.getElementById(remove).style.color = 'red';
        document.getElementById(details).style.color = 'green';
        document.getElementById(edit).style.cursor = 'pointer';
        document.getElementById(remove).style.cursor = 'pointer';
        document.getElementById(details).style.cursor = 'pointer';

        document.getElementById(details).addEventListener('click', function(){
            printDefaultInfo(i, arrPK);
            display('all_info');
        })

        document.getElementById(edit).addEventListener('click', function(){
            editBandit(i);
        })

        document.getElementById(remove).addEventListener('click', function(){
            if(confirm(`Точно удаляем информацию о ${arrPK[i].type}е ${arrPK[i].manufacturer}?`)){
                deleteBandit(i, arrPK);
            } else{

            }
        })
    }

    document.getElementById('newPKButton').addEventListener('click', function(){
        display('create_pk');
        document.getElementById('createPerson').style.display="";
    })
}

/*Выбирать либо "information" лмбо "all_info" либо create_pk */
// display flex чтобы отобразить нужный блок
function display(visibleId){
    switch(visibleId){
        case 'create_pk':
        document.getElementById('information').style.display = 'none';     
        document.getElementById('heading').style.display = 'none'; 
        document.getElementById('all_info').style.display = 'none';
        document.getElementById('create_pk').style.display = 'flex';
        break;
        case 'all_info':
        document.getElementById('information').style.display = 'none';     
        document.getElementById('heading').style.display = 'none';  
        document.getElementById('all_info').style.display = 'flex';
        document.getElementById('create_pk').style.display = 'none';
        break;
        case 'information':
        document.getElementById('information').style.display = 'flex';      
        document.getElementById('heading').style.display = 'block';      
        document.getElementById('all_info').style.display = 'none';
        document.getElementById('create_pk').style.display = 'none';
        break;
    }
}


// родительский класс с геттером и сеттером

class BaseClass{

    constructor(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard){
        this.manufacturer = manufacturer;
        this.cpu = cpu;
        this.ramType = ramType;
        this.ramCapacity = ramCapacity;
        this.driveType = driveType;
        this.storageCapacity = storageCapacity;
        this.videoCard = videoCard;
    }

    get manufacturer(){
        return this._manufacturer;
    }

    set manufacturer(value){        
        this._manufacturer = value;
    }


    get cpu(){
        return this._cpu;
    }

    set cpu(value){
        this._cpu = value;
    }


    get ramType(){
        return this._ramType;
    }

    set ramType(value){
        this._ramType = value;
    }

    get ramCapacity(){
        return this._ramCapacity;
    }

    set ramCapacity(value){
        this._ramCapacity = value;
    }

    get driveType(){
        return this._driveType;
    }

    set driveType(value){
        this._driveType = value;
    }

    get storageCapacity(){
        return this._storageCapacity;
    }

    set storageCapacity(value){
        this._storageCapacity = value;
    }

    get videoCard(){
        return this._videoCard;
    }

    set videoCard(value){
        this._videoCard = value;
    }
}

// классы наследники

class Computer extends BaseClass{
    constructor(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard, powerSupply, chipset, bodyColor){
        super(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard);
        this.type="Компьютер";
        this.powerSupply = powerSupply;
        this.chipset = chipset;
        this.bodyColor = bodyColor;
    }

    get powerSupply(){
        return this._powerSupply;
    }

    set powerSupply(value){
            this._powerSupply = value;
    }

    get chipset(){
        return this._chipset;
    }

    set chipset(value){
        this._chipset = value;
    }

    get bodyColor(){
        return this._bodyColor;
    }

    set bodyColor(value){        
            this._bodyColor = value;
    }

    /**methods... */
}


class Laptop extends BaseClass{
    constructor(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard, screenDiagonal, screenResolution, matrix, matrixFrequency){
        super(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard);
        this.type="Ноутбук";
        this.screenDiagonal = screenDiagonal;
        this.screenResolution = screenResolution;
        this.matrix = matrix;
        this.matrixFrequency = matrixFrequency;
    }


    get screenDiagonal(){
        return this._screenDiagonal;
    }

    set screenDiagonal(value){        
        this._screenDiagonal = value;        
    }

    get screenResolution(){
        return this._screenResolution;
    }

    set screenResolution(value){       
        this._screenResolution = value;        
    }

    get matrix(){
        return this._matrix;
    }

    set matrix(value){        
        this._matrix = value;        
    }

    get matrixFrequency(){
        return this._matrixFrequency;
    }

    set matrixFrequency(value){       
        this._matrixFrequency = value;        
    }
    /**methods... */
}

//проверка на то какая радио-кнопка и возвразаем его value

function checkRadio(){
    let radio = document.getElementsByName('radio');
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            return(radio[i].value);
        }
    }
}

let arrPK = [];  //массив из персон

let bandit1 = new Computer('Производитель', 'текст', 'текст', 'текст', 'текст', 'текст', 'текст', 'текст', 'текст', 'текст');
arrPK.push(bandit1);
display('infornation');
printInfo(arrPK);

// главная страница готова
// с кнопками CRUD-операции

/** listeners */

// на главное меню

document.getElementById('createPerson').addEventListener('click', function(){

    let manufacturer = document.getElementById('manufacturer').value.trim();
    let cpu = document.getElementById('cpu').value.trim();
    let ramType = document.getElementById('ramType').value.trim();
    let ramCapacity = document.getElementById('ramCapacity').value.trim();
    let driveType = document.getElementById('driveType').value.trim();
    let storageCapacity = document.getElementById('storageCapacity').value.trim();
    let videoCard = document.getElementById('videoCard').value.trim();
    let powerSupply = document.getElementById('powerSupply').value.trim();
    let chipset = document.getElementById('chipset').value.trim();
    let bodyColor = document.getElementById('bodyColor').value.trim();
    let screenDiagonal = document.getElementById('screenDiagonal').value.trim();
    let screenResolution = document.getElementById('screenResolution').value.trim();
    let matrix = document.getElementById('matrix').value.trim();
    let matrixFrequency = document.getElementById('matrixFrequency').value.trim();
    let type = checkRadio();

    switch(type){
        case 'computer':
            if (manufacturer === "" || cpu === "" || ramType === "" || ramCapacity === "" || driveType === "" || storageCapacity === "" || videoCard === "" || powerSupply === "" || chipset === "" || bodyColor === ""){
                alert('Заполните все поля');
            } else {                
                arrPK[arrPK.length] = new Computer(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard, powerSupply, chipset, bodyColor);
                printInfo(arrPK);
                display('information');
                alert('Запись сохранена');
                clearForm();
            }
            
        break;
        case 'laptop':
            if (manufacturer === "" || cpu === "" || ramType === "" || ramCapacity === "" || driveType === "" || storageCapacity === "" || videoCard === "" || screenDiagonal === "" || screenResolution === "" || matrix === "" || matrixFrequency === ""){
                alert('Заполните все поля');
            } else { 
            arrPK[arrPK.length] = new Laptop(manufacturer, cpu, ramType, ramCapacity, driveType, storageCapacity, videoCard, screenDiagonal, screenResolution, matrix, matrixFrequency);
            printInfo(arrPK);
            display('information');
            alert('Запись сохранена');
            clearForm();
            }
        break;
        
    }
})

document.getElementById('mainMenu').addEventListener('click', function(){
    
    display('information');
});



clearForm = () =>{
    document.getElementById('manufacturer').value = "";
    document.getElementById('cpu').value = "";
    document.getElementById('ramType').value = "";
    document.getElementById('ramCapacity').value = "";
    document.getElementById('driveType').value = "";
    document.getElementById('storageCapacity').value = "";
    document.getElementById('videoCard').value = "";
    document.getElementById('powerSupply').value = "";
    document.getElementById('chipset').value = "";
    document.getElementById('bodyColor').value = "";
    // document.getElementById('radio_ext1').checked = true;
    document.getElementById('screenDiagonal').value = "";
    document.getElementById('screenResolution').value = "";
    document.getElementById('matrix').value = "";
    document.getElementById('matrixFrequency').value = "";
    document.getElementById('mainMenu').style.display = '';
    document.getElementById('radio_ext1').disabled = false;
    document.getElementById('radio_ext2').disabled = false;
    document.getElementById('headingForAdd').style.display = 'block';
    document.getElementById('headingForEdit').style.display = 'none';
}


//* Проверка на radio > выбора необходимых полей для ввода

document.getElementById('radio_ext1').addEventListener('click', function(){
    document.getElementById('laptopFields').style.display = 'none';
    document.getElementById('computerFields').style.display = 'flex';
})

document.getElementById('radio_ext2').addEventListener('click', function(){
    document.getElementById('laptopFields').style.display = 'flex';
    document.getElementById('computerFields').style.display = 'none';
})
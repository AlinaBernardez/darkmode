const html = document.querySelector('html')
const switchContainer = document.querySelector('.switchWrap');

let mode = false;

const changeRender = () => {
    mode == false ? lightMode() : darkMode()
    const switchBtn = document.querySelector('.switch');
    switchBtn.addEventListener('click', () => {
        mode = !mode
        changeRender()
    })
};

const lightMode = () => {
    html.style.backgroundColor = 'white';
    html.style.color = 'black';
    switchContainer.innerHTML = `
    <p class="switchText">Dark mode</p>
    <div class="switch">
        <div class='btn'>
            <img src="./assets/img/sol.png" alt="boton sol">
        </div>
    </div>
    `
};

const darkMode = () => {
    html.style.backgroundColor = 'black';
    html.style.color = 'white';
    switchContainer.innerHTML = `
    <p class="switchText">Light mode</p>
    <div class="switch dark">
        <div class='btn darkB'>
            <img src="./assets/img/luna.png" alt="boton sol">
        </div>
    </div>
    `
};

changeRender();
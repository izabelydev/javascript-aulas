function classify() {
    return {
        // Atributos
        btnInput: document.querySelector('.btn-input'),
        ageInput: document.querySelector('#age'),
        information: document.querySelector('.information'),
        h1: document.querySelector('.title'),
        p: document.querySelector('.description'),
        content: document.querySelector('.content'),
        display: document.querySelector('.display'),

        //Métodos
        playApp() {
            this.initialAnimation();
            this.clickButton();
            this.pressEnter();
        },

        clickButton() {
            this.btnInput.addEventListener('click', () => {
                this.verifyInput();
            });
        },


        pressEnter() {
            this.ageInput.addEventListener('keyup', event => {
                if (event.keyCode === 13) this.verifyInput()
            });
        },

        backButton() {
            if (this.btnInput.classList.contains('btn-back')) {
                this.btnInput.addEventListener('click', () => {
                    this.finallylAnimation();
                    location.reload();
                });
            }
        },

        verifyInput() {
            if (this.ageInput.value === '' || !Number(this.ageInput.value)) {
                this.information.innerHTML = '<p>Insira apenas números</p>';
                this.openInformation();
            } else if (Number(this.ageInput.value) > 110) {
                this.information.innerHTML = '<p>Idade inválida</p>';
                this.openInformation();
            } else {
                this.closeInformationAuto();
                this.content.classList.add('off');
                this.result();
            }
        },

        openInformation() {
            this.information.classList.remove('off');
            this.information.classList.add('on');
        },

        closeInformationAuto() {
            this.information.classList.remove('on');
            this.information.classList.add('off');
        },

        initialAnimation() {
            this.content.classList.remove('off');
            this.content.classList.add('on');
        },

        finallylAnimation() {
            this.content.classList.remove('on');
            this.content.classList.add('off');
        },

        result() {
            const timer = setTimeout(() => {
                this.initialAnimation();
                this.h1.innerHTML = 'Classificação';

                const age = Number(this.ageInput.value);
                if (age >= 0 && age <= 12) {
                    this.p.innerHTML = 'Criança';
                    this.display.innerHTML = '<img src="./assets/css/img/crianca.png" alt="criança">';
                } else if (age >= 13 && age <= 17) {
                    this.p.innerHTML = 'Adolescente';
                    this.display.innerHTML = '<img src="./assets/css/img/adolescente.png" alt="Adolescente">';
                } else if (age >= 18 && age <= 59) {
                    this.p.innerHTML = 'Adulto';
                    this.display.innerHTML = '<img src="./assets/css/img/adulto.png" alt="Adulto">';
                } else if (age >= 60) {
                    this.p.innerHTML = 'Idoso';
                    this.display.innerHTML = '<img src="./assets/css/img/idoso.png" alt="Idoso">';
                }
                this.btnInput.classList.remove('btn-input');
                this.btnInput.classList.add('btn-back');
                this.btnInput.setAttribute('value', 'Voltar');
                this.display.appendChild(this.btnInput);
                this.backButton();
            }, 1000);
        },
    };
}
const classifyAge = classify();
classifyAge.playApp();
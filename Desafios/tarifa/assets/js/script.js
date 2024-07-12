function SelectTicket() {
    this.wrapper = document.querySelector('.wrapper');

    this.iniciar = () => {
        this.clickBtnOpt();
    };

    this.clickBtnOpt = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('child')) this.openResume('Criança', 100);
            if (el.classList.contains('student')) this.openResume('Estudante', 50);
            if (el.classList.contains('normal')) this.openResume('Normal', 0);
            if (el.classList.contains('old')) this.openResume('Idoso', 30);
        });
    };

    this.openResume = (ticket, discount) => {
        const ticketPrice = 2.50;
        const descPercent = discount / 100;
        const descMoney = 2.5 * descPercent;
        const pay = ticketPrice - descMoney;

        this.wrapper.innerHTML += `
            <div class="wrapper-resume off" style="backdrop-filter: blur(5px);">
                <div class="container-resume">
                    <span class="close"><p>X</p></span>
                    <h3>Resumo:</h3>
                    <span class="first-resume">
                        <p class="information">Ingresso selecionado:</p>
                        <p class="dinamic-information">${ticket}</p>
                        <p class="information">Quantidade:</p>
                        <p class="dinamic-information">1</p>
                        <p class="information">Desconto:</p>
                        <p class="dinamic-information">${discount}%</p>
                        </span>
                        
                        <span class="second-resume">
                        <p class="information">Valor total:</p>
                        <p class="dinamic-information">R$${ticketPrice.toFixed(2)}</p>
                        <p class="information">Desconto:</p>
                        <p class="dinamic-information">R$${descMoney.toFixed(2)}</p>
                        <p class="information">Total a pagar:</p>
                        <p class="dinamic-information">R$${pay.toFixed(2)}</p>
                    </span>
                </div>
            </div>`;

        this.wrapperResume = document.querySelector('.wrapper-resume');
        this.closeBtn = document.querySelector('.close');

        this.openAnimation = () => {
            this.wrapperResume.classList.remove('off');
            this.wrapperResume.classList.add('on');
        };

        setTimeout(() => {
            this.openAnimation();
        }, 200);

        this.closeBtn.addEventListener('click', () => {
            this.closeAnimation();
            setTimeout(() => {
                this.wrapper.removeChild(this.wrapperResume);
            }, 600);
        });


        this.closeAnimation = () => {
            this.wrapperResume.classList.remove('on');
            this.wrapperResume.classList.add('off');
        };
    };

}

const play = new SelectTicket();
play.iniciar();
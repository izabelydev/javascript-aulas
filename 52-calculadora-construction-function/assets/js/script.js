function Calculadora() {
    // ----ATRIBUTOS----
    this.display = document.querySelector('.display');
    
    // ----MÉTODOS----
    this.iniciar = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizarConta();
        });
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', event => {
            if(event.key !== 'Enter') return;
            this.realizarConta();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;

        } catch (error) {
            alert('Conta inválida');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();

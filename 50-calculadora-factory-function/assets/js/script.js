function criarCalculadora() {
    
    return {
        //-------ATRIBUTOS-------
        display: document.querySelector('.display'),

        //--------MÉTODOS-------
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizarConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                // A função eval não pode ser executada de qualquer maneira porque ela executa qualquer script que for inserido nela, como é uma calculadora simples não tem problema mas em sistemas reais pode violar a segurança do sistema
                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida');
            }
        },


        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const el = event.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizarConta();
                }
            }); 
            // }.bind(this)); em funções normais e anônimas, antes o this se referia a função anônima criada no addEventListener mas agora com o comando bind o this se refere a função criarCalculadora. Com arrow function não é necessário usar o comando bind
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (event) => {
                if(event.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor; // concatenar o innerText dos elementos que estão sendo clicados
        },
    };
}

const calculadora = criarCalculadora();
calculadora.inicia();
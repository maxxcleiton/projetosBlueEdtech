const prompt = require('prompt-sync')();
console.clear();


// //Funcoes
// function deManha(){
//     console.log(comecoManha.escolhasmanha);
//     let escolha = prompt();
//     if (escolha == 1) {
//         console.log(comecoManha.higieneBasica);
//         s.higiene++
//         s.ansiedade--
//     } else if (escolha == 2) {
//         console.log(comecoManha.treinoKatana);
//         s.forca++
//         s.ansiedade--
//     } else if (escolha == 3) {
//         console.log(comecoManha.sairAbrigo);
//         s.ansiedade++
//         ondevai1()

//     } else if (escolha == 4) {
//         console.log(comecoManha.alimentarseManha);
//         s.energia++
//         s.forca++
//         s.ansiedade--
//         deManha()
//     }
// }

// function ondevai1() {
//     console.log(ondeVaiTextos.intro);
//     let escolhaOndeVai= prompt();
//     if (escolhaOndeVai == 1){
//         console.log(ondeVaiTextos.escolhaOndeVai1);
//         //Exibir escolhas

//     } else if (escolhaOndeVai == 2){
//         console.log(ondeVaiTextos.escolhaOndeVai2);
//         let escolhaDelegacia = prompt();
//         if (escolhaDelegacia == 1) {
//             console.log(`Delegado e policiais: -Vamos limpar nossa cidade desses vermes!!!\n*vão para o local*\n-Esses mortos-vivos já passaram do prazo de validade!!!`);
//             //Iniciar um game de batalha
//         }

//     } else if (escolhaOndeVai == 3){
//         //Conseguir suprimentos
//     } else if (escolhaOndeVai == 4){
//         //Ir passear no parque
//     }
// }
// //Fim Funcoes




// //Objetos e diálogos
// let personagem = {
//     nome: '',
// }

// let comecoManha = {
//     escolhasmanha: '\n1. Higiene básica (1h)\n2. Treino e meditação com katana (2h)\n3. Se preparar para sair do abrigo (1h)\n4. Alimentar-se (2h)',
//     higieneBasica: 'Ok, você está bem cuidado(a) agora e pronto para resolver outras coisas: ',
//     treinoKatana: 'Mente afiada, katana afiada.',
//     sairAbrigo: 'Ok, vamos sair daqui, arrume e leve o necessário (não esquecer de sua katana e seus suprimentos).',
//     alimentarseManha: 'Humm, sem uma comida de manhã, não sei como a gente aguentaria o dia, não é mesmo?\n',
// }

// let ondeVaiTextos = {
//     intro: 'Para onde você vai?\n1. Casa do amigo sobrevivente (3h)\n2. Delegacia local (2h)\n3. Conseguir suprimentos (5h)\n4. Ir passear no parque(2h)',
//     escolhaOndeVai1: `Então vamos lá!\nCaminhando...\nAmigo: - Fala caro amigo! Viu muito zumbi no caminho? espero que tenha tudo corrido bem, entre antes que chame atenção de mais zumbis!\nEntão você entra na casa dele.\n Amigo: -Diga meu amigo, a que devo a honra de vossa presença?`,
//     escolhaOndeVai2: `-Delegado: 'Olá cidadão(ã)! fico feliz em recebê-lo(a) aqui na delegacia! Toda ajuda é bem vinda, pois a cidade está um caos!\nMe diga o que você pode fazer hoje:\n1. Ajudar a 'limpar' uma rua de zumbis\n2. Ajudar a reforçar a segurança da delegacia instalando madeiras nas janelas e portas`,
//     escolhaOndeVai3: ``,
//     escolhaOndeVai4: ``,
//     repetir: `1. Voltar ao menu anterior\n2. Repetir`,
//     repetir1: ``,

// }

// let s = {
//     higiene: 0,
//     ansiedade: 0,
//     energia: 0,
//     forca: 0,
    
// }






//Estrutura

let condicoes = {

}

let personagem = {
    nome: ``,
    fome: 5,
    cansaço: 0,
    vida: 10,
    comida: 5,
}

let time = {
    dia: 0,
    horas: 0,
    minutos: 0,
}

function tempo(tempoMais,tempoMenos){
    time.horas = time.horas + tempoMais
    time.horas = time.horas - tempoMenos
    console.log(`\nDia 0${time.dia}, ${time.horas}:00.`);
}
function comida(comidaMais, comidaMenos){
    personagem.comida = personagem.comida + comidaMais
    personagem.comida = personagem.comida - comidaMenos
    console.log(`Comida disponível: ${personagem.comida}`);
}
function fome(fomeMais, fomeMenos){
    personagem.fome = personagem.fome + fomeMais
    personagem.fome = personagem.fome - fomeMenos
    console.log(`Fome: ${personagem.fome}`);
    if (personagem.fome < 0){
        console.log(`Você está desperdiçando comida! lembre que se ficar sem comida não tem mais como ficar sem fome e com + de 15 de fome você pode morrer de fome.`);
    }
    if (personagem.fome >15){
        
    }
}

// function fome(fome){
//     if (fome == 0){
//     console.log(`Nível de fome atual: Sem fome.`);
//     } else if (fome == 1 ){
//     console.log(`Nível de fome atual: Pouquinho de fome`)
//     } else if (fome == 2){
//     console.log(`Nível de fome atual: Bastante fome, vamos comer?`)
//     } else if (fome == 3){
//     console.log(`Nível de fome atual: MUITA FOME, PRECISA COMER!`);
//     }
// }
// function cansaco(cansaco){
// if (cansaco == 0){
//     console.log(`Nível de cansaço atual: Tô bem disposto.`);
//     } else if (cansaco == 1 ){
//     console.log(`Nível de cansaço atual: Agora já cansei um pouquinho`)
//     } else if (cansaco == 2){
//     console.log(`Nível de cansaço atual: Meeu, cansadão.`)
//     } else if (cansaco == 3){
//     console.log(`Nível de cansaço atual: Cara, precisamos dormir senão caio duro aqui mesmo.`);
//     }
// }
console.log(`Você acorda numa manhã normal de domingo...
\nvocê vai, toma um banho, escova seus dentes...
\nvai até a varanda de casa para sentir o sol no rosto e terminar de acordar...
\naté que percebe que lá na rua, existem pessoas andando de uma maneira estranha.
\nnesse momento você fica em alerta, corre pro celular e decide ligar pra alguém.\n
`);

personagem.nome = prompt('Escolha o nome do seu personagem: ');

console.log(`\n${personagem.nome}, você tem 3 pessoas para ligar: `);

console.log(`
1. Pai (chefe de gabinete do presidente)
2. Mãe (vive com seu pai)
3. Irmão (está fazendo um mochilão pela Argentina)
`);

let decisaocall = 0;

function decisao(decisaocall){
    let repetir = 1;
    while (repetir == 1) {
    console.log(`\nVocê decide ligar para [1, 2, 3]:\n`);
    let decisaocall = +prompt();

    if (decisaocall == 1){
        console.log(`\ntuuuu...\ntuuuuuu.............\ntuuuuu....................
        \n-"Filho! onde você está? tudo está uma loucura! pessoas estão virando mortos vivos, eu estou em segurança com o presidente. Fique em casa! daqui a 3 dias um helicóptero vai te busc-" *qrrrrrrrr* *piiiiiiiii*
*chamada perdida*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();

        if (repetir == 2){
            console.log(`Aqui eu devo continuar a historia`);
        }

    } else if (decisaocall == 2){
        console.log(`\ntuuuuuuuuuuuu........\ntuuuuuuuuuuuuuuu............\ntuuuuuuuuuuuuuuuuuuuu..........
*chamada perdida*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();
        if (repetir == 2){
            console.log(`Aqui eu devo continuar a historia`);
        }

    } else if (decisaocall == 3){
        console.log(`\ntuuuuuuuu...../ntuuuuuuuuuu......
        \n-"Maninho!!! você está vivo? meu Deus! os mortos estão vivos e atacando as pessoas, eu me reuni com um grupo de amigos e estamos num abrigo, papai disse que vai mandar um helicóptero para cá, tenho que sobreviver até lá, garanto que você faça o mesmo! *hurrrrrrrrrrrr*
Meu Deus! um zumbi! preciso desligar aqui maninho, me liga quando puder!!"
*chamada encerrada*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();
        if (repetir == 2){
            console.log(`Aqui eu devo continuar a historia`);
        }
    } //fim do else if
    } //fim do while
} //fim da function

decisao(decisaocall)

console.log(`\nOk, você no momento está sozinho, e precisa sobreviver 3 dias até que o helicóptero chegue para seu resgate.
Boa sorte!
`);



// function tempo(tempo){

// }



for (let i = 1; i <= 3; i++) {
     time.dia++
     time.horas = time.horas + 7;
    while(time.dia == 1){

        console.log(`\nDia 0${time.dia}, ${time.horas}:00.`);
        console.log(`Vida total: ${personagem.vida}`);
        console.log(`Comida disponível: ${personagem.comida}`);
        console.log(`Fome: ${personagem.fome}`);
        console.log(`Cansaço: ${personagem.cansaço}`)


        console.log(`Hoje é o primeiro dia de um mundo que agora está sendo tomado por zumbis, o que você irá fazer?\n`);

        function manha7h(){
            console.log(`\n1.Tomar café (com o que tem disponível) (3h)\n   -2 comida\n   -2 fome\n2. Assistir Netflix (6h)\n   +2 fome\n3.   Treino físico (3h) \n    +2 fome\n   +2 cansaço\n4. Ficar na cama se lamentando (12h)`);
            let manhaEscolha1 = +prompt()
            if (manhaEscolha1 == 1){
                tempo(3,0)
                comida(0,2)
                fome(0,5)
                console.log(`\nUfa, agora que eu comi! me sinto melhor para fazer outras coisas.`);
                prompt(`\nVoltar menu principal (qualquer tecla)__`);
                manha7h()
            } else if (manhaEscolha1 == 2){
                tempo(6,0)
                fome(2,0)
                console.log(`\n Um netflix aqui para esquecer um pouco dos problemas.`);
                prompt(`\nVoltar menu principal (qualquer tecla)__`);
                manha7h()
            } else if (manhaEscolha1 == 3){
                tempo(3,0)
                fome(2,0)
                console.log(`\nOk, agora dei uma suada legal e fico mais disposto para as atividades do dia!`)
                prompt(`\nVoltar menu principal (qualquer tecla)__`);
                manha7h()
            } else if (manhaEscolha1 == 4){
                tempo(12,0)
            }
        } 

        manha7h()

        // if (){
        //     tempo.dia++
        // }
    }
    while(time.dia == 2){
        // prompt('testeeeee')
        // tempo.dia++
    }
    while (time.dia== 3){
        // prompt('testeeeee')
        // tempo.dia++
    }
}

// function dias(dia){
//     console.log('Dia!')
// }
// Definindo a classe Hero
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack;
        // Verifica o tipo do herói e define o tipo de ataque
        switch (this.type.toLowerCase()) {
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'uma espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'uma shuriken';
                break;
            default:
                attack = 'um ataque desconhecido';
        }
        console.log(`O ${this.type} ${this.name} atacou usando ${attack}`);
    }
}

// Criando um objeto do tipo 'ninja'
const ninja = new Hero('Sasuke Uchiha', 15, 'Ninja');

// Chamada de método
ninja.attack();

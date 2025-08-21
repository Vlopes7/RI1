const personagem1 = {
      nome: "Steve Rogers",
      codinome: "Capitão América",
      armaPrincipal: "Escudo americano",
      armaSecundaria: "-",
      velocidade: 85,
      forca: 75,
      resistencia: 80,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem2 = {
      nome: "Bruce Banner",
      codinome: "Hulk",
      armaPrincipal: "-",
      armaSecundaria: "-",
      velocidade: 65,
      forca: 100,
      resistencia: 100,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem3 = {
      nome: "Thanos",
      codinome: "Thanos",
      armaPrincipal: "Manopla do infinito",
      armaSecundaria: "-",
      velocidade: 50,
      forca: 100,
      resistencia: 100,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem4 = {
      nome: "Tony Stark",
      codinome: "Homem de ferro",
      armaPrincipal: "Armadura",
      armaSecundaria: "-",
      velocidade: 90,
      forca: 75,
      resistencia: 70,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem5 = {
      nome: "Peter Parker",
      codinome: "Homem aranha",
      armaPrincipal: "Teia",
      armaSecundaria: "-",
      velocidade: 80,
      forca: 85,
      resistencia: 90,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem6 = {
      nome: "Doutor Stephen Strange",
      codinome: "Doutor estranho",
      armaPrincipal: "Magia",
      armaSecundaria: "-",
      velocidade: 80,
      forca: 80,
      resistencia: 60,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem7 = {
      nome: "Wade Wilson",
      codinome: "Deadpool",
      armaPrincipal: "Pistolas",
      armaSecundaria: "Espadas",
      velocidade: 70,
      forca: 75,
      resistencia: 100,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem8 = {
      nome: "Thor",
      codinome: "Thor",
      armaPrincipal: "Martelo",
      armaSecundaria: "-",
      velocidade: 80,
      forca: 80,
      resistencia: 75,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagem9 = {
      nome: "T'Challa",
      codinome: "Pantera negra",
      armaPrincipal: "Armadura de vibranium",
      armaSecundaria: "-",
      velocidade: 90,
      forca: 85,
      resistencia: 90,
      descricao: function () {
        return `Nome do personagem: ${this.nome}\nCodinome do personagem: ${this.codinome}\nArma principal: ${this.armaPrincipal}\nArma secundária: ${this.armaSecundaria}\nNível de força: ${this.forca}\nNível de velocidade: ${this.velocidade}\nNível de resistência: ${this.resistencia}`;
      },
    };

    const personagens = [
      personagem1,
      personagem2,
      personagem3,
      personagem4,
      personagem5,
      personagem6,
      personagem7,
      personagem8,
      personagem9,
    ];

    for (let i = 0; i < personagens.length; i++) {
      for (let j = i + 1; j < personagens.length; j++) {
        const p1 = personagens[i];
        const p2 = personagens[j];

        console.log("=====================================");
        console.log(`${p1.nome} vs ${p2.nome}`);
        console.log("----------- Descricao --------------");
        console.log(p1.descricao());
        console.log("-------------------------------------");
        console.log(p2.descricao());
        console.log("----------- Comparacao --------------");

        if (p1.forca > p2.forca) {
          console.log(`Vantagem em FORÇA: ${p1.nome}`);
        } else if (p2.forca > p1.forca) {
          console.log(`Vantagem em FORÇA: ${p2.nome}`);
        } else {
          console.log("FORÇA: Empate");
        }

        if (p1.velocidade > p2.velocidade) {
          console.log(`Vantagem em VELOCIDADE: ${p1.nome}`);
        } else if (p2.velocidade > p1.velocidade) {
          console.log(`Vantagem em VELOCIDADE: ${p2.nome}`);
        } else {
          console.log("VELOCIDADE: Empate");
        }

        if (p1.resistencia > p2.resistencia) {
          console.log(`Vantagem em RESISTÊNCIA: ${p1.nome}`);
        } else if (p2.resistencia > p1.resistencia) {
          console.log(`Vantagem em RESISTÊNCIA: ${p2.nome}`);
        } else {
          console.log("RESISTÊNCIA: Empate");
        }

      }
    }
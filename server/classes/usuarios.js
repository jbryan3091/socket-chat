class Usuarios {

    constructor() {
        this.personas = [];
    }

    agergarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0]; // se pone cero para que solo se filtre un único registro

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        //...

        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;

    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }
}


module.exports = {
    Usuarios
}
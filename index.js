function Superhero (name, secretIdentity, powers, weakness) {
    this.name = name,
    this.secretIdentity = secretIdentity,
    this.powers = powers,
    this.weakness = weakness,
    
    usePower (){
        console.log(`${this.name} uses ${this.powers}`)
    }
    revealIdentity() {
        console.log(`${this.name} is ${this.secretIdentity}`)
    }
}
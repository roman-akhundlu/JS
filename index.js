
const telebeAdi = "preston"
const telebeSoyadi = "BIG"
const telebeTevelludu = 1995
let isStudent = false


const telebe = [
    {
        ad: "preston",
        soyad: "BIG",
        tevellud: 1995,
        isStudent: false,
        telebeninYashiniHesabla: function() {
            return new Date().getFullYear()  - this.tevellud
        }
    },
    
    {
        ad: "Splash",
        soyad: "Alvin",
        tevellud: 2000,
        isStudent: true,
        telebeninYashiniHesabla: function() {
            return new Date().getFullYear()  - this.tevellud
        }
    },

    {
        ad: "Khandur",
        soyad: "tdur",
        tevellud: 1950,
        isStudent: false,
        telebeninYashiniHesabla: function() {
            return new Date().getFullYear()  - this.tevellud
        }
    }
]

for(let i=0; i<telebe.length ; i++ ) {
    console.log(telebe[i].ad)
}


let items = [1, 2, 3, 4, 5]
let result = []
let akhir = ''
let totalNilai = ''
let stopLoop = false
for(i=0; i<3; i++) {
    result.push(items[Math.floor(Math.random() * items.length)]) 
} 
let reducer = (accumulator, curr) => accumulator + curr;
console.log(result)
for(i=0; i<3; i++) {
    for(j=0; j<3; j++) {

    if(stopLoop) {
            break
        }

        if(i != j) {
            if(result[i] == result[j] && !(result[0] == result[1] && result[0] == result[2])) {
                totalNilai = result[i] + result[j]
                if(totalNilai <= 4) {
                    akhir = 'DRAW!'
                } else if(totalNilai > 4 && totalNilai <= 8) {
                    akhir = 'X2 Nih!'
                } else {
                    akhir = 'X5 Nih!'
                } 
                stopLoop = true
            } else if(result[0] == result[1] && result[0] == result[2]) {
                totalNilai = result.reduce(reducer)
                if(totalNilai <= 6) {
                    akhir = 'Jackpot X3 !'
                } else if(totalNilai <= 12) {
                    akhir = 'Jackpot X5 !'
                } else {
                    akhir = 'FINAL JACKPOT X15 !!!'
                }
                stopLoop = true
            } else {
                akhir = 'lose!'
            }
        }
    }
}
console.log(akhir)
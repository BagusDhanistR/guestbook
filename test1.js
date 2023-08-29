//num is how many number wanna show on log, and len is the total column of the row
function countMultiple(num, len) {
    for(let i = 1; i<= num; i++) {
        let tempAnswer = []
        tempAnswer.push(i)
        for(let j= 1; j< len; j++) {
            tempAnswer.push(i + tempAnswer[j-1])
        }
        console.log(tempAnswer.join(" "))
    }
}

countMultiple(10, 10)
countMultiple(5, 5)
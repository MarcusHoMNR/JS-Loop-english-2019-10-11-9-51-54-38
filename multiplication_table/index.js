// ## requirement

// Create new index.js file, write program output 9*9 times table. The output is as follows：

// ```
// 1*1=1
// 2*1=2 2*2=4
// 3*1=3 3*2=6 3*3=9
// ……
// 9*1=9 9*2=18 9*3=27 …… 9*9=81
// ```
console.log('```')
for(let i = 1; i <= 9; i++) {
    let resultForEachRow = []
    for (let j = 1; j <= i; j++) {
        resultForEachRow.push(i + '*' + j + '=' + (i * j))
    }
    console.log(resultForEachRow.toString().replaceAll(',' , ' '))
}
console.log('```')

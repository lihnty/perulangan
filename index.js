    // tugas 1
    let result = "";
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) { 
            result += j;
        }
        result += "\n"; 
    }
    console.log(result);

// tugas 2
for (let i = 1; i <= 4; i++) { 
    let row = "";
    for (let j = 1; j <= 4; j++) { 
        row += i;
    }
    console.log(row); 
}

// tugas 3
for (let i = 1; i <= 4; i++) { 
    let row = "";
    for (let j = 1; j <= i; j++) { 
        row += j;
    }
    console.log(row);
}

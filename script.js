let table = document.getElementById('table')
let input = document.getElementById('inpf')
let pbtn = document.getElementById('parse')
let fdtl = document.getElementById('fdtl')
let pfc = document.getElementById('paste')


pbtn.onclick = (e)=> {
let json =

    // fjson
JSON.parse(input.value)

let data = json['data']
let conf = json['configurationJson']

let keys = {}
let pCol = data[Object.keys(data)[0]]

let sgpa = 0.0
let cgpa = json['CGPA']
let name = json['studentName']

let orderl = [
    'courseName',
    'courseCode',
    'courseChoice',
    'courseType',
    [
        'Internal',
        'Internal marks',
        'Internal max marks',
        'Internal percentage',
        'Internal Pass',
    ], [
        'External',
        'External Marks',
        'External max marks',
        'External percentage',
        'External Pass',
    ], [
        'Total',
        'Total Marks',
        'Total max marks',
        'Total percentage',
        'Total pass',
    ],
    'Grade',
    'Grade Points',
    'Credits',
    'Obtained Credits',
    'Credits Points',
    'courseCredits'

]

delete (pCol['totalExamMarks'])
delete (pCol['subjectName'])




itable = '<tr>'


for (const key in conf) {
    keys[key] = conf[key].columnName
}

for (let i = 0; i < orderl.length; i++) {

    if (orderl[i] instanceof Array) {
        for (let j = 1; j < orderl[i].length; j++) {
            let pos = Object.values(keys).indexOf(orderl[i][j])
            if (pos > -1) {
                orderl[i][j] = Object.keys(keys)[pos]
            }
        }
    } else {
        let pos = Object.values(keys).indexOf(orderl[i])
        if (pos > -1) {
            orderl[i] = Object.keys(keys)[pos]
        }
    }


}


orderl.forEach(e => {
    let vn
    if (e instanceof Array) {
        vn = e[0]
    } else
        vn = keys[e] ?? capitalizeAndSpace(e)

    itable += `<th>` + vn + `</th>`
});

itable += '</tr>'

for (const key in data) {
    let it = data[key]
    if (it['courseType'] == "Practical")
        itable += '<tr class="disabled">'
    else
        itable += '<tr>'


    if (key == 'SGPA') {
        sgpa = it
    } else if (it) {

        orderl.forEach(e => {
            if (e instanceof Array) {
                let v1 = Math.trunc(it[e[1]])
                let v2 = Math.trunc(it[e[2]])
                let v3 = Math.trunc(it[e[3]])

                v1 = isNaN(v1) ? "-" : v1
                v2 = isNaN(v2) ? "-" : v2
                v3 = isNaN(v3) ? "-" : v3 + "%"

                let hl = (it[e[4]] ?? "").toLowerCase()
                hl = (hl == "pass") ? "green" : (hl == "fail" ? "red" : "")
                let vn = '' + v1 + " / " + v2 + " / " + v3
                itable += `<td class =` + hl + ` >` + vn + `</td>`
            } else {
                let vn = it[e]

                itable += `<td>` + vn + `</d>`
            }

        });
    }

    itable += '</tr>'
}


table.innerHTML = itable


fdtl.innerText = `
Name:\t`+ name + `
SGPA:\t`+ sgpa + `
CGPA:\t`+ cgpa


}



pfc.onclick = async () => {
    const text = await navigator.clipboard.readText();
    input.value = text;
}




function capitalizeAndSpace(string) {
    if (!string) return string; // Check if the string is empty or null

    // Capitalize the first letter
    let result = string.charAt(0).toUpperCase();

    // Loop through the rest of the string
    for (let i = 1; i < string.length; i++) {
        let char = string.charAt(i);
        if (char === char.toUpperCase() && char !== ' ') {
            result += ' ' + char;
        } else {
            result += char;
        }
    }

    return result;
}

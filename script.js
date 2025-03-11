let table = document.getElementById('table')
let input = document.getElementById('inpf')
let pbtn = document.getElementById('parse')
let fdtl = document.getElementById('fdtl')
let pfc = document.getElementById('paste')
let version = document.getElementById('version')

let parsedData;

let DEBUG = false;

pbtn.onclick = (e) => {
    parsedData = JSON.parse(input.value);
    switch (version.value) {
        case '1':
            version1(input.value)
            break;
        case '2':
            version2(input.value)
            break;
        case '3':
            version3(input.value)
            break;
        default:
            console.log('Invalid version')
    }

}

version.onchange = (e) => {
    if (DEBUG) console.log(e.target.value)
    if(parsedData) pbtn.click()
}



//------- Parsers -------//

function version1(text) {

    let subjectData = parsedData['data']

    // Data on columns on subject data
    let conf = parsedData['configurationJson']

    let keys = {}
    let pCol = subjectData[Object.keys(subjectData)[0]]

    let sgpa = 0.0
    let cgpa = parsedData['CGPA']
    let name = parsedData['studentName']

    

    //------- V1 -------//

    let orderToShow = [
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
    ];


    for (const key in conf) {
        keys[key] = conf[key].columnName
    }

    for (let i = 0; i < orderToShow.length; i++) {

        if (orderToShow[i] instanceof Array) {
            for (let j = 1; j < orderToShow[i].length; j++) {
                let pos = Object.values(keys).indexOf(orderToShow[i][j])
                if (pos > -1) {
                    orderToShow[i][j] = Object.keys(keys)[pos]
                }
            }
        } else {
            let pos = Object.values(keys).indexOf(orderToShow[i])
            if (pos > -1) {
                orderToShow[i] = Object.keys(keys)[pos]
            }
        }


    }

    let dataForTable = '<tr>'

    orderToShow.forEach(e => {
        let vn
        if (e instanceof Array) {
            vn = e[0]
        } else
            vn = keys[e] ?? capitalizeAndSpace(e)

        dataForTable += `<th>` + vn + `</th>`
    });

    dataForTable += '</tr>'

    for (const key in subjectData) {
        let it = subjectData[key]
        if (it['courseType'] == "Practical")
            dataForTable += '<tr class="disabled">'
        else
            dataForTable += '<tr>'


        if (key == 'SGPA') {
            sgpa = it
        } else if (it) {

            orderToShow.forEach(e => {
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
                    dataForTable += `<td class =` + hl + ` >` + vn + `</td>`
                } else {
                    let vn = it[e]

                    dataForTable += `<td>` + vn + `</d>`
                }

            });
        }

        dataForTable += '</tr>'
    }


    table.innerHTML = dataForTable


    fdtl.innerText = `
Name:\t`+ name + `
SGPA:\t`+ sgpa + `
CGPA:\t`+ cgpa

   if (DEBUG) console.log(keys)
}


function version2(text) {

    let subjectData = parsedData['data']

    // Data on columns on subject data
    let conf = parsedData['configurationJson']

    let keys = {}
    let pCol = subjectData[Object.keys(subjectData)[0]]

    let sgpa = 0.0
    let cgpa = parsedData['CGPA']
    let name = parsedData['studentName']

    

    //----- V2 ------//

    let orderToShow = [
        'courseName',
        'courseCode',
        'courseChoice',
        'courseType',
        [
            'Internal',
            'TH SEC',
            'TH MAX',
            'TH %',
            'TH PASS',
        ], [
            'External',
            'EXT SEC',
            'EXT MAX',
            'EXT %',
            'EXT PASS',
        ], [
            'Total',
            'SEC',
            'MAX',
            '%',
            'TOTAL PASS',
        ],
        'GRADE',
        'GRADE POINTS',
        'CREDITS',
        'OBTAINED CREDITS',
        'CREDITS POINTS',
        'courseCredits'
    ]

    delete (pCol['totalExamMarks'])
    delete (pCol['subjectName'])



    for (const key in conf) {
        keys[key] = conf[key].columnName
    }

    for (let i = 0; i < orderToShow.length; i++) {

        if (orderToShow[i] instanceof Array) {
            for (let j = 1; j < orderToShow[i].length; j++) {
                let pos = Object.values(keys).indexOf(orderToShow[i][j])
                if (pos > -1) {
                    orderToShow[i][j] = Object.keys(keys)[pos]
                }
            }
        } else {
            let pos = Object.values(keys).indexOf(orderToShow[i])
            if (pos > -1) {
                orderToShow[i] = Object.keys(keys)[pos]
            }
        }


    }

    let dataForTable = '<tr>'

    orderToShow.forEach(e => {
        let vn
        if (e instanceof Array) {
            vn = e[0]
        } else
            vn = keys[e] ?? capitalizeAndSpace(e)

        dataForTable += `<th>` + vn + `</th>`
    });

    dataForTable += '</tr>'

    for (const key in subjectData) {
        let it = subjectData[key]
        if (it['courseType'] == "Practical")
            dataForTable += '<tr class="disabled">'
        else
            dataForTable += '<tr>'


        if (key == 'SGPA') {
            sgpa = it
        } else if (it) {

            orderToShow.forEach(e => {
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
                    dataForTable += `<td class =` + hl + ` >` + vn + `</td>`
                } else {
                    let vn = it[e]

                    dataForTable += `<td>` + vn + `</d>`
                }

            });
        }

        dataForTable += '</tr>'
    }


    table.innerHTML = dataForTable


    fdtl.innerText = `
Name:\t`+ name + `
SGPA:\t`+ sgpa + `
CGPA:\t`+ cgpa

    if (DEBUG) console.log(keys)
}


function version3(text) {

    let subjectData = parsedData['data']

    // Data on columns on subject data
    let conf = parsedData['configurationJson']

    let keys = {}
    let pCol = subjectData[Object.keys(subjectData)[0]]

    let sgpa = 0.0
    let cgpa = parsedData['CGPA']
    let name = parsedData['studentName']

    let orderToShow = {
        'Course Name': {
            type: 0,
            matcher: ['courseName']
        },
        'Course Code': {
            type: 0,
            matcher: ['courseCode']
        },
        'Course Choice': {
            type: 0,
            matcher: ['courseChoice']
        },
        'Course Type': {
            type: 0,
            matcher: ['courseType']
        },
        'Internal': {
            type: 1,
            matchers:
                [
                    ['Internal marks', 'TH SEC'],
                    ['Internal max marks', 'TH MAX'],
                    ['Internal percentage', 'TH %'],
                    ['Internal Pass', 'TH PASS'],
                ]
        },
        'External': {
            type: 1,
            matchers:
                [
                    ['External Marks', 'EXT SEC'],
                    ['External max marks', 'EXT MAX'],
                    ['External percentage', 'EXT %'],
                    ['External Pass', 'EXT PASS'],
                ]
        },
        'Total':
        {
            type: 1,
            matchers: [
                ['Total Marks', 'SEC'],
                ['Total max marks', 'MAX'],
                ['Total percentage', '%'],
                ['Total pass', 'TOTAL PASS'],
            ]
        },
        'Grade': {
            type: 0,
            matcher: ['GRADE']
        },
        'Grade Points': {
            type: 0,
            matcher: ['GRADE POINTS']
        },
        'Credits': {
            type: 0,
            matcher: ['CREDITS']
        },
        'Obtained Credits': {
            type: 0,
            matcher: ['OBTAINED CREDITS']
        },
        'Credits Points': {
            type: 0,
            matcher: ['CREDITS POINTS']
        },
        'Course Credits': {
            type: 0,
            matcher: ['courseCredits']
        }
    }

    // delete (pCol['totalExamMarks'])
    // delete (pCol['subjectName'])



    for (const key in conf) {
        keys[key] = conf[key].columnName
    }

    for (let i = 0; i < orderToShow.length; i++) {

        if (orderToShow[i] instanceof Array) {
            for (let j = 1; j < orderToShow[i].length; j++) {
                let pos = Object.values(keys).indexOf(orderToShow[i][j])
                if (pos > -1) {
                    orderToShow[i][j] = Object.keys(keys)[pos]
                }
            }
        } else {
            let pos = Object.values(keys).indexOf(orderToShow[i])
            if (pos > -1) {
                orderToShow[i] = Object.keys(keys)[pos]
            }
        }


    }

    let dataForTable = '<tr>'

    orderToShow.forEach(e => {
        let vn
        if (e instanceof Array) {
            vn = e[0]
        } else
            vn = keys[e] ?? capitalizeAndSpace(e)

        dataForTable += `<th>` + vn + `</th>`
    });

    dataForTable += '</tr>'

    for (const key in subjectData) {
        let it = subjectData[key]
        if (it['courseType'] == "Practical")
            dataForTable += '<tr class="disabled">'
        else
            dataForTable += '<tr>'


        if (key == 'SGPA') {
            sgpa = it
        } else if (it) {

            orderToShow.forEach(e => {
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
                    dataForTable += `<td class =` + hl + ` >` + vn + `</td>`
                } else {
                    let vn = it[e]

                    dataForTable += `<td>` + vn + `</d>`
                }

            });
        }

        dataForTable += '</tr>'
    }


    table.innerHTML = dataForTable


    fdtl.innerText = `
Name:\t`+ name + `
SGPA:\t`+ sgpa + `
CGPA:\t`+ cgpa

    if (DEBUG) console.log(keys)
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

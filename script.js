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
    dataParserV3(input.value)
}


function dataParserV3(text) {

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
            matcher: ['course Name',"courseName"]
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
            matcher: ['GRADE',"Grade"]
        },
        'Grade Points': {
            type: 0,
            matcher: ['GRADE POINTS', "Grade Points"]
        },
        'Credits': {
            type: 0,
            matcher: ['CREDITS', "Credits"]
        },
        'Obtained Credits': {
            type: 0,
            matcher: ['OBTAINED CREDITS', "Obtained Credits"]
        },
        'Credits Points': {
            type: 0,
            matcher: ['CREDITS POINTS', "Credits Points"]
        },
        'Course Credits': {
            type: 0,
            matcher: ['courseCredits']
        }
    }



    for (const key in conf) {
        keys[conf[key].columnName] = key
    }
    
    for (let e in orderToShow) {

        if (orderToShow[e].type == 1) {
            for (let i = 0; i < orderToShow[e].matchers.length; i++) {

                let v = orderToShow[e].matchers[i].find(a => a in keys)

                let pos = keys[v]
                
                if (pos) {
                    orderToShow[e].matchers[i] = [pos]
                }
            }
        } else if (orderToShow[e].type == 0) {
            let v = orderToShow[e].matcher.find(e => e in keys)

            let pos = keys[v];
            if (pos ) {
                orderToShow[e].matcher = [pos]
            }
        }

    };



    let dataForTable = '<tr>'

    for (let e in orderToShow) {
        dataForTable += `<th>` + e + `</th>`
    };

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

            

            for (let e in orderToShow) {
                if (orderToShow[e].type == 1) {

                    const key1 = orderToShow[e].matchers[0].find(e => e in it)
                    const key2 = orderToShow[e].matchers[1].find(e => e in it)
                    const key3 = orderToShow[e].matchers[2].find(e => e in it)

                    
                    let v1 = Math.trunc(it[key1])
                    let v2 = Math.trunc(it[key2])
                    let v3 = Math.trunc(it[key3])
                    
                    v1 = isNaN(v1) ? "-" : v1
                    v2 = isNaN(v2) ? "-" : v2
                    v3 = isNaN(v3) ? "-" : v3 + "%"

                    let hl = (it[orderToShow[e].matchers[3]] ?? "").toLowerCase()
                    hl = (hl == "pass") ? "green" : (hl == "fail" ? "red" : "")

                    let vn = '' + v1 + " / " + v2 + " / " + v3
                    dataForTable += `<td class =` + hl + ` >` + vn + `</td>`

                }
                else if (orderToShow[e].type == 0) {

                    let key = orderToShow[e].matcher.find(e => e in it)

                    let vn = it[key]

                    dataForTable += `<td>` + vn + `</d>`

                }
            }
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

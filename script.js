let table = document.getElementById('table')
let input = document.getElementById('inpf')
let pbtn = document.getElementById('parse')
let fdtl = document.getElementById('fdtl')
let pfc = document.getElementById('paste')

let fjson = {
    "data": {
        "107518": {
            "courseName": "TRANSPORTATION ENGINEERING-II",
            "courseCode": "ETCET303",
            "courseChoice": "regular",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "27.00",
            "col_9112": "50",
            "col_8427": "54.00",
            "col_8661": "Pass",
            "col_5015": "40.00",
            "col_4357": "100",
            "col_9737": "40.00",
            "col_9853": "Pass",
            "col_2858": "67",
            "col_8794": "150",
            "col_2506": "44.67",
            "col_5153": "Pass",
            "col_7867": "D",
            "col_6807": "5",
            "col_4773": "2",
            "col_6360": "2",
            "col_2676": "10",
            "subjectName": "TRANSPORTATION ENGINEERING-II",
            "courseCredits": 2
        },
        "107519": {
            "courseName": "STRUCTURAL ANALYSIS-II",
            "courseCode": "ETCET302",
            "courseChoice": "regular",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "10.00",
            "col_9112": "50",
            "col_8427": "20.00",
            "col_8661": "Fail",
            "col_5015": "45.00",
            "col_4357": "100",
            "col_9737": "45.00",
            "col_9853": "Pass",
            "col_2858": "55",
            "col_8794": "150",
            "col_2506": "36.67",
            "col_5153": "Fail",
            "col_7867": "F",
            "col_6807": "0",
            "col_4773": "3",
            "col_6360": "0",
            "col_2676": "0",
            "subjectName": "STRUCTURAL ANALYSIS-II",
            "courseCredits": 3
        },
        "107520": {
            "courseName": "DESIGN OF CONCRETE STRUCTURES",
            "courseCode": "ETCET301",
            "courseChoice": "regular",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "5.00",
            "col_9112": "50",
            "col_8427": "10.00",
            "col_8661": "Fail",
            "col_5015": "41.00",
            "col_4357": "100",
            "col_9737": "41.00",
            "col_9853": "Pass",
            "col_2858": "46",
            "col_8794": "150",
            "col_2506": "30.67",
            "col_5153": "Fail",
            "col_7867": "F",
            "col_6807": "0",
            "col_4773": "3",
            "col_6360": "0",
            "col_2676": "0",
            "subjectName": "DESIGN OF CONCRETE STRUCTURES",
            "courseCredits": 3
        },
        "107521": {
            "courseName": "ESSENCE OF INDIAN TRADITIONAL KNOWLEDGE",
            "courseCode": "ETMCT301",
            "courseChoice": "regular",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "24.00",
            "col_9112": "50",
            "col_8427": "48.00",
            "col_8661": "Fail",
            "col_5015": "36.00",
            "col_4357": "100",
            "col_9737": "36.00",
            "col_9853": "Pass",
            "col_2858": "60",
            "col_8794": "150",
            "col_2506": "40.00",
            "col_5153": "Fail",
            "col_7867": "F",
            "col_6807": "0",
            "col_4773": "0",
            "col_6360": "0",
            "col_2676": "0",
            "subjectName": "ESSENCE OF INDIAN TRADITIONAL KNOWLEDGE",
            "courseCredits": 0
        },
        "107523": {
            "courseName": "TRAFFIC ENGINEERING AND TRANSPORTATION PLANNING",
            "courseCode": "ETCET305",
            "courseChoice": "elective",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "30.00",
            "col_9112": "50",
            "col_8427": "60.00",
            "col_8661": "Pass",
            "col_5015": "41.00",
            "col_4357": "100",
            "col_9737": "41.00",
            "col_9853": "Pass",
            "col_2858": "71",
            "col_8794": "150",
            "col_2506": "47.33",
            "col_5153": "Pass",
            "col_7867": "D",
            "col_6807": "5",
            "col_4773": "3",
            "col_6360": "3",
            "col_2676": "15",
            "subjectName": "TRAFFIC ENGINEERING AND TRANSPORTATION PLANNING",
            "courseCredits": 3
        },
        "107525": {
            "courseName": "IRRIGATION ENGINEERING",
            "courseCode": "ETCET306",
            "courseChoice": "elective",
            "courseType": "Theory",
            "totalExamMarks": "150.00",
            "col_5689": "13.00",
            "col_9112": "50",
            "col_8427": "26.00",
            "col_8661": "Fail",
            "col_5015": "53.00",
            "col_4357": "100",
            "col_9737": "53.00",
            "col_9853": "Pass",
            "col_2858": "66",
            "col_8794": "150",
            "col_2506": "44.00",
            "col_5153": "Fail",
            "col_7867": "F",
            "col_6807": "0",
            "col_4773": "3",
            "col_6360": "0",
            "col_2676": "0",
            "subjectName": "IRRIGATION ENGINEERING",
            "courseCredits": 3
        },
        "107526": {
            "courseName": "EVALUATION OF SUMMER INTERNSHIP-II",
            "courseCode": "ETINS301",
            "courseChoice": "regular",
            "courseType": "Practical",
            "totalExamMarks": "100.00",
            "col_5015": "60.00",
            "col_4357": "100",
            "col_9737": "60.00",
            "col_9853": "Pass",
            "col_2858": "60",
            "col_8794": "100",
            "col_2506": "60.00",
            "col_5153": "Pass",
            "col_7867": "B",
            "col_6807": "7",
            "col_4773": "1",
            "col_6360": "1",
            "col_2676": "7",
            "subjectName": "EVALUATION OF SUMMER INTERNSHIP-II",
            "courseCredits": 1
        },
        "107527": {
            "courseName": "EXTRA ACADEMIC ACTIVITIES",
            "courseCode": "ETHSS301",
            "courseChoice": "regular",
            "courseType": "Practical",
            "totalExamMarks": "100.00",
            "col_5015": "60.00",
            "col_4357": "100",
            "col_9737": "60.00",
            "col_9853": "Pass",
            "col_2858": "60",
            "col_8794": "100",
            "col_2506": "60.00",
            "col_5153": "Pass",
            "col_7867": "B",
            "col_6807": "7",
            "col_4773": "1",
            "col_6360": "1",
            "col_2676": "7",
            "subjectName": "EXTRA ACADEMIC ACTIVITIES",
            "courseCredits": 1
        },
        "107528": {
            "courseName": "DESIGN OF IRRIGATION STRUCTURES",
            "courseCode": "ETCES303",
            "courseChoice": "regular",
            "courseType": "Practical",
            "totalExamMarks": "100.00",
            "col_5015": "64.00",
            "col_4357": "100",
            "col_9737": "64.00",
            "col_9853": "Pass",
            "col_2858": "64",
            "col_8794": "100",
            "col_2506": "64.00",
            "col_5153": "Pass",
            "col_7867": "B",
            "col_6807": "7",
            "col_4773": "2",
            "col_6360": "2",
            "col_2676": "14",
            "subjectName": "DESIGN OF IRRIGATION STRUCTURES",
            "courseCredits": 2
        },
        "107529": {
            "courseName": "CONCRETE AND STRUCTURAL ENGINEERING LAB",
            "courseCode": "ETCES302",
            "courseChoice": "regular",
            "courseType": "Practical",
            "totalExamMarks": "100.00",
            "col_5015": "75.00",
            "col_4357": "100",
            "col_9737": "75.00",
            "col_9853": "Pass",
            "col_2858": "75",
            "col_8794": "100",
            "col_2506": "75.00",
            "col_5153": "Pass",
            "col_7867": "A",
            "col_6807": "8",
            "col_4773": "2",
            "col_6360": "2",
            "col_2676": "16",
            "subjectName": "CONCRETE AND STRUCTURAL ENGINEERING LAB",
            "courseCredits": 2
        },
        "107530": {
            "courseName": "DESIGN AND DETAILING OF CONCRETE STRUCTURES",
            "courseCode": "ETCES301",
            "courseChoice": "regular",
            "courseType": "Practical",
            "totalExamMarks": "100.00",
            "col_5015": "50.00",
            "col_4357": "100",
            "col_9737": "50.00",
            "col_9853": "Pass",
            "col_2858": "50",
            "col_8794": "100",
            "col_2506": "50.00",
            "col_5153": "Pass",
            "col_7867": "C",
            "col_6807": "6",
            "col_4773": "2",
            "col_6360": "2",
            "col_2676": "12",
            "subjectName": "DESIGN AND DETAILING OF CONCRETE STRUCTURES",
            "courseCredits": 2
        },
        "SGPA": 3.68
    },
    "success": "true",
    "semesterNumber": 0,
    "academicYear": "2023-24",
    "academicBranch": "Bachelor of Technology (B.Tech) Civil Engineering",
    "group": "SEM V",
    "configurationJson": {
        "col_5689": {
            "columnName": "Internal marks",
            "templateColumnId": "947",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "16910": "2023-24-Bachelor of Technology (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "16910"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9798": "(B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9798"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9401": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9401"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9402": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9402"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9403": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9403"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9404": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9404"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_9112": {
            "columnName": "Internal max marks",
            "templateColumnId": "948",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "16910": "2023-24-Bachelor of Technology (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "16910"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9798": "(B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9798"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9401": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9401"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9402": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9402"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9403": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9403"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9404": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9404"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_8427": {
            "columnName": "Internal percentage",
            "templateColumnId": "949",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_9112": "Internal max marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_9112"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_8661": {
            "columnName": "Internal Pass",
            "templateColumnId": "950",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99"
                    },
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_5015": {
            "columnName": "External Marks",
            "templateColumnId": "951",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9405": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9405"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9406": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9406"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9407": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9407"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9408": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9408"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9409": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9409"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9410": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9410"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9414": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9414"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9415": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9415"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9411": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9411"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9412": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9412"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "obtainedScore",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9839": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9839"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_4357": {
            "columnName": "External max marks",
            "templateColumnId": "952",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9405": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9405"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9406": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9406"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9407": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9407"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9408": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9408"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9409": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9409"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9410": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9410"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9414": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9414"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9415": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9415"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9411": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9411"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9412": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9412"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "exam Marks",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": {
                        "9839": " (B.Tech) Civil Engineering"
                    },
                    "examId": [
                        "9839"
                    ],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_9737": {
            "columnName": "External percentage",
            "templateColumnId": "953",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5015": "External Marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_5015",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_9853": {
            "columnName": "External Pass",
            "templateColumnId": "954",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "pass",
                    "outOfValue": "34.99",
                    "criteria": "34.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9737": "External percentage"
                    },
                    "columnId": [
                        "col_9737"
                    ],
                    "columnCriteria": {
                        "col_9737": "34.99"
                    },
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_2858": {
            "columnName": "Total Marks",
            "templateColumnId": "955",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5689": "Internal marks",
                        "col_5015": "External Marks"
                    },
                    "columnId": [
                        "col_5689",
                        "col_5015"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_8794": {
            "columnName": "Total max marks",
            "templateColumnId": "956",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "sum of",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_9112": "Internal max marks",
                        "col_4357": "External max marks"
                    },
                    "columnId": [
                        "col_9112",
                        "col_4357"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_2506": {
            "columnName": "Total percentage",
            "templateColumnId": "957",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "percentage",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2858": "Total Marks",
                        "col_8794": "Total max marks"
                    },
                    "columnId": [
                        "col_2858",
                        "col_8794"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": [],
            "obtainedMarksFlag": "true"
        },
        "col_5153": {
            "columnName": "Total pass",
            "templateColumnId": "958",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107519": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107520": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107521": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107523": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107525": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107526": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107527": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107528": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107529": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                },
                "107530": {
                    "modeOfOperation": "pass",
                    "outOfValue": "49.99",
                    "criteria": "49.99",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_8427": "Internal percentage"
                    },
                    "columnId": [
                        "col_8427"
                    ],
                    "columnCriteria": {
                        "col_8427": "49.99",
                        "col_9737": "34.99",
                        "col_2506": "39.99"
                    },
                    "examCriteria": [],
                    "subOperation": [
                        {
                            "columnId": [
                                "col_9737"
                            ],
                            "criteria": "34.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_9737": "External percentage"
                            },
                            "selectedExamNameAndId": []
                        },
                        {
                            "columnId": [
                                "col_2506"
                            ],
                            "criteria": "39.99",
                            "examId": [],
                            "modeOfOperation": "pass",
                            "selectedColumnNameAndId": {
                                "col_2506": "Total percentage"
                            },
                            "selectedExamNameAndId": []
                        }
                    ]
                }
            },
            "subCol": []
        },
        "col_7867": {
            "columnName": "Grade",
            "templateColumnId": "959",
            "displayInWebsite": true,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107519": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107520": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107521": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107523": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107525": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107526": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107527": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107528": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107529": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                },
                "107530": {
                    "modeOfOperation": "grade",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_2506": "Total percentage"
                    },
                    "columnId": [
                        "col_2506"
                    ],
                    "columnCriteria": [],
                    "examCriteria": [],
                    "gradePatternId": 38,
                    "absentColumn": "col_5689",
                    "passColumn": "col_5153",
                    "gradePatternRangeColumn": ""
                }
            },
            "subCol": []
        },
        "col_6807": {
            "columnName": "Grade Points",
            "templateColumnId": "960",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "gradePoints",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_7867": "Grade"
                    },
                    "columnId": [
                        "col_7867"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_4773": {
            "columnName": "Credits",
            "templateColumnId": "961",
            "displayInWebsite": true,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "courseCredits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": [],
                    "columnId": [],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_6360": {
            "columnName": "Obtained Credits",
            "templateColumnId": "962",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "credits",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_5153": "Total pass"
                    },
                    "columnId": [
                        "col_5153"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        },
        "col_2676": {
            "columnName": "Credits Points",
            "templateColumnId": "963",
            "displayInWebsite": false,
            "marksConvertToCeil": false,
            "considerForGraceMarks": "false",
            "decimalMarksFlag": "false",
            "subjectConfiguration": {
                "107518": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107519": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107520": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107521": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107523": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107525": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107526": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107527": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107528": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107529": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                },
                "107530": {
                    "modeOfOperation": "creditsEarned",
                    "outOfValue": "",
                    "criteria": "",
                    "multiplyValue": "",
                    "selectedExamNameAndId": [],
                    "examId": [],
                    "selectedColumnNameAndId": {
                        "col_6807": "Grade Points",
                        "col_6360": "Obtained Credits"
                    },
                    "columnId": [
                        "col_6807",
                        "col_6360"
                    ],
                    "columnCriteria": [],
                    "examCriteria": []
                }
            },
            "subCol": []
        }
    },
    "studentName": "SUBRAT NAIK KUMAR",
    "isValidAdmissionNumber": "true",
    "resultStatus": "Published",
    "CGPA": 6.2,
    "customHeader": "<p style=\"text-align: center;\"><img src=\"https://s3.ap-south-1.amazonaws.com/vmedulife-s3/logo/04-04-2024-LOGO-1127-1712232326.jpg\" alt=\"\" width=\"257\" height=\"72\" /></p>\n<p style=\"text-align: center;\">School of Engineering and Technology, DRIEMS University</p>",
    "customFooter": "<table style=\"border-collapse: collapse; width: 70.02%; margin-left: auto; margin-right: auto;\">\n<tbody>\n<tr>\n<td style=\"width: 38%; text-align: left;\">\n<p>&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://s3.ap-south-1.amazonaws.com/vmedulife-s3/dp/DayanandaSarangi-65b2389552b45.png\" alt=\"\" width=\"166\" height=\"83\" /></p>\n<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: verdana, geneva, sans-serif; font-size: 16pt;\">Controller of Examinations</span></strong></span></p>\n</td>\n<td style=\"width: 37.2322%;\">&nbsp;</td>\n<td style=\"width: 24.7678%;\">\n<p>&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n</td>\n</tr>\n</tbody>\n</table>"
}



// pbtn.onclick = (e)=> {
let json =

    fjson
// JSON.parse(input.value)

let data = json['data']
let conf = json['configurationJson']

let keys = {}
let pCol = data[Object.keys(data)[0]]

let sgpa = 0.0
let cgpa = json['CGPA']
let name = json['studentName']

// let excludeList = (
    // "Grade Points"
// )

itable = '<tr>'

// delete (pCol['subjectName'])
// delete (pCol['courseChoice'])

for (const key in conf) {
    keys[key] = conf[key].columnName
}


for (const c in pCol) {
    let fid = keys[c]
    // if (!excludeList.includes(fid)) {
        if (fid) {
            itable += `<th>` + fid + `</th>`
        } else {
            itable += `<th>` + capitalizeAndSpace(c) + `</th>`
        }
    // }else {
    //     delete(pCol[c])
    // } 
}
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
        for (const c in pCol) {
            if (it[c]){
                let v;
                if(it[c]=="Pass")
                    v='green'
                else if(it[c]=='Fail')
                    v='red'

                itable += '<td class="'+v+'">' + it[c] + '</td>'
            }
            else
                itable += '<td> - </td>'
        }
    }

    itable += '</tr>'
}


table.innerHTML = itable


fdtl.innerText = `
Name:\t`+ name + `
SGPA:\t`+ sgpa + `
CGPA:\t`+ cgpa


// }



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

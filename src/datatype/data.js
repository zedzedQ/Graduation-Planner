import category from './enum';
const initialData = {
    cisCourses: {
        'cis210': {
            id: 'cis210',
            category: category.CIS_LOWER,
            courseTitle: 'Computer Science I',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter']
        },

        'cis211': {
            id: 'cis211',
            category: category.CIS_LOWER,
            courseTitle: 'Computer Science II',
            status: 1,
            preReq: ['cis210'],
            termAvailability: ['winter', 'spring']
        },

        'cis212': {
            id: 'cis212',
            category: category.CIS_LOWER,
            courseTitle: 'Computer Science III',
            status: 1,
            preReq: ['cis211'],
            termAvailability: ['winter', 'spring']
        },

        'cis313': {
            id: 'cis313',
            category: category.CIS_UPPER,
            courseTitle: 'Intermediate Data Structures',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter']
        },

        'cis314': {
            id: 'cis314',
            category: category.CIS_UPPER,
            courseTitle: 'Computer Organization',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter']
        },

        'cis315': {
            id: 'cis315',
            category: category.CIS_UPPER,
            courseTitle: 'Intermediate Algorithms',
            status: 1,
            preReq: ['cis313'],
            termAvailability: ['winter', 'spring']
        },

        'cis322': {
            id: 'cis322',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Software Engineering',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'spring']
        },

        'cis330': {
            id: 'cis330',
            category: category.CIS_UPPER,
            courseTitle: 'C/C++ & Unix',
            status: 1,
            preReq: ['cis314'],
            termAvailability: ['winter', 'spring']
        },

        'cis399': {
            id: 'cis399',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Data Science',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis401': {
            id: 'cis401',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS research',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis403': {
            id: 'cis403',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS thesis',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis404': {
            id: 'cis404',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Internships',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis405': {
            id: 'cis405',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS reading',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis406': {
            id: 'cis406',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS specific field studies',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis407': {
            id: 'cis407',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Internship',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis408': {
            id: 'cis408',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS workshop',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis409': {
            id: 'cis409',
            category: category.CIS_ELECTIVE,
            courseTitle: 'CIS practicum',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis410': {
            id: 'cis410',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Different Topics',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis413': {
            id: 'cis413',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Advanced Data Structures',
            status: 1,
            preReq: ['cis315'],
            termAvailability: ['winter']
        },

        'cis415': {
            id: 'cis415',
            category: category.CIS_UPPER,
            courseTitle: 'Operating Systems',
            status: 1,
            preReq: ['cis313', 'cis330'],
            termAvailability: ['fall', 'spring']
        },

        'cis420': {
            id: 'cis420',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Automata Theory',
            status: 1,
            preReq: ['cis212'],
            termAvailability: ['fall', 'winter', 'spring']
        },

        'cis422': {
            id: 'cis422',
            category: category.CIS_UPPER,
            courseTitle: 'Software Methodology',
            status: 1,
            preReq: ['cis313'],
            termAvailability: ['fall', 'winter', 'spring']
        },


        'cis425': {
            id: 'cis425',
            category: category.CIS_UPPER,
            courseTitle: 'Principles of Programming Languages',
            status: 1,
            preReq: ['cis315'],
            termAvailability: ['fall', 'spring']
        },

        'cis427': {
            id: 'cis427',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Logic',
            status: 1,
            preReq: ['cis315', 'cis425'],
            termAvailability: ['spring']
        },

        'cis431': {
            id: 'cis431',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Parallel Computing',
            status: 1,
            preReq: ['cis330'],
            termAvailability: ['winter']
        },

        'cis432': {
            id: 'cis432',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Intro to Computer Networks',
            status: 1,
            preReq: ['cis415'],
            termAvailability: ['fall']
        },

        'cis433': {
            id: 'cis433',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Computer & Network Security',
            status: 1,
            preReq: ['cis415'],
            termAvailability: ['winter']
        },

        'cis441': {
            id: 'cis441',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Intro Computer Graphics',
            status: 1,
            preReq: ['cis330'],
            termAvailability: ['winter']
        },

        'cis443': {
            id: 'cis443',
            category: category.CIS_ELECTIVE,
            courseTitle: 'User Interfaces',
            status: 1,
            preReq: ['cis313'],
            termAvailability: ['fall']
        },


        'cis445': {
            id: 'cis445',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Modeling and Simulation',
            status: 1,
            preReq: ['cis315', 'cis330'],
            termAvailability: ['spring']
        },

        'cis451': {
            id: 'cis451',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Database Processing',
            status: 1,
            preReq: ['cis313', 'cis314'],
            termAvailability: ['fall']
        },

        'cis453': {
            id: 'cis453',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Data Mining',
            status: 1,
            preReq: ['cis451'],
            termAvailability: ['spring']
        },

        'cis461': {
            id: 'cis461',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Compilers',
            status: 1,
            preReq: ['cis314', 'cis425'],
            termAvailability: ['fall']
        },

        'cis471': {
            id: 'cis471',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Introduction to Artificial Intelligence',
            status: 1,
            preReq: ['cis315'],
            termAvailability: ['fall', 'winter']
        },

        'cis472': {
            id: 'cis472',
            category: category.CIS_ELECTIVE,
            courseTitle: 'Machine Learning',
            status: 1,
            preReq: ['cis315'],
            termAvailability: ['spring']
        },

        'math231': {
            id: 'math231',
            category: category.CIS_LOWER,
            courseTitle: 'Discrete Mathematics I',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'math232': {
            id: 'math232',
            category: category.CIS_LOWER,
            courseTitle: 'Discrete Mathematics II',
            status: 1,
            preReq: ['math231'],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'mathGeneral1': {
            id: 'mathGeneral1',
            category: category.MATH,
            courseTitle: 'General Mathmatics',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'mathGeneral2': {
            id: 'mathGeneral2',
            category: category.MATH,
            courseTitle: 'General Mathmatics',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'mathSequence1': {
            id: 'mathSequence1',
            category: category.MATH,
            courseTitle: 'Mathmatics Sequence I',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'mathSequence2': {
            id: 'mathSequence2',
            category: category.MATH,
            courseTitle: 'Mathmatics Sequence II',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'mathUpper': {
            id: 'mathUpper',
            category: category.MATH,
            courseTitle: 'Upper-level Mathmatics',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'scienceSequence1': {
            id: 'scienceSequence1',
            category: category.SCIENCE,
            courseTitle: 'Science Sequence I',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'scienceSequence2': {
            id: 'scienceSequence2',
            category: category.SCIENCE,
            courseTitle: 'Science Sequence II',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'scienceSequence3': {
            id: 'scienceSequence3',
            category: category.SCIENCE,
            courseTitle: 'Science Sequence III',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'writing': {
            id: 'writing',
            category: category.WRITING,
            courseTitle: 'Writing 320/321',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },

        'non-cis': {
            id: 'non-cis',
            category: category.NONCIS,
            courseTitle: 'non-cis class',
            status: 1,
            preReq: [],
            termAvailability: ['fall', 'winter', 'summer', 'spring']
        },
    },

    columns: {
        'cisLower': {
            id: 'cisLower',
            title: 'CIS Lower-Division ',
            courseIds: ['cis210', 'cis211', 'cis212', 'math231', 'math232']
        },

        'cisUpper': {
            id: 'cisUpper',
            title: 'CIS Upper Division ',
            courseIds: ['cis313', 'cis314', 'cis315', 'cis330', 'cis415', 'cis422', 'cis425']
        },

        'cisElective': {
            id: 'cisElective',
            title: 'CIS Elective',
            courseIds: ['cis399', 'cis401', 'cis403', 'cis404', 'cis405', 'cis406', 'cis407', 'cis408', 'cis409', 'cis410', 'cis413', 'cis420', 'cis427', 'cis431', 'cis432', 'cis433', 'cis441', 'cis443', 'cis445', 'cis451', 'cis453', 'cis461', 'cis471', 'cis472']
        },

        'math': {
            id: 'math',
            title: 'Math',
            courseIds: ['mathGeneral1', 'mathGeneral2', 'mathSequence1', 'mathSequence2', 'mathUpper']
        },

        'science': {
            id: 'science',
            title: 'science',
            courseIds: ['scienceSequence1', 'scienceSequence2', 'scienceSequence3']
        },

        'writing': {
            id: 'writing',
            title: 'writing 320/321',
            courseIds: ['writing'],
        },

        'Term1': {
            id: 'Term1',
            title: 'Term1',
            courseIds: []
        },

        'Term2': {
            id: 'Term2',
            title: 'Term2',
            courseIds: []
        },

        'Term3': {
            id: 'Term3',
            title: 'Term3',
            courseIds: []
        },

        'columnTaken': {
            id: 'columnTaken',
            title: 'taken courses',
            courseIds: [],

        'non-cis':{
            id: "non-cis",
            title: 'non cis courses',
            courseIds: [],
        }
        }
    },

    courseStandard: {
        'cisLower': ['cis210', 'cis211', 'cis212', 'math231', 'math232'],
        'cisUpper': ['cis313', 'cis314', 'cis315', 'cis330', 'cis415', 'cis422', 'cis425'],
        'cis_elective': ['cis322', 'cis399', 'cis401', 'cis403', 'cis404', 'cis405', 'cis406', 'cis407', 'cis408', 'cis409', 'cis410', 'cis423', 'cis420', 'cis422', 'cis427', 'cis431', 'cis432', 'cis433', 'cis441', 'cis443', 'cis445', 'cis451', 'cis453', 'cis461', 'cis471', 'cis472'],
        'science': ['scienceSequence1', 'scienceSequence2', 'scienceSequence3'],
        'math': ['mathGeneral1', 'mathGeneral2', 'mathSequence1', 'mathSequence2', 'mathUpper'],
        'writing': ['writing'],
    },

    columnOrder: ['cisLower', 'cisUpper', 'cisElective', 'science', 'math', 'writing', 'Term1', 'Term2', 'Term3'],
    welcomeOrder: ['cisLower', 'cisUpper', 'cisElective', 'science', 'math', 'writing', 'columnTaken']

}

export default initialData;
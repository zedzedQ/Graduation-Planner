const Course = require('./dataCourse.js');

/*
constructor(
	id,
	courseNum, 
	courseTitle, 
	status, 
	prerequisite, 
	termAvailability
	);
*/

const cis210 = new Course(
	"cis210",
	"210", 
	"Basic concepts and practices of computer science (basic Python).", 
	1, 
	[], 
	["fall", "winter"]
	);
const cis211 = new Course(
	"cis211",
	"211",
    "Basic concepts and practices of computer science (extend Python).",
	1, 
	["cis210"], 
	["winter", "spring"]
	);
const cis212 = new Course(
	"cis212", 
	"212", 
	"Basic concepts and practices of computer science (basic language C).", 
	1, 
	["cis211"], 
	["fall", "spring"]
	);
const cis313 = new Course(
	"cis313", 
	"313", 
	"Design and analysis of data structures as means of engineering efficient software.", 
	1, 
	["cis212"], 
	["fall", "winter"]
	);
const cis314 = new Course(
	"cis314", 
	"314", 
	"Introduction to computer organization and instruction-set architecture--digital logic design, binary arithmetic, design of central processing unit and memory, machine-level programming.", 
	1, 
	["cis212"], 
	["fall", "winter"]
	);
const cis315 = new Course(
	"cis315", 
	"315", 
	"Algorithm design, worst-case and average-behavior analysis, correctness, computational complexity.", 
	1, 
	["cis313"], 
	["winter", "spring"]
	);
const cis322 = new Course(
	"cis322", 
	"322", 
	"A project-intensive introduction to software engineering intended to build skills, knowledge, and habits of mind that prepare students for 400-level computer science courses, internships, and other software.", 
	1, 
	["cis212"], 
	["fall", "spring"]
	);
const cis330 = new Course(
	"cis330", 
	"330", 
	"Practical software design and programming activities in a C/C++ and Unix environment, with emphasis on the details of C/C++ and good programming style and practices.", 
	1, 
	["cis314"], 
	["winter", "spring"]
	);
const cis399 = new Course(
	"cis399", 
	"399", 
	"Different Topic", 
	1, 
	["cis212"], 
	["fall", "winter", "spring"]
	);
const cis407 = new Course(
	"cis407", 
	"407", 
	"This seminar focuses on careers and internships for CIS students. It will cover resume preparation and polishing, interviewing skills, and will have talks by local companies on work environments, career choices, internship opportunities, and how best to prepare for a career in Computer Science. We will also read articles about the current job market and CS related job prospects.", 
	1, 
	["cis212"], 
	["fall", "winter", "spring"]
	);
const cis415 = new Course(
	"cis415", 
	"415", 
	"Principles of operating system design. Process and memory management, concurrency, scheduling, input-output and file systems, security.", 
	1, 
	["cis313", "cis330"], 
	["fall", "spring"]
	);
const cis425 = new Course(
	"cis425", 
	"425", 
	"Syntax and semantics. Scope rules, environments, stores, denoted and expressed values, procedures, and parameters. Definitional interpreters. Types, overloading, parametric polymorphism, and inheritance. Varieties of abstraction.", 
	1, 
	["cis315"], 
	["fall", "spring"]
	);
const cis410 = new Course(
	"cis410", 
	"410", 
	"Different Topics.", 
	1, 
	["cis212"], 
	["fall", "winter", "spring"]
	);
const cis413 = new Course(
	"cis413", 
	"413", 
	"Complex structures, storage management, sorting and searching, hashing, storage of texts, and information compression.", 
	1, 
	["cis315"], 
	["winter"]
	);
const cis420 = new Course(
	"cis420", 
	"420", 
	"Provides a mathematical basis for computability and complexity. Models of computation, formal languages, Turing machines, solvability. Nondeterminism and complexity classes.", 
	1, 
	["cis315"], 
	["spring"]
	);
const cis422 = new Course(
	"cis422",
	"422",
	"Technical and nontechnical aspects of software development, including specification, planning, design, development, management and maintenance of software projects. Student teams complete projects.", 
	1, 
	["cis313"], 
	["fall", "winter", "spring"]
	);
const cis427 = new Course(
	"cis427", 
	"427", 
	"Basic notions of logic: propositional logic, first-order logic, Hilbert systems, sequent calculus, natural deduction. Soundness, completeness, undecidability. Current research in logic frameworks, automated deduction, Curry-Howard isomorphism.", 
	1, 
	["cis315", "cis425"], 
	["spring"]
	);
const cis431 = new Course(
	"cis431", 
	"431", 
	"Parallel architecture, theory, algorithms, and programming with emphasis on parallel programming, focusing on models, languages, libraries, and runtime systems.", 
	1, 
	["cis330"], 
	["winter"]
	);
const cis432 = new Course(
	"cis432", 
	"432", 
	"Principles of computer network design. Link technologies, packet switching, routing, inter-networking, reliability. Internet protocols. Programming assignments focus on protocol design.", 
	1, 
	["cis415"], 
	["fall"]
	);
const cis433 = new Course(
	"cis433", 
	"433", 
	"Security for various aspects of computers and networks. Elementary cryptography, program security, trusted operating systems, network security, privacy, and legal and ethical issues.", 
	1, 
	["cis415"], 
	["winter"]
	);
const cis441 = new Course(
	"cis441", 
	"441", 
	"Introduction to the hardware, geometrical transforms, interaction techniques, and shape representation schemes that are important in interactive computer graphics. Programming assignments using contemporary graphics hardware and software systems.", 
	1, 
	["cis330"],
	["winter"]
	);
const cis443 = new Course(
	"cis443", 
	"443", 
	"Introduction to user interface software engineering. Emphasis on theory of interface design, understanding the behavior of the user, and implementing programs on advanced systems.", 
	1, 
	["cis313"], 
	["fall"]);
const cis445 = new Course(
	"cis445", 
	"445", 
	"Theoretical foundations and practical problems for the modeling and computer simulation of discrete and continuous systems. Simulation languages, empirical validation, applications in computer science.", 
	1, 
	["cis315", "cis330"], 
	["spring"]);
const cis451 = new Course(
	"cis451", 
	"451", 
	"Fundamental concepts of DBMS. Data modeling, relational models and normal forms. File organization and index structures. SQL, embedded SQL, and concurrency control.", 
	1, 
	["cis313", "cis314"], 
	["fall"]
	);
const cis453 = new Course(
	"cis453", 
	"453", 
	"Databases, machine learning, artificial intelligence, statistics, and data visualization. Examines data warehouses, data preprocessing, association and classification rule mining, and cluster analysis.", 
	1, 
	["cis451"], 
	["spring"]
	);
const cis461 = new Course(
	"cis461", 
	"461", 
	"Lexical analysis, parsing, attribution, code generation. (cis420 strongly recommended)", 
	1, 
	["cis314", "cis425"], 
	["fall"]
	);
const cis471 = new Course(
	"cis471", 
	"471", 
	"Basic themes, issues, and techniques of artificial intelligence, including agent architecture, knowledge representation and reasoning, problem solving and planning, game playing, and learning.", 
	1, 
	["cis315"], 
	["fall", "winter"]
	);
const cis472 = new Course(
	"cis472", 
	"472", 
	"A broad introduction to machine learning and its established algorithms. Topics include concept learning, decision trees, neural network.", 
	1, 
	["cis315"], 
	["spring"]
	);

const mathGeneral1 = new Course (
	"mathGeneral1",
	"1",
	"General Mathmatic 1",
	1,
	[],
	["fall", "winter", "spring"]
	);
const mathGeneral2 = new Course (
	"mathGeneral2",
	"2",
	"General Mathmatic 2",
	1,
	[],
	["fall", "winter", "spring"]
	);
const mathSequence1 = new Course (
	"mathSequence1",
	"1",
	"Sequence Mathmatic 1",
	1,
	[],
	["fall", "winter", "spring"]
	);
const mathSequence2 = new Course (
	"mathSequence2",
	"2",
	"Sequence Mathmatic 2",
	1,
	["mathSequence1"],
	["fall", "winter", "spring"]
	);
const mathUpper = new Course (
	"mathUpper",
	"1",
	"Upper Mathmatic",
	1,
	[],
	["fall", "winter", "spring"]
	);
const scienceSequence1 = new Course (
	"scienceSequence1",
	"1",
	"Sequence science 1",
	1,
	[],
	["fall", "winter", "spring"]
	);
const scienceSequence2 = new Course (
	"scienceSequence2",
	"2",
	"Sequence science 2",
	1,
	["scienceSequence1"],
	["fall", "winter", "spring"]
	);
const scienceSequence3 = new Course (
	"scienceSequence3",
	"3",
	"Sequence science 3",
	1,
	["scienceSequence2"],
	["fall", "winter", "spring"]
	);
const writing = new Course(0, 0, 0, 1, 0, ["fall", "winter", "spring"]);
const nonCis = new Course(0, 0, 0, 1, 0, ["fall", "winter", "spring"]);

const courseDict = {
	"cis_lower": [cis210, cis211, cis212],  
    "cis_upper":[cis313, cis314, cis315, cis330, cis415, cis422, cis425],
    "cis_elective":[cis399, cis410],
    "science": [scienceSequence1, scienceSequence2, scienceSequence3], 
    "math": [mathGeneral1, mathGeneral2, mathSequence1, mathSequence2, mathUpper], 
    "writing": [writing]
}；

const dataDict = {
	"cis210": cis210, 
    "cis211": cis211,
    "cis212": cis212,
    "cis313": cis313,
    "cis314": cis314,
    "cis315": cis315,
    "cis322": cis322,
    "cis330": cis330,
    "cis399": cis399,
    "cis407": cis407,
    "cis415": cis415,
    "cis425": cis425,
    "cis410": cis410,
    "cis413": cis413,
    "cis420": cis420,
    "cis422": cis422,
    "cis427": cis427,
    "cis431": cis431,
    "cis432": cis432,
    "cis433": cis433,
    "cis441": cis441,
    "cis443": cis443,
    "cis445": cis445,
    "cis451": cis451,
    "cis453": cis453,
    "cis461": cis461,
    "cis471": cis471,
    "cis472": cis472,
    "mathGeneral1": mathGeneral1,
    "mathGeneral2": mathGeneral2,
    "mathSequence1": mathSequence1,
    "mathSequence2": mathSequence2,
    "mathUpper": mathUpper,
    "scienceSequence1", scienceSequence1,
    "scienceSequence2", scienceSequence2,
    "scienceSequence3", scienceSequence3
};


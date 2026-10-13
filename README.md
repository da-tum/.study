# Academic Study Portal | Wiki Suite

A premium, high-fidelity curation of visual notes, interactive calculators, timed exam simulators, and question banks for computer science academic preparation.

## Academic Architecture & Term Coverage

### Semester I
- 🐍 **Python Programming**: Python script analysis (GradeBook & Library managers), UNIX shell automations, and Pygame adventure game breakdowns.
- 💻 **Web Development I**: Foundational client-side HTML/CSS architectures and browser runtime labs.
- 🛡️ **CSFCP**: Cybersecurity fundamentals and core computing principles.

### Semester II
- 🌳 **Data Structures**: Detailed interactive guides for linear and non-linear data structures, mock viva questions, and verified algorithms.
- ⚛️ **Web Development II**: Advanced JavaScript and React architecture documentation, array helper libraries, and written exam materials.
- 🕉️ **Indian Philosophy**: Syllabus mindmaps, Sanskrit vocabulary lexicons, timed exam simulators, and Text-to-Speech narration.
- 🧮 **Computational Mathematics**: Lazy-loaded formula sheets, fully resolved assignments, and step-by-step exam blueprints.
- 🧪 **Engineering Chemistry**: Interactive solvers for EDTA hardness, bomb calorimeters, and galvanic EMF, alongside solved past papers.

### Semester III
- 🗄️ **Database Management Systems (DBMS)**: Comprehensive university preparation suite featuring 87 verified question bank solutions across 3 segregations, verbatim transcriptions of 5 classroom whiteboard drill sheets (`sec-e-images`), OCR handwritten notes bifurcation, 7 master `;short-revision;` modules, and an interactive BCNF Normalization Workbench.
- 📊 **Design & Analysis of Algorithms (DAA)**: Asymptotic analysis, Master Theorem recurrence solvers, dynamic programming matrix visualizers, greedy matroids, and classroom problem rubrics.
- ⚔️ **Competitive Coding I (CC-1)**: Problem-solving patterns with dual-column layouts contrasting invariant-heavy written code with concise competitive Python implementations.
- 💻 **Nand to Tetris (N2T)**: Hardware logic gate synthesis, ALU datapath, sequential chips, and CPU architecture.
- 🌐 **Web Development III**: Fullstack engineering, Next.js App Router, Express REST APIs, JWT authentication, and Prisma ORM.
- 🗣️ **Verbal Ability & Professional Communication (VA)**: Syntax precision, high-frequency vocabulary etymology, and critical reasoning.
- 📜 **Indian Knowledge Systems (OEIKS001)**: Ancient sciences, mathematics derivations, metallurgy, and Paninian grammar.

## Project Structure

```
.study/
├── index.html            # Main multi-term selection portal
├── nav-header.css        # Shared global navigation bar stylesheet
├── nav-header.js         # Shared global dynamic navigation bar engine
├── sem1/                 # Semester I discipline portals
│   ├── python/
│   ├── web-dev-1/
│   └── csfcp/
├── sem2/                 # Semester II discipline portals
│   ├── chem/
│   ├── comp-maths/
│   ├── ds/
│   ├── philosophy/
│   └── web-dev/
└── sem3/                 # Semester III discipline portals
    ├── index.html        # Semester III master dashboard
    ├── readme.md         # Semester III technical architecture guide
    ├── CC-1/             # Competitive Coding I
    ├── DAA/              # Design & Analysis of Algorithms
    ├── DBMS/             # Relational Database Management Systems
    │   ├── index.html    # Master DBMS Study & Exam Suite
    │   └── assets/       # Classroom note scans & sec-e drill sheets
    ├── N2T/              # Nand to Tetris Hardware Systems
    ├── OEIKS001/         # Indian Knowledge Systems
    ├── VA/               # Verbal Ability & Aptitude
    └── Web-Dev-3/        # Fullstack Web Development III
```

## Getting Started

To view the portal locally, serve the directory using any static web server.

### Option 1: Python HTTP Server
Run the following command from the root directory:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

### Option 2: Node http-server
Install and run `http-server`:
```bash
npx http-server -p 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

## License

This project is licensed under the Apache 2.0 License - see the `LICENSE` file for details.

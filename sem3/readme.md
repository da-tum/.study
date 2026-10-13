# Semester III Academic Portal &amp; Study Suite

Comprehensive academic preparation repository for Semester III Computer Science &amp; Engineering. Features interactive algorithmic simulators, transcribed classroom lecture notes, official teacher answering rubrics, and high-yield 20-mark university exam blueprints.

---

## 📚 Subject Architecture &amp; Coverage

### 1. Design &amp; Analysis of Algorithms (DAA)
- **Directory**: [`./DAA/`](file:///c:/Users/USER/Desktop/Extras/da-tum/.study/sem3/DAA/index.html)
- **Syllabus Coverage**:
  - **Unit 1 (12 Contact Hours)**: Mathematical foundations of algorithm analysis, formal limit tests ($o, O, \Theta, \Omega, \omega$), growth hierarchy, recurrence solving (Master Theorem 3 cases + logarithmic extension), comparison sort lower bound ($\Omega(n \log n)$ decision tree), non-comparison sorting (Counting, Radix), searching (Binary, Interpolation $O(\log \log n)$), universal hashing families ($\mathcal{H}_{p,m}$), amortized analysis (Aggregate, Accounting, Potential method $\Phi$ with dynamic array doubling proof), randomised algorithms (QuickSelect expected $O(n)$, Karger's min-cut contraction probability $\ge \frac{2}{n(n-1)}$), cache-aware &amp; cache-oblivious architectures (locality, cache line transfers).
  - **Unit 2 (10 Contact Hours)**: Divide &amp; Conquer (Closest pair of points in 2D with 7-point strip proof, Convex hull Graham's scan with orientation cross-product), Greedy optimization &amp; matroids (Huffman prefix codes, Activity selection earliest finish time proof, Kruskal's with DSU vs Prim's with Min-Heap, Fractional knapsack), Dynamic Programming (0/1 Knapsack Bellman recurrence &amp; backtrack, Matrix Chain Multiplication $O(n^3)$ diagonal sweep, Longest Common Subsequence, Floyd-Warshall all-pairs shortest paths), Recursive call stack auxiliary space bounds.
- **Classroom Notes Transcriptions**:
  - Scans from `assets/image1.jpeg` through `image5.jpeg` transcribed with dedicated high-resolution lightbox modal.
  - Teacher's 5-point university answering rubric (Problem Definition [2m], Algorithmic Approach [4m], Pseudocode [4m], Trace &amp; Table [6m], Complexities [4m]) enforced across all 7 major 20-mark model answers.
- **Interactive Solvers**:
  - **Master Theorem Recurrence Solver**: Real-time evaluation of $T(n) = a T(n/b) + \Theta(n^k \log^p n)$ across all cases with presets for MergeSort, BinarySearch, Strassen, Karatsuba.
  - **0/1 Knapsack DP Table Simulator**: Live generation of the $(n+1) \times (W+1)$ Bellman matrix, interactive cell-level formula inspection, optimal item backtrack path tracing, and verified classroom instance ($W=8, w=[3,4,6,5], p=[2,3,1,4]$).

### 2. Competitive Coding I (CC-1)
- **Directory**: [`./CC-1/`](file:///c:/Users/USER/Desktop/Extras/da-tum/.study/sem3/CC-1/index.html)
- **Coverage**: Sessions 1 through 12 master dataset, dual-column layout contrasting:
  - **Main Code**: Pure algorithmic function without backend `__main__` driver wrappers, annotated with step-by-step invariants for written exams.
  - **Shortest Method**: Built-in Python standard library functions (`collections.Counter`, `math.isqrt`, `sys.stdin.read`, `heapq`, `bisect`) for competitive time efficiency.
  - Time &amp; Space complexity badges for every approach.

### 3. Database Management Systems (DBMS)
- **Directory**: [`./DBMS/`](file:///c:/Users/USER/Desktop/Extras/da-tum/.study/sem3/DBMS/index.html)
- **Syllabus &amp; Exam Coverage**:
  - **Relational Algebra &amp; Formal Modeling**: Select ($\sigma$), Project ($\pi$), Cartesian product ($\times$), Set operations, Natural &amp; Theta Joins ($\bowtie$), Division ($\div$), Tuple and Domain Relational Calculus.
  - **Entity-Relationship &amp; Enhanced ER (EER)**: Entities, weak entities and identifying relationships, composite/multivalued/derived attributes, cardinality ratios ($1:1, 1:N, M:N$), participation constraints (total vs partial), generalization/specialization hierarchies (disjoint/overlapping, total/partial), attribute inheritance, and step-by-step ER-to-Relational mapping algorithms.
  - **Schema Normalization**: Functional Dependencies (FDs), Armstrong's Axioms &amp; formal proofs, attribute closure computation, candidate key discovery, minimal (canonical) cover algorithms, 1NF, 2NF (elimination of partial dependencies), 3NF (transitive dependencies), Boyce-Codd Normal Form (BCNF), lossless-join decomposition tests, and dependency preservation tests.
  - **Advanced SQL &amp; Query Optimization**: DDL, DML, DCL, integrity constraints (PK, FK, UNIQUE, CHECK, NOT NULL), subqueries (correlated vs non-correlated), advanced joins (INNER, LEFT, RIGHT, FULL OUTER), aggregation with `GROUP BY` and `HAVING`, window ranking functions (`RANK()`, `DENSE_RANK()`, `ROW_NUMBER()`), views &amp; security, and index architectures (clustered vs non-clustered, B+ Tree indexing).
  - **Transaction Processing &amp; Concurrency Control**: ACID properties (Atomicity, Consistency, Isolation, Durability), serializability (conflict vs view), precedence graph cycle detection, Strict Two-Phase Locking (2PL), deadlock prevention/detection, write-ahead logging (WAL), and undo/redo recovery.
- **Classroom Notes &amp; Optical Bifurcation**:
  - High-resolution scans from `assets/image.png` (lecture whiteboard note with 5 essential exam pillars) and `assets/sec-e-images/` (5 complete classroom problem-solving drill sheets) transcribed verbatim.
  - Teacher's 10-mark model answers with derivation steps and verification rubrics.
- **Interactive Workbench &amp; Revision**:
  - **Interactive Normalization Workbench**: Dynamic FD rule tester, anomaly explanations, and runnable SQL migration previews across 1NF, 2NF, 3NF, BCNF, and ACID transaction isolation.
  - **7 Master `;short-revision;` Modules**: Normalization rule tables, BCNF decomposition guide, ANSI/SPARC 3-level data independence, candidate key algorithms, SQL commands cheatsheet, and data models matrix.
- **Question Bank Engine**:
  - 87 verified exam questions across Segregation 1 (Teacher Suggested), Segregation 2 (Mid-Term Practice Paper), and Segregation 3 (University Question Bank Units 1 &amp; 2) with real-time multi-tag filtering, keyword search, and solution toggling.

### 4. Additional Semester III Core Disciplines
- **N2T (Nand to Tetris)**: Hardware systems, logic gates, ALU datapath, sequential chips, CPU architecture, Hack machine language, assembly compilers.
- **Web-Dev-3**: Advanced fullstack engineering, Next.js App Router, Express REST APIs, JWT authentication, Prisma ORM, state management.
- **VA &amp; OEIKS001**: Verbal Ability and Indian Knowledge Systems.

---

## 🎨 Theme System: Soft Twilight Matte

All Semester III portals adhere to the unified **Soft Twilight** design tokens:
- **Canvas Base**: `#1e232d` (Deep Graphite Slate)
- **Surface Elevation**: `#262c37`
- **Card Background**: `#2a313e`
- **Primary Text**: `#f1f5f9` (Crisp Off-White)
- **Body Text**: `#cbd5e1` (Soft Slate)
- **Champagne Gold Accents**: `#e5c07b` (Subtle Academic Highlights)
- **Mint Green Accents**: `#86efac`
- **Sky Blue Accents**: `#93c5fd`
- **Coral Red Accents**: `#f87171`
- Zero pitch black (`#000000`) and zero harsh neon saturation.

---

## 🚀 Running Locally

Serve the `.study` root directory using any local static web server:

```bash
# Using Python
python -m http.server 8000

# Using Node http-server
npx http-server -p 8000
```

Open [http://localhost:8000/sem3/](http://localhost:8000/sem3/) to launch the Semester III Dashboard.

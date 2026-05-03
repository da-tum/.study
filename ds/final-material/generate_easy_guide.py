import os, re

BASE = r"C:\Users\USER\Desktop\Extras\.study\ds\final-material"
PROGRAMS = os.path.join(BASE, "programs")
OUT = os.path.join(BASE, "ULTIMATE_DS_GUIDE.html")

MD_FILES = [
    "00_MASTER_PLAN.md",
    "01_unit1_foundations.md",
    "02_unit2_linear_ds.md",
    "03_unit3_sorting.md",
    "04_unit4_nonlinear.md",
    "05_viva_questions.md",
    "CHEATSHEET.md",
]

PY_FILES = [
    "01_linked_list.py",
    "02_queue.py",
    "03_infix_to_postfix.py",
    "04_sorting.py",
    "05_bst.py",
]

def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def md_to_html(text):
    lines = text.split("\n")
    out = []
    in_code = False
    in_ul = False
    in_ol = False
    in_table = False
    table_header_done = False

    def close_lists():
        nonlocal in_ul, in_ol, in_table, table_header_done
        if in_ul:   out.append("</ul>"); in_ul = False
        if in_ol:   out.append("</ol>"); in_ol = False
        if in_table:
            out.append("</tbody></table>"); in_table = False; table_header_done = False

    def inline(s):
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
        s = re.sub(r"\*(.+?)\*",  r"<em>\1</em>", s)
        return s

    for line in lines:
        stripped = line.rstrip()

        # fenced code blocks
        if stripped.startswith("```"):
            if in_code:
                out.append("</pre>"); in_code = False
            else:
                close_lists()
                lang = stripped[3:].strip() or "text"
                out.append(f'<pre class="code-block">'); in_code = True
            continue

        if in_code:
            out.append(esc(stripped)); continue

        if not stripped:
            close_lists(); out.append("<br>"); continue

        if stripped.startswith("# "):
            close_lists(); out.append(f"<h1>{inline(esc(stripped[2:]))}</h1>")
        elif stripped.startswith("## "):
            close_lists(); out.append(f"<h2>{inline(esc(stripped[3:]))}</h2>")
        elif stripped.startswith("### "):
            close_lists(); out.append(f"<h3>{inline(esc(stripped[4:]))}</h3>")
        elif stripped.startswith("#### "):
            close_lists(); out.append(f"<h4>{inline(esc(stripped[5:]))}</h4>")
        elif stripped.startswith("> "):
            close_lists(); out.append(f'<div class="tip">{inline(esc(stripped[2:]))}</div>')
        elif stripped.startswith("| "):
            cells = [c.strip() for c in stripped.split("|") if c.strip()]
            if re.match(r"^[\-\| :]+$", stripped):
                continue
            if not in_table:
                out.append('<table><thead><tr>')
                for c in cells: out.append(f"<th>{inline(esc(c))}</th>")
                out.append('</tr></thead><tbody>')
                in_table = True; table_header_done = True
                continue
            out.append("<tr>" + "".join(f"<td>{inline(esc(c))}</td>" for c in cells) + "</tr>")
        elif re.match(r"^[-*] ", stripped):
            if not in_ul: close_lists(); out.append("<ul>"); in_ul = True
            out.append(f"<li>{inline(esc(stripped[2:]))}</li>")
        elif re.match(r"^\d+\. ", stripped):
            if not in_ol: close_lists(); out.append("<ol>"); in_ol = True
            out.append(f"<li>{inline(esc(re.sub(r'^\d+\. ', '', stripped)))}</li>")
        elif stripped.startswith("**Q:") or stripped.startswith("Q:"):
            close_lists()
            out.append(f'<p class="vq">{inline(esc(stripped))}</p>')
        elif stripped.startswith("A:"):
            out.append(f'<p class="va">{inline(esc(stripped))}</p>')
        else:
            close_lists()
            out.append(f"<p>{inline(esc(stripped))}</p>")

    close_lists()
    return "\n".join(out)


CSS = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Fira+Code:wght@400;500&display=swap');

*{box-sizing:border-box;margin:0;padding:0}

:root{
  --bg:#0d1117;
  --surface:#161b22;
  --surface2:#21262d;
  --border:#30363d;
  --text:#c9d1d9;
  --text-dim:#8b949e;
  --primary:#58a6ff;
  --green:#3fb950;
  --yellow:#d29922;
  --red:#f85149;
  --purple:#bc8cff;
  --orange:#ffa657;
  --pink:#f778ba;
}

body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;font-size:17px}

.container{max-width:860px;margin:0 auto;padding:40px 20px}

/* ---- COVER ---- */
.cover{text-align:center;padding:60px 0 40px}
.cover h1{font-size:3rem;font-weight:800;background:linear-gradient(135deg,var(--primary),var(--purple),var(--pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1.2;margin-bottom:16px}
.cover p{color:var(--text-dim);font-size:1.1rem;max-width:600px;margin:0 auto 30px}
.toc{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:left;max-width:500px;margin:0 auto}
.toc h3{color:var(--primary);font-size:1rem;margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em}
.toc a{display:block;color:var(--text-dim);text-decoration:none;padding:4px 0;border-bottom:1px solid var(--border);font-size:.95rem}
.toc a:hover{color:var(--primary)}
.toc a:last-child{border-bottom:none}

/* ---- CHAPTER HEADER ---- */
.chapter{background:linear-gradient(135deg,var(--surface),var(--surface2));border:1px solid var(--border);border-radius:16px;padding:30px;margin:40px 0 0}
.chapter-label{display:inline-block;background:var(--primary);color:#000;font-weight:700;font-size:.75rem;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px}
.chapter h2{font-size:2rem;font-weight:800;color:#fff;line-height:1.2;margin-bottom:8px}
.chapter p.sub{color:var(--text-dim);font-size:.95rem}

/* ---- CARDS ---- */
.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin:20px 0}
.card.green{border-color:var(--green)}
.card.yellow{border-color:var(--yellow)}
.card.red{border-color:var(--red)}
.card.purple{border-color:var(--purple)}

/* ---- ELI5 BOX ---- */
.eli5{background:rgba(63,185,80,.08);border-left:4px solid var(--green);border-radius:0 10px 10px 0;padding:16px 20px;margin:20px 0;font-size:.97rem}
.eli5 strong{color:var(--green)}

/* ---- TIP / NOTE ---- */
.tip{background:rgba(210,153,34,.08);border-left:4px solid var(--yellow);padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0;font-size:.92rem}

/* ---- CODE ---- */
pre.code-block{background:#000;border:1px solid var(--border);border-radius:10px;padding:20px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;color:#abb2bf;line-height:1.7;margin:18px 0}
code{font-family:'Fira Code',monospace;background:rgba(88,166,255,.1);color:var(--primary);padding:2px 6px;border-radius:5px;font-size:.88em}

/* ---- VIVA ---- */
.vq{color:var(--yellow);font-weight:700;margin:16px 0 4px}
.va{color:var(--text);border-left:3px solid var(--border);padding-left:14px;margin-bottom:18px;font-size:.95rem}

/* ---- TABLES ---- */
table{width:100%;border-collapse:collapse;margin:18px 0;font-size:.9rem}
th{background:var(--surface2);color:var(--primary);padding:10px 14px;border:1px solid var(--border);text-align:left}
td{padding:9px 14px;border:1px solid var(--border)}
tr:hover td{background:var(--surface2)}

h1{font-size:1.8rem;color:var(--primary);margin:30px 0 10px}
h2{font-size:1.4rem;color:var(--orange);margin:24px 0 8px;border-bottom:1px solid var(--border);padding-bottom:6px}
h3{font-size:1.15rem;color:var(--purple);margin:18px 0 6px}
h4{font-size:1rem;color:var(--green);margin:12px 0 4px}
p{margin:8px 0}
ul,ol{padding-left:24px;margin:8px 0}
li{margin:4px 0}
strong{color:#fff}

/* ---- DIVIDER ---- */
.divider{border:none;border-top:2px solid var(--border);margin:50px 0}

/* ---- PRINT ---- */
@media print{
  body{background:#fff;color:#000;font-size:13px}
  .cover h1{-webkit-text-fill-color:#000;color:#000}
  .card,.chapter{border:1px solid #ccc;box-shadow:none;page-break-inside:avoid}
  pre.code-block{background:#f5f5f5;color:#333;border:1px solid #ccc;white-space:pre-wrap;word-break:break-all}
  .eli5{background:#f0fff0;border-left:4px solid green}
  .tip{background:#fffbea;border-left:4px solid #c0a000}
  h1,h2,h3,h4{color:#000}
  code{background:#eee;color:#333}
  .vq{color:#b45309}
  a{color:#000;text-decoration:none}
}
</style>
"""

LEARN_SECTIONS = {
    "linked_list": """
<div class='card purple'>
<strong>🧠 HOW TO LEARN THIS CODE — 3 Steps</strong><br><br>
<strong>Step 1: Understand the Node first.</strong> Before anything, burn this into your brain:<br>
<code>self.data = data</code> — stores the value<br>
<code>self.next = None</code> — pointer to next node (None = end of list)<br><br>
<strong>Step 2: Learn Insert at Head (the easiest operation):</strong><br>
<code>new_node.next = self.head</code> &nbsp;← new node points to OLD head<br>
<code>self.head = new_node</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← head now points to NEW node<br>
<em>Just 2 lines. That's it.</em><br><br>
<strong>Step 3: Learn Traversal (used in EVERY other operation):</strong><br>
<code>current = self.head</code><br>
<code>while current:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;print(current.data)</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;current = current.next</code><br><br>
<strong>Memory Trick:</strong> Think HEAD → NODE → NODE → None as a treasure hunt. You start at the HEAD and keep following the "next" clue until you hit None (dead end).
</div>
""",
    "queue": """
<div class='card purple'>
<strong>🧠 HOW TO LEARN THIS CODE — 3 Steps</strong><br><br>
<strong>Step 1: Just use Python's deque. It's the right way.</strong><br>
<code>from collections import deque</code><br>
<code>q = deque()</code><br><br>
<strong>Step 2: Two operations only. Remember them as REAR/FRONT:</strong><br>
<code>q.append(x)</code> &nbsp;&nbsp;&nbsp;← add to REAR (enqueue)<br>
<code>q.popleft()</code> &nbsp;&nbsp;← remove from FRONT (dequeue)<br><br>
<strong>Step 3: Know the difference from a list.pop():</strong><br>
<code>list.pop(0)</code> = O(n) — slow! Shifts all elements<br>
<code>deque.popleft()</code> = O(1) — instant! That's why we use deque.<br><br>
<strong>Memory Trick:</strong> "append = join the queue at the back. popleft = served at the counter."
</div>
""",
    "infix_postfix": """
<div class='card purple'>
<strong>🧠 HOW TO LEARN THIS CODE — The 4-Rule Skeleton</strong><br><br>
Don't memorize the whole code. Memorize these 4 conditions inside the loop:<br><br>
<code>for char in expression:</code><br>
<code>&nbsp;&nbsp;if is_operand(char):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output.append(char)</code><br>
<code>&nbsp;&nbsp;elif char == '(':&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stack.append(char)</code><br>
<code>&nbsp;&nbsp;elif char == ')':&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# pop till '('</code><br>
<code>&nbsp;&nbsp;else: (operator)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# pop >= prec, then push</code><br>
<code>while stack: output.append(stack.pop())&nbsp;&nbsp;# flush remaining</code><br><br>
<strong>The ONE Key Line (heart of the algorithm):</strong><br>
<code>while stack and precedence(stack[-1]) >= precedence(char):</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;output.append(stack.pop())</code><br>
This pops stronger operators before pushing the current one.<br><br>
<strong>Memory Trick:</strong> "OPERAND goes out, BRACKET controls flow, OPERATOR fights for dominance."
</div>
""",
    "sorting": """
<div class='card purple'>
<strong>🧠 HOW TO LEARN THE 3 SORTS</strong><br><br>
<strong>Bubble Sort — 1 Key Pattern (nested loop + swap):</strong><br>
<code>for i in range(n-1):</code><br>
<code>&nbsp;&nbsp;for j in range(n-1-i):</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;if arr[j] > arr[j+1]:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j], arr[j+1] = arr[j+1], arr[j]</code><br>
Trick: <em>"n-1-i" because last i elements are already sorted — don't waste time.</em><br><br>
<strong>Merge Sort — 2 functions. Learn them separately:</strong><br>
Function 1: <code>merge_sort(arr)</code> — just splits. Base case: len &lt;= 1.<br>
Function 2: <code>merge(left, right)</code> — walks both arrays, picks smaller, appends.<br>
Trick: <em>If you know merge(), the rest is just: left = sort(left half), right = sort(right half), return merge(left, right).</em><br><br>
<strong>Quick Sort — learn the partition() function:</strong><br>
<code>pivot = arr[high]</code> &nbsp;← pick last element<br>
<code>i = low - 1</code> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← boundary tracker<br>
<code>if arr[j] &lt;= pivot: i += 1; swap(arr[i], arr[j])</code><br>
<code>swap(arr[i+1], arr[high])</code> &nbsp;← put pivot in final spot<br>
Trick: <em>"i tracks where small elements end. When done, i+1 is pivot's home."</em>
</div>
""",
    "bst": """
<div class='card purple'>
<strong>🧠 HOW TO LEARN THE BST — Build it up in 3 stages</strong><br><br>
<strong>Stage 1: Insert (Recursive — learn this first):</strong><br>
<code>if data &lt; node.data: go LEFT</code><br>
<code>if data &gt; node.data: go RIGHT</code><br>
<code>if slot is None: place the node here</code><br><br>
<strong>Stage 2: Inorder Traversal (3 lines only!):</strong><br>
<code>def inorder(node):</code><br>
<code>&nbsp;&nbsp;if node:</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;inorder(node.left)&nbsp;&nbsp;&nbsp;&nbsp;# Left first</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;print(node.data)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Root</code><br>
<code>&nbsp;&nbsp;&nbsp;&nbsp;inorder(node.right)&nbsp;&nbsp;&nbsp;# Right last</code><br>
This ALWAYS prints sorted output. That's your viva trump card.<br><br>
<strong>Stage 3: Delete (3 cases — don't panic):</strong><br>
1. No children → return None<br>
2. One child → return that child<br>
3. Two children → find min of right subtree → copy its value → delete it<br><br>
<strong>Memory Trick:</strong> "BST = Binary SEARCH Tree. Every decision at every node is a binary choice: go left or go right."
</div>
""",
}

ELI5_SECTIONS = {
    "linked_list": """
<div class='eli5'>
<strong>🚂 Think of it as a Train!</strong> Each carriage (Node) carries passengers (data) and is hooked to the next carriage (next pointer). To add a carriage you unhook one connection and insert. To remove you skip one. You NEVER need to shift everyone like in arrays!
</div>
<div class='card green'>
<strong>The 3 Types:</strong><br>
<strong>Singly:</strong> Each node points FORWARD only → → →<br>
<strong>Doubly:</strong> Each node points both ways ← → (e.g., browser history back/forward)<br>
<strong>Circular:</strong> Last node points back to Head (e.g., round-robin scheduling)
</div>
<div class='card yellow'>
<strong>⏱ Complexity Quick-Ref:</strong><br>
Insert at Head → <code>O(1)</code> (just change head pointer)<br>
Insert at Tail → <code>O(n)</code> (must walk to end first)<br>
Delete by value → <code>O(n)</code> (search then unlink)<br>
Access element → <code>O(n)</code> (no random access, must walk from head)
</div>
""",
    "queue": """
<div class='eli5'>
<strong>🎟️ Think of a Movie Ticket Line!</strong> First person in line gets the ticket FIRST (FIFO). New people join at the REAR. People leave from the FRONT. Simple.
</div>
<div class='card green'>
<strong>Two Ends, Two Rules:</strong><br>
<code>enqueue(x)</code> → Add to REAR<br>
<code>dequeue()</code>  → Remove from FRONT<br>
<code>peek()</code>    → View FRONT without removing
</div>
<div class='card yellow'>
<strong>Stack vs Queue in 5 seconds:</strong><br>
Stack = LIFO (stack of plates - last plate placed is first removed)<br>
Queue = FIFO (ticket line - first person in is first out)
</div>
""",
    "infix_postfix": """
<div class='eli5'>
<strong>🧮 Humans write:</strong> <code>A + B * C</code> (Infix - operator is BETWEEN)<br>
<strong>Computers prefer:</strong> <code>A B C * +</code> (Postfix - operator is AFTER)<br>
Why? Postfix needs NO brackets and NO BODMAS rules. A single stack evaluates it directly.
</div>
<div class='card green'>
<strong>The 4 Golden Rules (Algorithm):</strong><br>
1. See a <strong>Letter/Number</strong> → output it immediately<br>
2. See <code>(</code> → push to stack<br>
3. See <code>)</code> → pop to output until <code>(</code> found<br>
4. See an <strong>Operator</strong> → pop operators with higher/equal precedence, then push current
</div>
<div class='card yellow'>
<strong>Precedence (High → Low):</strong>
^ &gt; * / &gt; + -<br><br>
<strong>Trace A + B * C:</strong><br>
A→output, +→stack, B→output, * has higher prec than + so push *, C→output<br>
End: pop *, pop + → Result: <code>ABC*+</code>
</div>
""",
    "sorting": """
<div class='eli5'>
<strong>🫧 Bubble Sort:</strong> Compare neighbors. Swap if wrong order. Repeat. Largest bubbles to end each pass. Simple but O(n²) - very slow.<br><br>
<strong>✂️ Merge Sort:</strong> Cut pile in half, keep cutting. Sort single cards. Merge back in order. Always O(n log n) - consistent but needs extra memory.<br><br>
<strong>⚡ Quick Sort:</strong> Pick a Pivot. Put smaller numbers left, bigger right. Pivot is in its final home! Repeat for left and right halves. Average O(n log n) but O(n²) worst case.
</div>
""",
    "bst": """
<div class='eli5'>
<strong>🌳 One iron-clad rule for every single node:</strong><br>
Everything to the LEFT is SMALLER. Everything to the RIGHT is LARGER.<br><br>
This means finding any number is like a game of hot/cold — you cut the search space in HALF at every step. That's O(log n)!
</div>
<div class='card green'>
<strong>3 Traversal Orders — Memory Trick:</strong><br>
<strong>Pre</strong>order = <strong>Root FIRST</strong>  (Root → Left → Right) - Use to COPY a tree<br>
<strong>In</strong>order  = <strong>Root MIDDLE</strong> (Left → Root → Right) - Gives SORTED output!<br>
<strong>Post</strong>order = <strong>Root LAST</strong>  (Left → Right → Root) - Use to DELETE a tree
</div>
""",
}

# ---- BUILD HTML ----
def build_html():
    body_parts = []

    # Cover
    body_parts.append("""
<div class="cover">
  <h1>🧠 Ultimate DS Exam Guide</h1>
  <p>Everything you need — theory, diagrams, code, and viva Q&A —<br>for your practical exam. Read on the bus, nail it in the hall.</p>
  <div class="toc">
    <h3>📋 Table of Contents</h3>
    <a href="#unit1">Unit 1 — Big O, Recursion, ADTs</a>
    <a href="#unit2">Unit 2 — Arrays, Linked Lists, Stack, Queue</a>
    <a href="#unit3">Unit 3 — Sorting Algorithms</a>
    <a href="#unit4">Unit 4 — Trees, Graphs, Hashing</a>
    <a href="#viva">Master Viva Q&A (61 Questions)</a>
    <a href="#cheat">Cheatsheet</a>
    <a href="#code">📎 Complete Code — All 5 Programs</a>
  </div>
</div>
<hr class="divider">
""")

    # Unit IDs for anchor links
    unit_ids = {
        "00_MASTER_PLAN.md": "master",
        "01_unit1_foundations.md": "unit1",
        "02_unit2_linear_ds.md": "unit2",
        "03_unit3_sorting.md": "unit3",
        "04_unit4_nonlinear.md": "unit4",
        "05_viva_questions.md": "viva",
        "CHEATSHEET.md": "cheat",
    }

    chapter_titles = {
        "00_MASTER_PLAN.md": ("Master Plan", "🗺️", "5-hour study battle plan"),
        "01_unit1_foundations.md": ("Unit 1 — Foundations", "📐", "Big O, Recursion, ADT"),
        "02_unit2_linear_ds.md": ("Unit 2 — Linear DS", "🔗", "Arrays, Linked Lists, Stack, Queue"),
        "03_unit3_sorting.md": ("Unit 3 — Sorting", "🔀", "Bubble, Merge, Quick, Heap"),
        "04_unit4_nonlinear.md": ("Unit 4 — Non-Linear DS", "🌳", "Trees, Graphs, Hashing, Tries"),
        "05_viva_questions.md": ("Master Viva Q&A", "🎤", "61 Questions with Gold-Standard Answers"),
        "CHEATSHEET.md": ("Cheatsheet", "⚡", "Last-10-min rapid reference"),
    }

    for fname in MD_FILES:
        path = os.path.join(BASE, fname)
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            raw = f.read()

        title, icon, subtitle = chapter_titles[fname]
        uid = unit_ids[fname]

        body_parts.append(f"""
<div id="{uid}" class="chapter">
  <span class="chapter-label">{icon} {title}</span>
  <p class="sub">{subtitle}</p>
</div>
""")
        body_parts.append(md_to_html(raw))
        body_parts.append('<hr class="divider">')

    # Code Programs
    prog_titles = {
        "01_linked_list.py": ("🔗 Linked List — Full Implementation", "eli5_ll"),
        "02_queue.py": ("🚶 Queue — 3 Implementations", "eli5_q"),
        "03_infix_to_postfix.py": ("🧮 Infix to Postfix (Stack)", "eli5_ip"),
        "04_sorting.py": ("🔀 Sorting — Bubble, Merge, Quick", "eli5_sort"),
        "05_bst.py": ("🌳 Binary Search Tree — Full", "eli5_bst"),
    }
    eli5_keys = {
        "01_linked_list.py": "linked_list",
        "02_queue.py": "queue",
        "03_infix_to_postfix.py": "infix_postfix",
        "04_sorting.py": "sorting",
        "05_bst.py": "bst",
    }

    body_parts.append('<div id="code"><div class="chapter"><span class="chapter-label">💻 Programs</span><h2>Complete Source Code — All 5 Programs</h2><p class="sub">Exam-ready Python with comments explaining every line.</p></div>')

    for fname in PY_FILES:
        path = os.path.join(PROGRAMS, fname)
        if not os.path.exists(path):
            continue
        with open(path, encoding="utf-8") as f:
            code = f.read()

        title, _ = prog_titles[fname]
        eli5_key = eli5_keys[fname]

        body_parts.append(f"<h2>{title}</h2>")
        body_parts.append(ELI5_SECTIONS.get(eli5_key, ""))
        body_parts.append(LEARN_SECTIONS.get(eli5_key, ""))
        body_parts.append(f'<details><summary style="cursor:pointer;color:var(--primary);font-weight:700;padding:12px 0;font-size:1rem;">📄 View Full Code (click to expand)</summary><pre class="code-block">{esc(code)}</pre></details>')
        body_parts.append('<hr class="divider">')

    body_parts.append("</div>")

    # Assemble
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ultimate DS Exam Guide</title>
{CSS}
</head>
<body>
<div class="container">
{"".join(body_parts)}
<p style="text-align:center;color:var(--text-dim);margin-top:40px">Generated for exam victory. You've got this! 🚀</p>
</div>
</body>
</html>"""

html = build_html()
with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

size_kb = os.path.getsize(OUT) // 1024
print(f"Done! Written to: {OUT}")
print(f"File size: {size_kb} KB")

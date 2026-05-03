const fs = require('fs');
const marked = require('marked');
const path = require('path');

const reactPath = path.resolve('../web-dev/material/React-Notes/Readme.md');
const jsPath = path.resolve('../web-dev/material/Javascript-Foundation/Readme.md');
const vivaPath = path.resolve('../web-dev/material/viva.md');

const reactMd = fs.readFileSync(reactPath, 'utf8');
const jsMd = fs.readFileSync(jsPath, 'utf8');
const vivaMd = fs.readFileSync(vivaPath, 'utf8');

const reactHtml = marked.parse(reactMd);
const jsHtml = marked.parse(jsMd);
const vivaHtml = marked.parse(vivaMd);

function generateTemplate(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | Web Dev II Guide</title>

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
  --primary-glow:rgba(88,166,255,0.2);
  --success:#238636;
  --accent:#bd56ff;
  --danger:#f85149;
}

body{
  font-family:'Inter',sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.6;
  font-size: 17px;
  display:flex;
}

/* Sidebar TOC */
.sidebar{
  width:280px;
  background:var(--surface);
  border-right:1px solid var(--border);
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  overflow-y:auto;
  padding:20px;
}

.sidebar h2{
  font-size:1.2rem;
  color:#fff;
  margin-bottom:15px;
  padding-bottom:10px;
  border-bottom:1px solid var(--border);
}

.sidebar ul{
  list-style:none;
}

.sidebar li{
  margin-bottom:10px;
}

.sidebar a{
  color:var(--text-dim);
  text-decoration:none;
  font-size:0.95rem;
  display:block;
  padding:6px 10px;
  border-radius:6px;
  transition:all 0.2s;
}

.sidebar a:hover{
  background:var(--surface2);
  color:var(--primary);
}

.sidebar a.active{
  background: rgba(88,166,255,0.1);
  color:var(--primary);
  border-left: 3px solid var(--primary);
}

/* Main Content */
.main-content{
  margin-left:280px;
  padding:40px 60px;
  max-width:1100px;
  width:100%;
}

.header-hero{
  margin-bottom:40px;
  padding-bottom:20px;
  border-bottom:2px solid var(--border);
}

h1{font-size:2.8rem;color:#fff;margin-top:40px;margin-bottom:10px;letter-spacing:-0.5px;}
h2{font-size:2rem;color:var(--primary);margin:40px 0 20px 0;padding-bottom:10px;border-bottom:1px solid var(--border);}
h3{font-size:1.4rem;color:#fff;margin:25px 0 15px 0;}
p{margin-bottom:15px;font-size:1.05rem;}
ul, ol { margin-bottom: 20px; margin-left: 20px; }
li { margin-bottom: 8px; }
strong { color: #fff; }
blockquote { border-left: 4px solid var(--primary); padding-left: 15px; color: var(--text-dim); margin-bottom: 20px; background: rgba(88,166,255,0.05); padding: 10px 15px; }
table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
th, td { border: 1px solid var(--border); padding: 12px; text-align: left; }
th { background: var(--surface2); color: #fff; }

/* Code Blocks */
pre{
  background:var(--surface2);
  border:1px solid var(--border);
  padding:15px;
  border-radius:8px;
  overflow-x:auto;
  margin-bottom:20px;
}
code{
  font-family:'Fira Code',monospace;
  font-size:0.9rem;
  color:#e6edf3;
}
p code, li code{
  background:var(--surface2);
  padding:3px 6px;
  border-radius:4px;
  font-size:0.9em;
  color:var(--accent);
}

/* Details/Summary */
details summary::-webkit-details-marker { color: var(--primary); }

@media(max-width:900px){
  .sidebar{display:none;}
  .main-content{margin-left:0;padding:20px;}
}
</style>
</head>
<body>

<div class="sidebar">
  <h2>Web Dev Routing</h2>
  <ul>
    <li><a href="../index.html">🏠 Back to Portal</a></li>
    <li style="margin-top:15px; margin-bottom:5px; color: #555; font-size: 0.8rem; text-transform: uppercase;">Study Guides</li>
    <li><a href="javascript.html" class="${title === 'JavaScript' ? 'active' : ''}">JS Foundation</a></li>
    <li><a href="react.html" class="${title === 'React' ? 'active' : ''}">React Core</a></li>
    <li style="margin-top:15px; margin-bottom:5px; color: #555; font-size: 0.8rem; text-transform: uppercase;">Exams</li>
    <li><a href="viva.html" class="${title === 'Viva Questions' ? 'active' : ''}">🎤 Viva Q&A Hub</a></li>
  </ul>
</div>

<div class="main-content">
  <div class="header-hero">
    <h1>${title === 'JavaScript' ? '<span style="color:var(--accent)">JavaScript</span> Foundation' : title === 'React' ? '<span style="color:var(--primary)">React</span> Core Notes' : 'Ultimate <span style="color:var(--success)">Viva Q&A</span>'}</h1>
    <p>Web Development II Exam Preparation.</p>
  </div>

  <section>
    ${content}
  </section>

  <p style="text-align:center;color:var(--text-dim);margin-top:40px;padding:40px;border-top:1px solid var(--border);">Generated for exam victory. You've got this! 🚀</p>
</div>
</body>
</html>`;
}

fs.writeFileSync(path.resolve('../web-dev/javascript.html'), generateTemplate('JavaScript', jsHtml));
fs.writeFileSync(path.resolve('../web-dev/react.html'), generateTemplate('React', reactHtml));
fs.writeFileSync(path.resolve('../web-dev/viva.html'), generateTemplate('Viva Questions', vivaHtml));

console.log('Successfully generated javascript.html, react.html, and viva.html!');

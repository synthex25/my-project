// 
import { useState } from "react";

const steps = [
  {
    id: 1,
    emoji: "⬇️",
    title: "Install Git on Windows",
    color: "#f97316",
    commands: [],
    content: [
      { type: "text", text: "Git doesn't come with Windows by default. You need to install it first." },
      { type: "step", label: "1", text: 'Go to 👉 https://git-scm.com/download/windows and download the installer.' },
      { type: "step", label: "2", text: 'Run the installer. When asked about PATH, choose: "Git from command line and 3rd-party software".' },
      { type: "step", label: "3", text: 'When asked about line endings, choose: "Checkout Windows-style, commit Unix-style".' },
      { type: "step", label: "4", text: "Finish install, then open PowerShell and verify:" },
      { type: "code", code: "git --version" },
      { type: "tip", text: "✅ You should see something like: git version 2.x.x — that means Git is ready!" },
    ],
  },
  {
    id: 2,
    emoji: "🪪",
    title: "Tell Git Who You Are",
    color: "#8b5cf6",
    content: [
      { type: "text", text: "Before using Git, you must set your name and email. This is stamped on every save (commit) you make." },
      { type: "code", code: `git config --global user.name "Your Name"\ngit config --global user.email "your@email.com"\ngit config --global init.defaultBranch main` },
      { type: "tip", text: "⚠️ Use the SAME email you'll use on GitHub! This links your work to your account." },
      { type: "text", text: "Check it worked:" },
      { type: "code", code: "git config --list" },
    ],
  },
  {
    id: 3,
    emoji: "📁",
    title: "Create Your First Git Project",
    color: "#10b981",
    content: [
      { type: "text", text: "Now let's create a folder and start tracking it with Git. Open PowerShell and run:" },
      { type: "code", code: `mkdir my-project\ncd my-project\ngit init` },
      { type: "tip", text: "🎉 git init creates a hidden .git folder — this is Git's brain for your project. Never delete it!" },
      { type: "text", text: "Create a file to work with:" },
      { type: "code", code: `echo "# My First Project" > README.md` },
      { type: "text", text: "Check what Git sees:" },
      { type: "code", code: "git status" },
      { type: "tip", text: "You'll see README.md listed in red as 'untracked' — Git sees it but isn't tracking it yet." },
    ],
  },
  {
    id: 4,
    emoji: "📸",
    title: "Stage & Commit (Save a Snapshot)",
    color: "#3b82f6",
    content: [
      { type: "text", text: "Think of Git like a camera 📷. You choose what to include in the shot (stage), then click the shutter (commit)." },
      { type: "diagram", items: ["📝 Edit files", "→", "📦 git add (stage)", "→", "💾 git commit (snapshot)"] },
      { type: "code", code: `git add README.md\n# or add ALL changed files:\ngit add .` },
      { type: "text", text: "Now commit (save permanently with a message):" },
      { type: "code", code: `git commit -m "Add README file"` },
      { type: "tip", text: '✅ Good messages: "Add login page" ❌ Bad messages: "update", "stuff", "changes"' },
      { type: "text", text: "View your commit history:" },
      { type: "code", code: "git log --oneline" },
    ],
  },
  {
    id: 5,
    emoji: "☁️",
    title: "Create a GitHub Account & Repo",
    color: "#ec4899",
    content: [
      { type: "step", label: "1", text: "Go to https://github.com and sign up. Use the SAME email as your git config." },
      { type: "step", label: "2", text: 'Click the "+" button → "New repository".' },
      { type: "step", label: "3", text: 'Name it "my-project". Keep it Public. Do NOT check "Add a README" (you already have one).' },
      { type: "step", label: "4", text: 'Click "Create repository". GitHub will show you setup commands — you\'ll use them in the next step.' },
      { type: "tip", text: "💡 GitHub = the cloud backup of your local Git project. Think Google Drive but for code." },
    ],
  },
  {
    id: 6,
    emoji: "🔑",
    title: "Setup SSH Key (No Token Needed!)",
    color: "#f59e0b",
    content: [
      { type: "text", text: "SSH lets you connect to GitHub without a token or password — set it up once and push forever!" },
      { type: "text", text: "Step 1 — Generate your SSH key:" },
      { type: "code", code: `ssh-keygen -t ed25519 -C "your@email.com"\n# Press Enter 3 times for all prompts` },
      { type: "text", text: "Step 2 — Start SSH agent and add your key:" },
      { type: "code", code: `Get-Service -Name ssh-agent | Set-Service -StartupType Manual\nStart-Service ssh-agent\nssh-add C:\\Users\\YOUR-NAME\\.ssh\\id_ed25519` },
      { type: "text", text: "Step 3 — Copy your public key:" },
      { type: "code", code: "cat C:\\Users\\YOUR-NAME\\.ssh\\id_ed25519.pub" },
      { type: "tip", text: "📋 Copy the output — it starts with ssh-ed25519 AAAA..." },
      { type: "text", text: "Step 4 — Add to GitHub:" },
      { type: "step", label: "1", text: "Go to GitHub → Settings → SSH and GPG keys → New SSH key" },
      { type: "step", label: "2", text: 'Title: "My Windows Laptop" → paste your key → click Add SSH Key' },
      { type: "text", text: "Step 5 — Test the connection:" },
      { type: "code", code: "ssh -T git@github.com" },
      { type: "tip", text: '✅ You should see: "Hi username! You have successfully authenticated!"' },
    ],
  },
  {
    id: 7,
    emoji: "🚀",
    title: "Push Your Code to GitHub",
    color: "#06b6d4",
    content: [
      { type: "text", text: "Now connect your local project to GitHub and upload it using SSH:" },
      { type: "code", code: `git remote add origin git@github.com:YOUR-USERNAME/my-project.git\ngit branch -M main\ngit push -u origin main` },
      { type: "tip", text: "✅ With SSH, no token or password needed — it just works!" },
      { type: "text", text: "If you already connected with HTTPS, switch to SSH:" },
      { type: "code", code: "git remote set-url origin git@github.com:YOUR-USERNAME/my-project.git" },
      { type: "text", text: "Verify the connection:" },
      { type: "code", code: "git remote -v" },
      { type: "text", text: "After the first push, future pushes are just:" },
      { type: "code", code: "git push" },
      { type: "tip", text: "🎊 Refresh your GitHub page — your code should be there!" },
    ],
  },
  {
    id: 8,
    emoji: "🔄",
    title: "Daily Workflow (The Loop)",
    color: "#64748b",
    content: [
      { type: "text", text: "Every day you code, follow this loop:" },
      { type: "diagram", items: ["git pull", "→", "edit code", "→", "git add .", "→", 'git commit -m "msg"', "→", "git push"] },
      { type: "code", code: `# 1. Download latest changes first\ngit pull origin main\n\n# 2. ...make your edits...\n\n# 3. Check what changed\ngit status\n\n# 4. Stage and commit\ngit add .\ngit commit -m "Describe what you did"\n\n# 5. Upload to GitHub\ngit push` },
      { type: "tip", text: "⚡ Rule: Always pull before you push! This avoids conflicts." },
    ],
  },
  {
    id: 9,
    emoji: "🛠️",
    title: "Fix Common Mistakes",
    color: "#ef4444",
    content: [
      { type: "text", text: "Here are the most common problems and how to fix them:" },
      { type: "fix", problem: '"git: command not found"', solution: "Git isn't installed or PATH isn't set. Re-install and choose the PATH option." },
      { type: "fix", problem: '"Authentication failed"', solution: "Use your token as the password, NOT your GitHub password." },
      { type: "fix", problem: '"Permission denied (publickey)"', solution: "SSH key not added to GitHub. Re-run: ssh-add and check GitHub SSH settings." },
      { type: "fix", problem: "Committed the wrong file", solution: "Run: git reset --soft HEAD~1  (undoes last commit, keeps your files)" },
      { type: "fix", problem: "Staged something wrong", solution: "Run: git reset filename.txt  (unstages the file)" },
      { type: "fix", problem: "Push rejected / conflict", solution: "Run git pull first, then push again." },
      { type: "code", code: `git reset --soft HEAD~1   # Undo last commit (keep files)\ngit reset filename.txt    # Unstage a file\ngit remote -v             # Check remote connection\nssh -T git@github.com     # Test SSH connection\ngit status                # Always check what's going on` },
    ],
  },
];

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div style={{ position: "relative", margin: "10px 0" }}>
      <pre style={{
        background: "#0f172a", color: "#7dd3fc", borderRadius: 10,
        padding: "14px 16px", fontSize: 13, overflowX: "auto",
        fontFamily: "'Courier New', monospace", lineHeight: 1.7,
        border: "1px solid #1e293b"
      }}>{code}</pre>
      <button onClick={copy} style={{
        position: "absolute", top: 8, right: 8,
        background: copied ? "#22c55e" : "#334155",
        color: "#fff", border: "none", borderRadius: 6,
        padding: "3px 10px", fontSize: 11, cursor: "pointer"
      }}>{copied ? "✓ Copied" : "Copy"}</button>
    </div>
  );
}

function StepContent({ step }) {
  return (
    <div>
      {step.content.map((item, i) => {
        if (item.type === "text") return <p key={i} style={{ color: "#cbd5e1", margin: "8px 0", fontSize: 15, lineHeight: 1.6 }}>{item.text}</p>;
        if (item.type === "code") return <CodeBlock key={i} code={item.code} />;
        if (item.type === "tip") return (
          <div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, padding: "10px 14px", margin: "10px 0", color: "#94a3b8", fontSize: 14 }}>
            {item.text}
          </div>
        );
        if (item.type === "step") return (
          <div key={i} style={{ display: "flex", gap: 12, margin: "10px 0", alignItems: "flex-start" }}>
            <div style={{
              minWidth: 26, height: 26, borderRadius: "50%",
              background: step.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700, flexShrink: 0
            }}>{item.label}</div>
            <p style={{ color: "#cbd5e1", margin: 0, fontSize: 15, lineHeight: 1.6 }}>{item.text}</p>
          </div>
        );
        if (item.type === "diagram") return (
          <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", margin: "12px 0", padding: "12px 16px", background: "#1e293b", borderRadius: 10 }}>
            {item.items.map((d, j) => (
              <span key={j} style={{
                color: d === "→" ? "#475569" : "#f8fafc",
                background: d === "→" ? "transparent" : "#334155",
                borderRadius: 6, padding: d === "→" ? "0 2px" : "4px 10px",
                fontSize: 13, fontFamily: d === "→" ? "inherit" : "monospace"
              }}>{d}</span>
            ))}
          </div>
        );
        if (item.type === "fix") return (
          <div key={i} style={{ margin: "8px 0", background: "#1e293b", borderRadius: 8, padding: "10px 14px", borderLeft: "3px solid #ef4444" }}>
            <div style={{ color: "#fca5a5", fontSize: 13, fontFamily: "monospace" }}>{item.problem}</div>
            <div style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>→ {item.solution}</div>
          </div>
        );
        return null;
      })}
    </div>
  );
}

export default function GitGuide() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(new Set());

  const markDone = (id) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const current = steps[active];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#020617", color: "#f1f5f9" }}>
      <div style={{ width: 260, background: "#0f172a", borderRight: "1px solid #1e293b", overflowY: "auto", flexShrink: 0 }}>
        <div style={{ padding: "20px 16px 16px" }}>
          <div style={{ fontSize: 11, color: "#475569", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Git & GitHub</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#f8fafc" }}>Step-by-Step Guide</div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Windows • Beginner Friendly</div>
        </div>
        <div style={{ padding: "0 8px 20px" }}>
          {steps.map((step, i) => (
            <button key={step.id} onClick={() => setActive(i)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: 10,
              padding: "10px 10px", borderRadius: 8, border: "none", cursor: "pointer", textAlign: "left",
              background: active === i ? "#1e293b" : "transparent",
              marginBottom: 2, transition: "background 0.15s"
            }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                background: completed.has(step.id) ? "#22c55e" : (active === i ? step.color : "#1e293b"),
                flexShrink: 0
              }}>
                {completed.has(step.id) ? "✓" : step.emoji}
              </div>
              <div>
                <div style={{ fontSize: 12, color: active === i ? "#f1f5f9" : "#94a3b8", fontWeight: active === i ? 600 : 400, lineHeight: 1.3 }}>
                  Step {step.id}
                </div>
                <div style={{ fontSize: 13, color: active === i ? "#e2e8f0" : "#64748b", lineHeight: 1.3 }}>
                  {step.title}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ padding: "12px 16px", borderTop: "1px solid #1e293b", margin: "0 8px" }}>
          <div style={{ fontSize: 12, color: "#475569", marginBottom: 8 }}>Progress</div>
          <div style={{ height: 6, background: "#1e293b", borderRadius: 10 }}>
            <div style={{ height: "100%", borderRadius: 10, background: "#22c55e", width: `${(completed.size / steps.length) * 100}%`, transition: "width 0.4s" }} />
          </div>
          <div style={{ fontSize: 12, color: "#475569", marginTop: 6 }}>{completed.size}/{steps.length} steps done</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: current.color + "22", border: `2px solid ${current.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
              {current.emoji}
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#475569", textTransform: "uppercase", letterSpacing: 1.5 }}>Step {current.id} of {steps.length}</div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#f8fafc" }}>{current.title}</h1>
            </div>
          </div>

          <div style={{ background: "#0f172a", borderRadius: 14, padding: 24, border: "1px solid #1e293b" }}>
            <StepContent step={current} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} style={{
              background: "#1e293b", color: active === 0 ? "#334155" : "#94a3b8",
              border: "1px solid #334155", borderRadius: 8, padding: "9px 18px", cursor: active === 0 ? "default" : "pointer", fontSize: 14
            }}>← Previous</button>

            <button onClick={() => markDone(current.id)} style={{
              background: completed.has(current.id) ? "#166534" : "#1e293b",
              color: completed.has(current.id) ? "#4ade80" : "#94a3b8",
              border: `1px solid ${completed.has(current.id) ? "#166534" : "#334155"}`,
              borderRadius: 8, padding: "9px 18px", cursor: "pointer", fontSize: 14
            }}>
              {completed.has(current.id) ? "✓ Done" : "Mark as Done"}
            </button>

            <button onClick={() => setActive(Math.min(steps.length - 1, active + 1))} disabled={active === steps.length - 1} style={{
              background: current.color, color: "#fff",
              border: "none", borderRadius: 8, padding: "9px 18px",
              cursor: active === steps.length - 1 ? "default" : "pointer", fontSize: 14, fontWeight: 600,
              opacity: active === steps.length - 1 ? 0.4 : 1
            }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

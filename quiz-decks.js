/**
 * Quiz decks for the study app (file://-friendly).
 * Figure fields: type, src|svg, alt, caption?, shows?, attribution?
 * Prefer figures/real/ terminal mockups and Wikimedia Commons (attributed).
 * Sync quiz-data/*.json when editing. No GitHub push.
 */
(function (global) {
  "use strict";

  global.QUIZ_DECKS = {
  "acit4050": {
    "course": "ACIT4050",
    "title": "Terminal & lab",
    "cards": [
      {
        "id": "4050-pwd",
        "q": "Which command shows the current directory (both PowerShell and Linux)?",
        "a": "pwd (PowerShell: also Get-Location).",
        "tags": [
          "navigation",
          "terminal"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-pwd-both.svg",
          "alt": "Side-by-side Linux and PowerShell pwd screenshots",
          "caption": "pwd shows your current directory",
          "shows": "Linux prints /home/student. PowerShell pwd (Get-Location) prints C:\\Users\\student. Same idea on both systems."
        }
      },
      {
        "id": "4050-ls",
        "q": "How do you list files in the current folder? (PowerShell vs Arch)",
        "a": "PowerShell: dir / ls / Get-ChildItem. Arch: ls (or ls -la for details).",
        "tags": [
          "navigation",
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-ls.svg",
          "alt": "Terminal ls",
          "caption": "ls lists files in the current folder",
          "shows": "Short ls then detailed ls -la. PowerShell: dir / Get-ChildItem."
        }
      },
      {
        "id": "4050-cd",
        "q": "How do you go up one level, and how do you go to the home directory?",
        "a": "Up: cd ..  | Home: cd ~ (on Linux also just cd). PowerShell: also cd $HOME.",
        "tags": [
          "navigation"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-cd.svg",
          "alt": "Terminal cd",
          "caption": "cd changes where you are",
          "shows": "cd Documents; pwd; cd ..; cd ~."
        }
      },
      {
        "id": "4050-mkdir",
        "q": "How do you create a folder (and several subfolders) in the terminal?",
        "a": "mkdir foldername. PowerShell: also New-Item -ItemType Directory. Arch: mkdir -p path/{a,b} for several at once.",
        "tags": [
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-mkdir.svg",
          "alt": "Terminal mkdir",
          "caption": "mkdir creates folders",
          "shows": "mkdir -p creates nested folders."
        }
      },
      {
        "id": "4050-pipe",
        "q": "What does a pipe (|) do in the terminal?",
        "a": "Sends output from one command as input to the next (e.g. find | grep hello, or Get-ChildItem | Where-Object).",
        "tags": [
          "pipe",
          "grep"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-pipe.svg",
          "alt": "Terminal pipe",
          "caption": "Pipe | sends output to the next command",
          "shows": "Left command stdout becomes right command stdin."
        }
      },
      {
        "id": "4050-chmod",
        "q": "What does chmod 600 mean on a Linux file?",
        "a": "Owner gets read+write (rw-------); group/others get no access. r=4, w=2, x=1.",
        "tags": [
          "permissions",
          "linux"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-chmod.svg",
          "alt": "Terminal chmod",
          "caption": "chmod 600 = owner read+write only",
          "shows": "After chmod 600, ls -l shows -rw-------."
        }
      },
      {
        "id": "4050-hash",
        "q": "Why does SHA256 change when you change a file?",
        "a": "The checksum is a fingerprint of the whole contents; any change yields a new hash. Used to verify ISOs (SHA256SUMS).",
        "tags": [
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-hash.svg",
          "alt": "Terminal hash",
          "caption": "Any change yields a new hash fingerprint",
          "shows": "sha256sum changes completely when the file changes."
        }
      },
      {
        "id": "4050-host",
        "q": "Which key is the Host key in VirtualBox (to release the mouse pointer)?",
        "a": "Right Ctrl.",
        "tags": [
          "virtualbox"
        ]
      },
      {
        "id": "4050-ping",
        "q": "How do you ping 1.1.1.1 with a limited number of packets on Linux?",
        "a": "ping -c 4 1.1.1.1 (otherwise stop with Ctrl+C). PowerShell: ping 1.1.1.1 (often 4 attempts by default).",
        "tags": [
          "network"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/osi-model.svg",
          "alt": "OSI model",
          "caption": "Ping uses ICMP at the network layer",
          "shows": "OSI Network layer (layer 3). Linux: ping -c 4 limits packets.",
          "attribution": "Source: Wikimedia Commons (Public domain / CC0) - Offnfopt"
        }
      },
      {
        "id": "4050-pacman",
        "q": "How do you search for and install the package tree on Arch?",
        "a": "Search: pacman -Ss tree. Install: sudo pacman -S tree. Update the database first: sudo pacman -Sy. (Ubuntu/Kali later: apt update / apt install).",
        "tags": [
          "packages",
          "arch"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-pacman.svg",
          "alt": "Terminal pacman",
          "caption": "pacman: sync, search, install",
          "shows": "pacman -Sy then -Ss then -S."
        }
      },
      {
        "id": "4050-cat",
        "q": "How do you show the contents of a text file in the terminal?",
        "a": "Arch: cat file.txt. PowerShell: Get-Content / type file.txt.",
        "tags": [
          "files"
        ]
      },
      {
        "id": "4050-append",
        "q": "How do you append a line to a file without deleting what is already there?",
        "a": "Arch: echo \"text\" >> file.txt. PowerShell: \"text\" | Add-Content file.txt. (A single > / Set-Content overwrites.)",
        "tags": [
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-redirect.svg",
          "alt": "Terminal redirect",
          "caption": ">> appends; > overwrites",
          "shows": "echo a > file overwrites; echo b >> file appends."
        }
      },
      {
        "id": "4050-cp-mv-rm",
        "q": "Which commands copy, move/rename, and delete a file? (PowerShell vs bash)",
        "a": "bash: cp, mv, rm. PowerShell: Copy-Item, Move-Item, Remove-Item. Practise only inside a practice folder - rm -rf / -Recurse is dangerous.",
        "tags": [
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-ls.svg",
          "alt": "Terminal listing",
          "caption": "List first - then copy, move or delete",
          "shows": "Always ls/dir before rm/cp/mv."
        }
      },
      {
        "id": "4050-find-grep",
        "q": "How do you find files under a folder and filter names with 'hello' on Arch?",
        "a": "find ~/terminal-practice -type f | grep hello (count with | wc -l). PowerShell: Get-ChildItem -Recurse -File | Where-Object Name -match 'hello'.",
        "tags": [
          "pipe",
          "search"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-pipe.svg",
          "alt": "Terminal grep",
          "caption": "find/grep filter streams with pipes",
          "shows": "Pipe into grep to keep matching lines."
        }
      },
      {
        "id": "4050-chmod644",
        "q": "What does chmod 644 mean?",
        "a": "Owner read+write; group and others read only (-rw-r--r--). Common for ordinary text files.",
        "tags": [
          "permissions",
          "linux"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-chmod.svg",
          "alt": "chmod permissions",
          "caption": "644 is rw-r--r--",
          "shows": "Owner write; others read. Compare with 600."
        }
      },
      {
        "id": "4050-ip",
        "q": "How do you show the IPv4 address on Arch vs Windows?",
        "a": "Arch: ip addr or ip -4 addr show (look for inet). Windows: ipconfig or Get-NetIPAddress -AddressFamily IPv4.",
        "tags": [
          "network"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/osi-model.svg",
          "alt": "OSI model",
          "caption": "IP addressing lives at the network layer",
          "shows": "OSI Network layer carries IP addresses.",
          "attribution": "Source: Wikimedia Commons (Public domain / CC0) - Offnfopt"
        }
      },
      {
        "id": "4050-sha256",
        "q": "Which command computes SHA256 for a file?",
        "a": "Arch: sha256sum file. PowerShell: Get-FileHash file -Algorithm SHA256.",
        "tags": [
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-hash.svg",
          "alt": "Terminal sha256sum",
          "caption": "Verify ISO integrity with SHA-256",
          "shows": "Compare sha256sum output to SHA256SUMS."
        }
      },
      {
        "id": "4050-history-help",
        "q": "How do you view command history and help?",
        "a": "Arch: history | tail -20; man ls (quit with q). PowerShell: Get-History; Get-Help Get-ChildItem -Full.",
        "tags": [
          "terminal"
        ]
      },
      {
        "id": "4050-ctrlc",
        "q": "How do you interrupt a running command in a Linux terminal?",
        "a": "Ctrl+C. (Copy/paste often: Ctrl+Shift+C / Ctrl+Shift+V.)",
        "tags": [
          "terminal"
        ]
      },
      {
        "id": "4050-emneplan-lab",
        "q": "According to Lecture 1 / the course outline: how many assignments, and what must you pass to sit the exam?",
        "a": "At least 11 assignments will be given; at least 8 must be completed (pass) to qualify for the final exam. One-week deadlines are HARD. Pass/fail only - they do not count in the final grade. Labs still recommend Kali + Ubuntu/Windows VMs.",
        "tags": [
          "syllabus"
        ]
      },
      {
        "id": "4050-emneplan-fokus",
        "q": "What is the main focus of ACIT4050 according to the course plan?",
        "a": "Practical and theoretical cybersecurity: penetration testing, cyber defence mechanisms, societal aspects, and the security - privacy relationship; real incidents are analysed.",
        "tags": [
          "syllabus"
        ],
        "figure": {
          "type": "img",
          "src": "figures/course-focus-4050.svg",
          "alt": "Hands-on terminal and security focus",
          "caption": "ACIT4050 emphasises lab practice",
          "shows": "ACIT4050 emphasises lab practice"
        }
      },
      {
        "id": "4050-cia",
        "q": "What do we defend according to Lecture 1, and what three properties does that require?",
        "a": "Defend your systems so that no one can make them work contrary to your interests and intentions. That means maintaining Confidentiality, Integrity, and Availability (the CIA triad).",
        "tags": [
          "security",
          "CIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/cia-triad.svg",
          "alt": "CIA triad",
          "caption": "CIA: Confidentiality, Integrity, Availability",
          "shows": "Three classic security goals. Lab work trains all three."
        }
      },
      {
        "id": "4050-confidentiality",
        "q": "What does Confidentiality mean in Lecture 1's CIA triad?",
        "a": "Protecting information from being accessed by unauthorized parties.",
        "tags": [
          "security",
          "CIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/cia-triad.svg",
          "alt": "Confidentiality node of CIA",
          "caption": "Keep data from unauthorized eyes",
          "shows": "Keep data from unauthorized eyes"
        }
      },
      {
        "id": "4050-integrity",
        "q": "What does Integrity mean in Lecture 1's CIA triad?",
        "a": "Ensuring the authenticity of information - that information is not altered, and that the source of the information is genuine.",
        "tags": [
          "security",
          "CIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-hash.svg",
          "alt": "Terminal hash",
          "caption": "Integrity: detect unexpected changes",
          "shows": "Hashes flag tampering or corruption."
        }
      },
      {
        "id": "4050-availability",
        "q": "What does Availability mean in Lecture 1's CIA triad?",
        "a": "Information is accessible to authorized users.",
        "tags": [
          "security",
          "CIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/cia-triad.svg",
          "alt": "Availability node of CIA",
          "caption": "Access when needed",
          "shows": "Access when needed"
        }
      },
      {
        "id": "4050-authn-authz",
        "q": "Authentication vs authorization - what is the difference?",
        "a": "Authentication: verify who you are (prove identity). Authorization: decide what you may do after you are authenticated.",
        "tags": [
          "security",
          "identity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/authn-authz.svg",
          "alt": "Authentication versus authorization",
          "caption": "Prove identity then grant access",
          "shows": "Prove identity then grant access"
        }
      },
      {
        "id": "4050-attack-surface",
        "q": "What is an attack surface (lab / system sense)?",
        "a": "The set of points where an attacker can try to enter or extract data (open services, interfaces, files, accounts, networks). Reducing unnecessary exposure shrinks it.",
        "tags": [
          "security"
        ],
        "figure": {
          "type": "img",
          "src": "figures/attack-surface.svg",
          "alt": "System attack surface sketch",
          "caption": "Fewer entry points is safer",
          "shows": "Fewer entry points is safer"
        }
      },
      {
        "id": "4050-sudo",
        "q": "What does sudo do on Linux?",
        "a": "Runs a command with elevated privileges (typically as root) after authorization. Use sparingly; prefer ordinary user for daily work.",
        "tags": [
          "linux",
          "terminal"
        ]
      },
      {
        "id": "4050-whoami",
        "q": "How do you show the current user and host name?",
        "a": "Linux: whoami and hostname. PowerShell: $env:USERNAME and $env:COMPUTERNAME (or whoami / hostname where available).",
        "tags": [
          "terminal"
        ]
      },
      {
        "id": "4050-absolute-relative",
        "q": "Absolute vs relative path - what is the difference?",
        "a": "Absolute starts from the root (e.g. /home/user/file or C:\\Users\\...). Relative is from the current directory (e.g. ./notes or ..\\parent).",
        "tags": [
          "navigation",
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-cd.svg",
          "alt": "Terminal paths",
          "caption": "Absolute path from root; relative from here",
          "shows": "pwd shows absolute path. cd Documents is relative."
        }
      },
      {
        "id": "4050-ls-la",
        "q": "What does ls -la show that plain ls often hides?",
        "a": "Long listing including permissions, owner, size, time, and usually hidden files (names starting with .).",
        "tags": [
          "linux",
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-ls.svg",
          "alt": "Terminal ls -la",
          "caption": "ls -la shows permissions and hidden files",
          "shows": "Mode bits like -rw------- appear in the listing."
        }
      },
      {
        "id": "4050-findstr",
        "q": "How do you search for text inside a file on Windows PowerShell vs Linux?",
        "a": "PowerShell: findstr word file.txt or Select-String. Linux: grep word file.txt.",
        "tags": [
          "search",
          "terminal"
        ]
      },
      {
        "id": "4050-overwrite",
        "q": "What is the difference between > and >> when writing to a file?",
        "a": "Single > overwrites (or creates) the file. Double >> appends without deleting existing content. PowerShell: Set-Content vs Add-Content.",
        "tags": [
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-redirect.svg",
          "alt": "Terminal overwrite",
          "caption": "> overwrites file contents",
          "shows": "> replaces previous content."
        }
      },
      {
        "id": "4050-pkg-mgr",
        "q": "What is a package manager, and which ones does the course material prepare you for?",
        "a": "Tool to search/install/update software packages safely. Arch cyberlab: pacman. Ubuntu/Kali later: apt (sudo apt update / apt install).",
        "tags": [
          "packages"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pacman-flow.svg",
          "alt": "Package search and install flow",
          "caption": "Update then install",
          "shows": "Update then install"
        }
      },
      {
        "id": "4050-ping-purpose",
        "q": "What does ping test?",
        "a": "Reachability/latency to a host using ICMP echo (network layer). Limited count on Linux: ping -c 4 host.",
        "tags": [
          "network"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/term-ping.svg",
          "alt": "Terminal ping",
          "caption": "Ping checks reachability with ICMP echoes",
          "shows": "Successful replies mean the host answered."
        }
      },
      {
        "id": "4050-emneplan-pc",
        "q": "What PC/VM resources does the ACIT4050 course plan recommend for labs?",
        "a": "At least one Kali and one Ubuntu or Windows VM at once. Minimum guide: 4 CPU cores, 8 GB RAM, about 100-120 GB free disk. Basic Linux skills (packages, simple commands) are expected.",
        "tags": [
          "syllabus",
          "lab"
        ]
      },
      {
        "id": "4050-emneplan-exam",
        "q": "What is the ACIT4050 final exam format (Lecture 1 course outline)?",
        "a": "Final written exam - no supporting material permitted. Graded A to F. You must have completed at least 8 of the (at least 11) assignments to qualify.",
        "tags": [
          "syllabus",
          "exam"
        ]
      },
      {
        "id": "4050-security-privacy",
        "q": "According to the ACIT4050 learning outcomes, what relationship should you be able to describe?",
        "a": "The relationship between security and privacy, plus societal aspects of cybersecurity and cyber governance problems.",
        "tags": [
          "syllabus",
          "privacy"
        ],
        "figure": {
          "type": "img",
          "src": "figures/course-focus-4050.svg",
          "alt": "Security and privacy in course focus",
          "caption": "Security and privacy together",
          "shows": "Security and privacy together"
        }
      },
      {
        "id": "4050-pentest-defence",
        "q": "Name two practical skill areas highlighted in the ACIT4050 course introduction.",
        "a": "Penetration testing and cyber defence mechanisms (plus analysing real incidents and explaining them to experts and non-experts).",
        "tags": [
          "syllabus"
        ],
        "figure": {
          "type": "img",
          "src": "figures/course-focus-4050.svg",
          "alt": "Hands-on cyber defence focus",
          "caption": "Pentest and defence",
          "shows": "Pentest and defence"
        }
      },
      {
        "id": "4050-copy-paste-term",
        "q": "How do you often copy/paste in a Linux terminal without interrupting Ctrl+C?",
        "a": "Ctrl+Shift+C to copy and Ctrl+Shift+V to paste (Ctrl+C interrupts the running process).",
        "tags": [
          "terminal"
        ]
      },
      {
        "id": "4050-info-vs-cyber",
        "q": "How does Lecture 1 (citing Peltier) distinguish information security from cyber security?",
        "a": "Information security uses physical and logical access controls so data and information assets are used properly and not unauthorizedly modified, destroyed, disclosed, lost, or accessed (automated or manual records/files) - plus legal barriers. Cyber security is the subset limited to information stored on computers or communicated between computers.",
        "tags": [
          "Lecture1",
          "security"
        ]
      },
      {
        "id": "4050-hierarchy-trust",
        "q": "What is the hierarchy of trust for a computer system (Lecture 1)?",
        "a": "Entities trust themselves and all technology layers below them. Other trust relations should be imposed by a higher-layer entity, a user, a systems manager, and/or cryptographic protocols.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-trust-maint",
        "q": "Who maintains the hierarchy of trust for software vs for the instruction set and below?",
        "a": "Software: the companies that developed it (security mistakes fixed via software updates). Instruction set and below: component manufacturers and system integrators (firmware updates when possible).",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-trust-soft-upper",
        "q": "For the software (upper) layers in the hierarchy of trust, who maintains trust and how are discovered security mistakes corrected?",
        "a": "Maintained by the software companies that developed it. Discovered security mistakes are corrected through software security updates.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-trust-stack",
        "q": "List the hierarchy of trust technology layers from top to bottom (Lecture 1).",
        "a": "1) Application 2) Operating System 3) Hardware Adaptation Layer (HAL) 4) Instruction set 5) Integrated circuits for memory, processing and communication 6) Logic gates 7) Transistors 8) Physical phenomena. Device drivers span the OS and HAL.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-trust-drivers",
        "q": "Where do device drivers sit in the Lecture 1 hierarchy of trust stack?",
        "a": "They span the Operating System and the Hardware Adaptation Layer (HAL) - beside both, not a separate numbered layer of their own.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-trust-upper-lower",
        "q": "In the hierarchy of trust stack, which layers are the upper software-oriented part vs the lower hardware/physics part?",
        "a": "Upper: Application, Operating System (with device drivers), and Hardware Adaptation Layer. Lower: Instruction set, integrated circuits, logic gates, transistors, and physical phenomena.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-sep-untrusted",
        "q": "What must not interfere with each other in unauthorized ways (separation of untrusted entities)?",
        "a": "Processes, applications, users, and instances of operating systems must not interfere with each other unauthorizedly.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-admin-user-duty",
        "q": "Name four responsibilities Lecture 1 assigns to system administrators and users for separating untrusted entities.",
        "a": "Examples: healthy passwords; strong cryptography; admission control (physical and logical); system/firewall configuration; software and systems updates; installing only authorized software; care with mail attachments; not connecting to unauthorized hardware (Wi-Fi, Bluetooth, USB).",
        "tags": [
          "Lecture1",
          "lab",
          "security"
        ]
      },
      {
        "id": "4050-sep-hypervisor",
        "q": "Who is responsible for separating operating systems on the same hardware, and what does that involve?",
        "a": "The hypervisor (configured by the administrator): privileges in shared file systems, virtually separate file systems, process isolation support, and resource scheduling to avoid denial of service.",
        "tags": [
          "Lecture1",
          "virtualbox",
          "systems"
        ]
      },
      {
        "id": "4050-network-protect",
        "q": "In a networked environment, which protections does Lecture 1 list for administrators and users?",
        "a": "Firewalls (allowed traffic); NATs (hide addresses/structure); VPNs (logically separate networks with different privileges); cryptographic protocols (integrity and confidentiality); redundancy, scheduling and capacity (availability).",
        "tags": [
          "Lecture1",
          "network"
        ]
      },
      {
        "id": "4050-zero-day",
        "q": "What are zero days, and where does Lecture 1 say most incidents come from?",
        "a": "Zero days are security holes known to someone but not yet closed (or unpatched). Most incidents involve mistakes by users or system administrators; problems also arise from software/hardware developers and known holes without updates.",
        "tags": [
          "Lecture1",
          "security"
        ]
      },
      {
        "id": "4050-infection-classes",
        "q": "Name Lecture 1's three classifications of infections (malware types by how infection spreads).",
        "a": "Virus, Worms, and Trojans.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-virus",
        "q": "What is a computer virus according to Lecture 1?",
        "a": "Code that cannot live on its own: it attaches/inserts into a host program or file and runs whenever that host runs. It spreads by infecting other executables (often when the host is shared or executed). Initial infection can come from a once-run program (e.g. a link in e-mail).",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-worm",
        "q": "How does a worm differ from a virus (Lecture 1)?",
        "a": "A worm is self-contained and needs no host file. It self-replicates across networks without altering existing executables, e.g. by exploiting OS vulnerabilities or via e-mail attachments/links that download and run it.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-trojan",
        "q": "What is a Trojan in Lecture 1's malware classification?",
        "a": "Malware embedded in a seemingly legitimate/useful application that the user knowingly downloads and runs (screensaver, weather widget, fake virus scanner, e-mail attachment, or malicious web page). After that trust, the payload (e.g. backdoor) runs. Unlike viruses/worms, it typically does not self-replicate.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-trojan-vs-virus-worm",
        "q": "How does a Trojan operate differently from a virus and a worm?",
        "a": "Virus: needs a host program/file; spreads by attaching and when the host runs or is shared. Worm: standalone; self-replicates across networks with no host file. Trojan: appears legitimate/useful and tricks the user into installing/running it; typically does not self-replicate - the harm is the payload/backdoor after the user trusts it.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-malware-detect",
        "q": "How does Lecture 1 say detection differs for Trojans/worms vs viruses?",
        "a": "Trojans and worms can be spotted via process/application lists. Viruses often require analysis of the infected program. Malicious actions may reveal any of them - sometimes too late.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-spyware",
        "q": "What is spyware according to Lecture 1 (classification by intent)?",
        "a": "Its task is to collect sensitive information from the system it resides on and transfer it to the attacker - e.g. keystroke logging, analysing document contents, or analysing the system itself in preparation for future attacks.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-ransomware",
        "q": "What is ransomware according to Lecture 1 (classification by intent)?",
        "a": "Malware that puts the attacker in a position to require a ransom from the system owner. Most often by encrypting vital information and requiring compensation to make it available again.",
        "tags": [
          "Lecture1",
          "malware",
          "CIA"
        ]
      },
      {
        "id": "4050-rootkit",
        "q": "What is a rootkit according to Lecture 1 (classification by intent)?",
        "a": "A set of techniques used to mask the presence of malware, usually via privileged root/administrator access. Not bad per se, but central to most sophisticated attacks; hard to detect/remove because they can subvert anti-malware tools.",
        "tags": [
          "Lecture1",
          "malware"
        ]
      },
      {
        "id": "4050-bot-botnet",
        "q": "What is a bot and a botnet according to Lecture 1 (classification by intent)?",
        "a": "A bot gives the attacker (botmaster) remote control of a system. A botnet is many infected machines under one botmaster - typically used to attack other computers or send spam.",
        "tags": [
          "Lecture1",
          "malware",
          "network"
        ]
      },
      {
        "id": "4050-ddos",
        "q": "What are DoS and DDoS attacks according to Lecture 1?",
        "a": "Denial of Service and Distributed Denial of Service. They target availability by overloading a target with requests or traffic. Usually performed with botnets where all bots flood the target at once. Targets are often web servers, but other servers too.",
        "tags": [
          "Lecture1",
          "network",
          "CIA"
        ]
      },
      {
        "id": "4050-nist-six",
        "q": "Name the six functions of the NIST Cybersecurity Framework 2.0 (Lecture 1).",
        "a": "Identify, Protect, Detect, Respond, Recover, and Govern - the highest-level pillars of a holistic cybersecurity program.",
        "tags": [
          "Lecture1",
          "NIST"
        ]
      },
      {
        "id": "4050-nist-ai",
        "q": "According to Lecture 1, how does AI change the NIST CSF functions?",
        "a": "AI profoundly changes Detect and heavily influences Respond and Protect. It is a more generic tool for Identify, Recover, and Govern (and should not be solely responsible for Identify or Govern).",
        "tags": [
          "Lecture1",
          "NIST",
          "AI"
        ]
      },
      {
        "id": "4050-nist-govern",
        "q": "In the NIST CSF 2.0 wheel (Lecture 1), where does Govern sit relative to the other functions?",
        "a": "Govern is the inner surrounding ring - organisational governance wraps Identify, Protect, Detect, Respond, and Recover.",
        "tags": [
          "Lecture1",
          "NIST"
        ]
      },
      {
        "id": "4050-killchain-seven",
        "q": "List the seven Lockheed Martin Cyber Kill Chain stages from Lecture 1.",
        "a": "1) Reconnaissance 2) Weaponization 3) Delivery 4) Exploitation 5) Installation 6) Command and control 7) Action on objectives.",
        "tags": [
          "Lecture1",
          "kill-chain"
        ]
      },
      {
        "id": "4050-killchain-order",
        "q": "Name the Lockheed Martin Kill Chain stages in order using the short slide labels.",
        "a": "Recon, Weaponise, Deliver, Exploit, Install, C2, Action (left to right).",
        "tags": [
          "Lecture1",
          "kill-chain"
        ]
      },
      {
        "id": "4050-killchain-ai",
        "q": "Which Kill Chain stages does Lecture 1 say AI simplifies massively?",
        "a": "Reconnaissance and Weaponization massively; Delivery to some extent; Exploitation massively via better recon/weaponization; Installation partly. C2 and Action on objectives are not directly driven by AI, though AI can help hide or detect protective actions.",
        "tags": [
          "Lecture1",
          "kill-chain",
          "AI"
        ]
      },
      {
        "id": "4050-mitre-attack",
        "q": "What is MITRE ATT&CK, and why does Lecture 1 point to it?",
        "a": "An extended, more detailed kill-chain-style knowledge base (attack.mitre.org) with vulnerabilities, mitigations, and detection mechanisms - useful examples beyond the simplified Lockheed Martin chain.",
        "tags": [
          "Lecture1",
          "kill-chain"
        ]
      },
      {
        "id": "4050-assign-hard",
        "q": "What does Lecture 1 say about ACIT4050 assignments and deadlines?",
        "a": "At least 11 assignments will be given; at least 8 must be completed to qualify for the exam. One-week deadlines are hard. Graded pass/fail only - they do not count toward the final course grade. Final exam: written, no supporting material, A-F.",
        "tags": [
          "Lecture1",
          "syllabus",
          "exam"
        ]
      },
      {
        "id": "4050-week1-canvas",
        "q": "What are the rules for this week's Canvas intro quiz assignment (Lecture 1)?",
        "a": "Interactive Canvas quiz in exam-like style; max 100 points; need at least 60 to accept; five attempts before the deadline; only the maximum score counts. It does not count toward the final course grade.",
        "tags": [
          "Lecture1",
          "syllabus"
        ]
      },
      {
        "id": "4050-staff-roles",
        "q": "Who is the ACIT4050 course manager, main lecturers, and TA (fall 2026 welcome)?",
        "a": "Course manager / lecturer / examiner: Nurul Momen. Lectures mostly by Olav Lysne and Nurul Momen. TA: Ahsan Sonar (lab setup help).",
        "tags": [
          "syllabus",
          "staff"
        ]
      },
      {
        "id": "4050-staff-email",
        "q": "What are the ACIT4050 lecturer contact emails (Lecture 1)?",
        "a": "Nurul Momen: nurul.momen@oslomet.no. Olav Lysne: olavl@oslomet.no. Primary course contact is often Nurul; check Canvas Announcements for schedule changes.",
        "tags": [
          "syllabus",
          "staff"
        ]
      },
      {
        "id": "4050-intro-assign",
        "q": "When is Canvas Assignment: Introduction Lecture available and due (fall 2026)?",
        "a": "Available Mon 17 Aug 2026 00:00 through Tue 25 Aug 2026 23:59 (locked until 17 Aug 00:00). Due Tue 25 Aug 23:59. Worth 100 points.",
        "tags": [
          "syllabus",
          "assignment"
        ]
      },
      {
        "id": "4050-welcome-canvas",
        "q": "Where are ACIT4050 materials, and what does the fall 2026 welcome stress about the course?",
        "a": "All materials are in Canvas Modules (schedule may change via Announcements). Hands-on work: penetration testing, societal/theoretical cyber defence, and real incidents; guest lectures are hoped for.",
        "tags": [
          "syllabus"
        ]
      },
      {
        "id": "4050-man-help",
        "q": "How do you open built-in documentation for a command?",
        "a": "Linux: man ls (quit with q). PowerShell: Get-Help Get-ChildItem -Full.",
        "tags": [
          "terminal"
        ]
      },
      {
        "id": "4050-dos-vs-ddos",
        "q": "DoS vs DDoS (Lecture 1): how do they differ, and what do they share?",
        "a": "Both target availability by overloading a target with requests/traffic (often web or other servers). DoS is the general Denial of Service idea (can be from a single source). DDoS is Distributed: usually a botnet where many bots flood the target simultaneously.",
        "tags": [
          "Lecture1",
          "network",
          "CIA",
          "contrast"
        ]
      },
      {
        "id": "4050-intent-four",
        "q": "Name Lecture 1's four malware classes according to intent.",
        "a": "Spyware, Ransomware, Bot, and Rootkit - classified by what the malware is for (intent), not by how it spreads.",
        "tags": [
          "Lecture1",
          "malware",
          "intent"
        ]
      },
      {
        "id": "4050-intent-vs-spread",
        "q": "Lecture 1: how does classification by intent differ from virus/worm/Trojan?",
        "a": "Virus / worm / Trojan classify how infection spreads or is delivered. Spyware / ransomware / bot / rootkit classify intent (steal data, demand ransom, remote control, hide malware). The same sample can fit both axes (e.g. a Trojan that installs ransomware).",
        "tags": [
          "Lecture1",
          "malware",
          "contrast"
        ]
      },
      {
        "id": "4050-spyware-vs-ransomware",
        "q": "Spyware vs ransomware (Lecture 1 intent classes) - contrast the goals.",
        "a": "Spyware: collect sensitive info and transfer it to the attacker (keystrokes, documents, system prep for later attacks). Ransomware: force a ransom - most often encrypt vital info and demand payment to restore availability.",
        "tags": [
          "Lecture1",
          "malware",
          "intent",
          "contrast"
        ]
      },
      {
        "id": "4050-bot-vs-rootkit",
        "q": "Bot vs rootkit (Lecture 1 intent classes) - contrast the roles.",
        "a": "Bot: remote control by a botmaster (many bots = botnet for attacks/spam). Rootkit: techniques to mask malware presence, usually with root/admin privileges - not bad per se, but central to sophisticated attacks and hard to detect/remove (can subvert anti-malware).",
        "tags": [
          "Lecture1",
          "malware",
          "intent",
          "contrast"
        ]
      },
      {
        "id": "4050-sep-os",
        "q": "Whose duty is separating processes/apps and users on one computer (Lecture 1)?",
        "a": "The operating system (often configured by admin/user). For processes/apps: privileged file systems, memory mapping, CPU scheduling, peripheral virtualization. For users: passwords, privileges (e.g. root), separate file systems / access control, process isolation, resource scheduling against DoS.",
        "tags": [
          "Lecture1",
          "systems"
        ]
      },
      {
        "id": "4050-recording",
        "q": "What does Lecture 1 say about lecture recordings and student voice?",
        "a": "Screen and sound only - you are not visible. Voice may be recorded identifiably; ask in breaks/after if you prefer not. Contact the lecturer to remove a recorded question.",
        "tags": [
          "Lecture1",
          "syllabus"
        ]
      },
      {
        "id": "4050-syllabus-hard",
        "q": "What is the ACIT4050 syllabus, and how are assignment deadlines graded (Lecture 1)?",
        "a": "Syllabus = content of the lectures. Assignments: one-week HARD deadlines; pass/fail only; do not count toward the final course grade. At least 11 given; at least 8 must be completed to sit the exam.",
        "tags": [
          "Lecture1",
          "syllabus"
        ]
      }
    ]
  },
  "acit4280": {
    "course": "ACIT4280",
    "title": "Privacy / GDPR (L1-L6)",
    "cards": [
      {
        "id": "4280-personal-data",
        "q": "What is 'personal data' under GDPR Art. 4(1)?",
        "a": "Any information relating to an identified or identifiable natural person (data subject)-directly or indirectly (e.g. name, ID number, location data, online identifier, factors specific to physical/physiological/genetic/mental/economic/cultural/social identity).",
        "tags": [
          "definitions",
          "Art.4"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/personal-data-clear.svg",
          "alt": "Personal data",
          "caption": "Personal data = identifiable person info",
          "shows": "Name, email, phone, IP and cookie IDs can qualify."
        }
      },
      {
        "id": "4280-processing",
        "q": "What counts as 'processing' (Art. 4(2))?",
        "a": "Any operation (or set of operations) performed on personal data-whether or not by automated means-e.g. collection, recording, organisation, storage, adaptation, retrieval, consultation, use, disclosure, restriction, erasure or destruction.",
        "tags": [
          "definitions",
          "Art.4"
        ],
        "figure": {
          "type": "img",
          "src": "figures/processing-ops.svg",
          "alt": "Processing operations overview",
          "caption": "Processing covers almost every operation on personal data",
          "shows": "Collect, store, use, share, erase - all count as processing under Art. 4(2)."
        }
      },
      {
        "id": "4280-art5",
        "q": "Name the core Art. 5 principles for processing personal data.",
        "a": "Lawfulness, fairness and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; accountability.",
        "tags": [
          "Art.5",
          "principles"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-art5-principles.png",
          "alt": "GDPR Article 5 principles slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-art6",
        "q": "List the six lawful bases for processing under GDPR Art. 6(1).",
        "a": "Consent; contract; legal obligation; vital interests; public interest / official authority; legitimate interests (controller or third party), with balancing where applicable.",
        "tags": [
          "Art.6",
          "lawfulness"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-art6-lawfulness.png",
          "alt": "GDPR Article 6 lawfulness conditions",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-consent",
        "q": "What makes consent valid under GDPR (Art. 4(11) / Art. 7)?",
        "a": "Freely given, specific, informed, and unambiguous indication by a clear affirmative action (no pre-ticked boxes). Controller must be able to demonstrate consent; withdrawal must be as easy as giving consent.",
        "tags": [
          "consent",
          "Art.7"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-art6-lawfulness.png",
          "alt": "Lawfulness and consent conditions",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-art9",
        "q": "What are 'special categories' of personal data (Art. 9)?",
        "a": "Data revealing racial/ethnic origin, political opinions, religious/philosophical beliefs, trade-union membership; genetic data; biometric data for uniquely identifying a person; health data; data concerning sex life or sexual orientation. Processing is prohibited unless an Art. 9(2) exception applies (e.g. explicit consent).",
        "tags": [
          "Art.9",
          "special-categories"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-art9-special.png",
          "alt": "GDPR Article 9 special categories",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-controller-processor",
        "q": "Controller vs processor - what's the difference?",
        "a": "Controller determines purposes and means of processing. Processor processes personal data on behalf of the controller; processing must be governed by a contract/legal act (Art. 28).",
        "tags": [
          "roles"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/gdpr-roles-clear.svg",
          "alt": "GDPR roles",
          "caption": "Controller decides; processor follows instructions",
          "shows": "Controller instructs processor; data subject is the person."
        }
      },
      {
        "id": "4280-dsr",
        "q": "Name key data subject rights under GDPR (Ch. III / Art. 12-22).",
        "a": "Transparency/information (Art. 12-14); access (Art. 15); rectification (16); erasure/'right to be forgotten' (17); restriction (18); portability (20); object (21); not to be subject solely to automated decisions with legal/similarly significant effects (22). Also withdraw consent and lodge a complaint with a supervisory authority.",
        "tags": [
          "rights",
          "Ch.III"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-overview.png",
          "alt": "Data subject rights overview",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-lindqvist",
        "q": "What is the main takeaway from Lindqvist (C-101/01) for privacy law?",
        "a": "Publishing personal data about others on a website can be 'processing' and a transfer of personal data; the household exemption is narrow and does not cover making data accessible on the open internet to an indefinite number of people.",
        "tags": [
          "case-law",
          "Lindqvist"
        ]
      },
      {
        "id": "4280-household",
        "q": "What is the household exemption (Art. 2(2)(c))?",
        "a": "GDPR does not apply to processing by a natural person in the course of a purely personal or household activity (with no connection to a professional/commercial activity). Narrowly interpreted (see Lindqvist).",
        "tags": [
          "scope"
        ],
        "figure": {
          "type": "img",
          "src": "figures/household.svg",
          "alt": "Household exemption diagram",
          "caption": "Household exemption is narrow",
          "shows": "Purely personal/home use only. Publishing to the open internet is usually outside the exemption."
        }
      },
      {
        "id": "4280-territorial",
        "q": "When does GDPR apply territorially (Art. 3)?",
        "a": "Processing in the context of an establishment of a controller/processor in the Union, regardless of whether processing takes place in the Union; and to non-EU controllers/processors offering goods/services to data subjects in the Union or monitoring their behaviour in the Union.",
        "tags": [
          "Art.3",
          "scope"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-scope-lex.png",
          "alt": "GDPR scope lex generalis slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-pbd",
        "q": "What does Privacy by Design / Art. 25 require in short?",
        "a": "Art. 25(1): implement appropriate technical and organisational measures designed to implement data-protection principles and protect rights (data protection by design), from the earliest stage. Art. 25(2): by default only personal data necessary for each purpose are processed (data protection by default)-short storage, limited accessibility.",
        "tags": [
          "Art.25",
          "PbD"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/cavoukian-pbd.png",
          "alt": "Ann Cavoukian Privacy by Design slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-dpi",
        "q": "When should you consider a DPIA (Art. 35)?",
        "a": "When processing is likely to result in a high risk to the rights and freedoms of natural persons (especially new technologies / systematic large-scale processing of special categories, systematic monitoring, etc.). Prior consultation with the supervisory authority may be required (Art. 36).",
        "tags": [
          "Art.35",
          "DPIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-process.png",
          "alt": "PIA is a process slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-kosinski",
        "q": "What is a key privacy takeaway from Kosinski et al. (PNAS 2013) used in the course readings?",
        "a": "Private traits and attributes can be predicted from digital records of human behaviour (e.g. Facebook Likes)-showing how seemingly 'non-sensitive' data can reveal sensitive attributes (function creep / inference risk).",
        "tags": [
          "readings",
          "inference"
        ],
        "figure": {
          "type": "img",
          "src": "figures/personal-data.svg",
          "alt": "Inference from personal data traits",
          "caption": "Sensitive inferences",
          "shows": "Sensitive inferences"
        }
      },
      {
        "id": "4280-warren-brandeis",
        "q": "What classic phrase did Warren & Brandeis (1890) associate with the right to privacy?",
        "a": "The right 'to be let alone' (also phrased 'to be left alone')-a reaction to intrusive new media such as press photography.",
        "tags": [
          "history",
          "Lecture1"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/warren-brandeis.png",
          "alt": "Warren and Brandeis privacy history slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-udhr12",
        "q": "What does Article 12 of the Universal Declaration of Human Rights (1948) protect regarding privacy?",
        "a": "No one shall be subjected to arbitrary interference with privacy, family, home or correspondence, nor to attacks upon honour and reputation; everyone has the right to legal protection against such interference or attacks.",
        "tags": [
          "history",
          "human-rights",
          "Lecture1"
        ]
      },
      {
        "id": "4280-westin",
        "q": "How does Westin (1967) define privacy (as cited in the course intro)?",
        "a": "The claim of individuals to determine for themselves when, how, and to what extent information about them is communicated to others.",
        "tags": [
          "definitions",
          "theory"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/westin-privacy.png",
          "alt": "Alan Westin privacy slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-asymmetric-risk",
        "q": "In Lecture 1's fairness framing, how are costs/risks of data use asymmetric between controller and individual?",
        "a": "Controllers gain from collection/use (income, control, expertise) while individuals bear inspection costs, breach/abuse harms (reputation, loss, threats), knowledge asymmetry, and reduced freedom/control-access to personal data creates power over people.",
        "tags": [
          "Lecture1",
          "fairness"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/risk-duality.png",
          "alt": "Duality of risks diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-chilling",
        "q": "What is the 'chilling effect' in the society/privacy slides?",
        "a": "People retreat from controversial matters and relationships when institutions/controllers exercise power via data-undermining trust and participation.",
        "tags": [
          "Lecture1",
          "society"
        ],
        "figure": {
          "type": "img",
          "src": "figures/function-creep.svg",
          "alt": "Surveillance chilling effect metaphor",
          "caption": "Behaviour changes under watch",
          "shows": "Behaviour changes under watch"
        }
      },
      {
        "id": "4280-oecd-principles",
        "q": "Name core basic privacy principles from OECD Guidelines / Lecture 1.",
        "a": "Lawfulness (e.g. informed consent / collection limitation); data minimisation & avoidance; purpose specification & purpose binding (use limitation); transparency & intervenability; appropriate security; accountability. Note: 'non-sensitive' data do not exist-function creep examples include loyalty-card misuse and Lidl video monitoring.",
        "tags": [
          "OECD",
          "principles"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/privacy-principles-basic.png",
          "alt": "Basic privacy principles slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-function-creep",
        "q": "What is 'function creep' (purpose misuse) as taught in Lecture 1?",
        "a": "Using data collected for one purpose for another, unintended purpose-e.g. loyalty-card data against customer interests, or workplace video monitoring scandals (Lidl 2006).",
        "tags": [
          "Lecture1",
          "purpose-limitation"
        ],
        "figure": {
          "type": "img",
          "src": "figures/function-creep.svg",
          "alt": "Stated purpose drifting to new uses",
          "caption": "Purpose limitation risk",
          "shows": "Purpose limitation risk"
        }
      },
      {
        "id": "4280-bismarck",
        "q": "What privacy milestone followed the Bismarck deathbed photo scandal (1898)?",
        "a": "Photographers entered the bedroom, staged the corpse for photos, and offered copies via newspaper ads; they were arrested and imprisoned. In 1907 a law on the 'right on own image' followed (Lecture 1 history).",
        "tags": [
          "Lecture1",
          "history"
        ]
      },
      {
        "id": "4280-privacy-usecases",
        "q": "Name three 'obvious use cases' for privacy from Lecture 1 (how privacy shapes society).",
        "a": "Voting secrecy as a foundation for democracy; protection against discrimination based on political opinion, relationships, religion or philosophy; enabling personal freedom and independence in thinking and development. Access to and control over personal data creates power over individuals.",
        "tags": [
          "Lecture1",
          "society"
        ]
      },
      {
        "id": "4280-asymmetric-cost",
        "q": "What is the asymmetric cost problem in Lecture 1's fairness framing?",
        "a": "Data controllers can collect and use data relatively easily, while the individual bears the hard work of inspecting and stopping collection/use.",
        "tags": [
          "Lecture1",
          "fairness"
        ]
      },
      {
        "id": "4280-asymmetric-knowledge",
        "q": "What is the asymmetric knowledge problem between controller and individual (Lecture 1)?",
        "a": "Controllers have domain experts, budgets, and knowledge of business models and data processing/informatics; individuals typically do not.",
        "tags": [
          "Lecture1",
          "fairness"
        ]
      },
      {
        "id": "4280-asymmetric-profit",
        "q": "How does Lecture 1 frame profit asymmetry around personal data?",
        "a": "Controllers get income and growth from data (and 'free' apps); individuals face price discrimination, impulse shopping pressure, and being judged by others.",
        "tags": [
          "Lecture1",
          "fairness"
        ]
      },
      {
        "id": "4280-sovereignty",
        "q": "What 'attack on sovereignty' risk does Lecture 1 link to data about members of society?",
        "a": "Knowledge about each member enables selecting, discriminating and manipulating public discourse, public trust and public reputation; individuals need transparency about origins and motivation of communication.",
        "tags": [
          "Lecture1",
          "society"
        ]
      },
      {
        "id": "4280-pol-norway",
        "q": "How does GDPR relate to Norwegian law in Lecture 1's privacy-principles overview?",
        "a": "In EU/EFTA, GDPR is 'translated' into national laws-e.g. Personopplysningsloven in Norway. Historically: national laws from the 1970s, then EU harmonisation via a directive, then GDPR (with e-Privacy enrichment still expected); other regions and sectors (health, finance) have their own rules.",
        "tags": [
          "Lecture1",
          "Norway",
          "GDPR"
        ]
      },
      {
        "id": "4280-nonsensitive-myth",
        "q": "What does Lecture 1 claim about so-called 'non-sensitive' data?",
        "a": "'Non-sensitive' data do not exist: purpose misuse / function creep can turn ordinary data into harmful uses (examples: Lidl video monitoring; loyalty-card data used against customer interests).",
        "tags": [
          "Lecture1",
          "principles"
        ],
        "figure": {
          "type": "img",
          "src": "figures/function-creep.svg",
          "alt": "Ordinary data reused for new purposes",
          "caption": "Function creep undermines 'non-sensitive' labels",
          "shows": "Purpose binding matters even for everyday data."
        }
      },
      {
        "id": "4280-enforcement-tracker",
        "q": "Which public tracker does Lecture 1 Case study 1 point to for real GDPR fines?",
        "a": "The GDPR fines / enforcement tracker at enforcementtracker.com-use it to pick an organisation, understand its business motive, identify which GDPR part was violated, and summarise for class.",
        "tags": [
          "Lecture1",
          "case-study",
          "enforcement"
        ]
      },
      {
        "id": "4280-ico-lawful-tool",
        "q": "What tool does Lecture 1 Case study 2 recommend for checking legal grounds for processing?",
        "a": "The ICO lawful-basis interactive guidance tool (ico.org.uk GDPR resources): pick a site with a clear service and privacy policy, then evaluate legal grounds for processing.",
        "tags": [
          "Lecture1",
          "case-study",
          "Art.6"
        ]
      },
      {
        "id": "4280-webbkoll",
        "q": "What does Lecture 1 Case study 3 use Webbkoll (webbkoll.dataskydd.net) for?",
        "a": "Assess third-party data sharing on a chosen web page: compare the privacy policy's sharing claims with what Webbkoll observes in practice, then summarise findings.",
        "tags": [
          "Lecture1",
          "case-study",
          "transparency"
        ]
      },
      {
        "id": "4280-oecd-minimise",
        "q": "What does Lecture 1 say data minimisation and avoidance require (OECD-linked)?",
        "a": "Data should be adequate, relevant and not excessive; minimise collection, use, sharing, linkability and retention (cf. OECD Data Quality / related principles).",
        "tags": [
          "Lecture1",
          "OECD",
          "minimisation"
        ]
      },
      {
        "id": "4280-asymmetric-control",
        "q": "What is the asymmetric control / power problem in Lecture 1's fairness framing?",
        "a": "Controllers gain control and power through access to personal data, while individuals lose freedom and practical control over how data about them is used-data access becomes power over people.",
        "tags": [
          "Lecture1",
          "fairness"
        ]
      },
      {
        "id": "4280-purpose-binding",
        "q": "What do purpose specification and purpose binding require (OECD / Lecture 1 basic principles)?",
        "a": "Collect and process data only for specified, explicit purposes (purpose specification); do not reuse for incompatible purposes (purpose binding / use limitation). Function creep violates this.",
        "tags": [
          "Lecture1",
          "OECD",
          "purpose-limitation"
        ]
      },
      {
        "id": "4280-cia-insufficient",
        "q": "Why is the CIA triad (confidentiality, integrity, availability) insufficient for data protection / privacy?",
        "a": "CIA secures systems and data against unauthorised access, tampering and downtime, but does not cover privacy-specific goals such as transparency, intervenability and unlinkability (or purpose limitation / fairness). Data protection needs CIA plus those privacy protection goals.",
        "tags": [
          "Lecture1",
          "Lecture3",
          "CIA",
          "protection-goals"
        ],
        "figure": {
          "type": "img",
          "src": "figures/cia-triad.svg",
          "alt": "CIA triad alone is not full data protection",
          "caption": "CIA is necessary but not sufficient for privacy",
          "shows": "Add transparency, intervenability, unlinkability (SDM / Hansen et al.)."
        }
      },
      {
        "id": "4280-pets-chaum-mixmaster",
        "q": "Who opened PET research, and what was the first practically available PET system?",
        "a": "David Chaum (1981 MIX paper: anonymous/unobservable e-mail via layered encryption and mixing). MixMaster later implemented the idea and is cited as the first practically available PET system.",
        "tags": [
          "PETs",
          "Lecture2",
          "history",
          "WillPETS"
        ]
      },
      {
        "id": "4280-pets-what-is-pet",
        "q": "What does PET mean (plain oral exam answer)?",
        "a": "Privacy Enhancing Technology (or Privacy Enhancing Technologies): technical measures that protect privacy - e.g. by hiding identity/links or by making processing more transparent and controllable.",
        "tags": [
          "PETs",
          "definitions",
          "oral",
          "Lecture2"
        ]
      },
      {
        "id": "4280-pets-what-is-tet",
        "q": "What does TET mean?",
        "a": "Transparency Enhancing Tool (or Transparency Enhancing Tools / transparency tools): PETs that create insight into what personal data is processed, how, and by whom - so the data subject (or auditor) can understand and often intervene.",
        "tags": [
          "TETs",
          "definitions",
          "oral",
          "Lecture2",
          "transparency"
        ]
      },
      {
        "id": "4280-pets-hide-vs-show",
        "q": "Opacity tools vs transparency tools in one line - with examples?",
        "a": "Opacity tools hide (identity or link to data), e.g. Tor / Mixes. Transparency tools show (what is processed, how, by whom), e.g. privacy dashboards, audit logs, notices.",
        "tags": [
          "PETs",
          "TETs",
          "opacity",
          "transparency",
          "oral",
          "Lecture2"
        ]
      },
      {
        "id": "4280-pets-transparency-vs-opacity",
        "q": "How do transparency tools differ from opacity tools in the PETs typology (Fritsch)?",
        "a": "Transparency tools create insight into what data is processed, how, and by whom (e.g. audits, audit interfaces, log files; legal rights to be informed). Opacity tools hide a person's identity or link to data (e.g. MixMaster, Tor, pseudonyms/PrivacyABCs; election secrecy).",
        "tags": [
          "PETs",
          "Lecture2",
          "transparency",
          "opacity",
          "WillPETS"
        ]
      },
      {
        "id": "4280-pets-opacity-techniques",
        "q": "List opacity-tool techniques from the Will PETS page (Fritsch).",
        "a": "Obfuscation; encryption; data separation; anonymization and pseudonymization; access restrictions; use restrictions. Historically many PETs were opacity tools (hide, restrict or control personal data).",
        "tags": [
          "PETs",
          "opacity",
          "WillPETS"
        ]
      },
      {
        "id": "4280-pets-hedbom-tet",
        "q": "Per Hedbom, what can a transparency tool for privacy do?",
        "a": "One or more of: (1) inform the data subject (or proxy) about intended collection/storage/processing; (2) give access to stored data and/or processing logic; (3) provide counter-profiling so the subject can anticipate how data match group profiles that affect risks/opportunities.",
        "tags": [
          "TETs",
          "transparency",
          "Hedbom",
          "WillPETS"
        ]
      },
      {
        "id": "4280-pets-pulls-conflict",
        "q": "How can transparency conflict with data minimisation (Pulls)?",
        "a": "Logging processing or making activity visible to third parties can create new privacy risks. Example: confidentiality of a private conversation is natural privacy, while making that conversation transparent to a third party violates the parties' privacy expectation.",
        "tags": [
          "TETs",
          "data-minimisation",
          "Pulls",
          "WillPETS"
        ]
      },
      {
        "id": "4280-pets-exante-expost",
        "q": "Ex-ante vs ex-post TETs - what is the timing distinction?",
        "a": "Ex-ante TETs inform before processing (policies, notices, acceptance). Ex-post TETs inspect after (or in realtime during) processing - audits, dashboards, intervenability/remediation tools.",
        "tags": [
          "TETs",
          "Lecture2",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TetCat classification of TETs (Zimmermann 2015)",
          "caption": "Figure 2: TetCat (Zimmermann, 2015) from ACIT4280 PETs page.",
          "shows": "Untrusted Assertion; trusted Ex Ante Awareness/Declaration; Ex Post Audit/Intervention/Remediation."
        }
      },
      {
        "id": "4280-pets-tetcat-overview",
        "q": "Sketch Zimmermann TetCat: which six leaf TET types, and the main splits?",
        "a": "Splits: Assumption of Security Untrusted vs (Semi-)Trusted; then Action Timing Ex Ante vs Ex Post/Realtime; then Interaction Level Read Only vs Interactive. Leaves: Assertion; Awareness; Declaration; Audit; Intervention; Remediation.",
        "tags": [
          "TETs",
          "TetCat",
          "Zimmermann",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TetCat classification of TETs (Zimmermann 2015)",
          "caption": "Figure 2: TetCat (Zimmermann, 2015) from ACIT4280 PETs page.",
          "shows": "Untrusted Assertion; trusted Ex Ante Awareness/Declaration; Ex Post Audit/Intervention/Remediation."
        }
      },
      {
        "id": "4280-pets-tetcat-assertion",
        "q": "In TetCat, what is an Assertion TET?",
        "a": "Untrusted path only: the tool relies on assertions/declarations by the data processor rather than trusted observation of actual processing (AS: Untrusted -> Assertion TET).",
        "tags": [
          "TETs",
          "TetCat",
          "Zimmermann",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TetCat classification of TETs (Zimmermann 2015)",
          "caption": "Figure 2: TetCat (Zimmermann, 2015) from ACIT4280 PETs page.",
          "shows": "Untrusted Assertion; trusted Ex Ante Awareness/Declaration; Ex Post Audit/Intervention/Remediation."
        }
      },
      {
        "id": "4280-pets-tetcat-exante",
        "q": "In TetCat, how do Awareness and Declaration TETs differ (trusted, ex ante)?",
        "a": "Both are (Semi-)Trusted and Ex Ante. Awareness TET = Read Only (informative). Declaration TET = Interactive (data subject inspects/accepts processing).",
        "tags": [
          "TETs",
          "TetCat",
          "Zimmermann",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TetCat classification of TETs (Zimmermann 2015)",
          "caption": "Figure 2: TetCat (Zimmermann, 2015) from ACIT4280 PETs page.",
          "shows": "Untrusted Assertion; trusted Ex Ante Awareness/Declaration; Ex Post Audit/Intervention/Remediation."
        }
      },
      {
        "id": "4280-pets-tetcat-expost",
        "q": "In TetCat, how do Audit, Intervention and Remediation TETs differ (trusted, ex post)?",
        "a": "All (Semi-)Trusted and Ex Post/Realtime. Audit = Read Only inspection. Interactive Collection/Usage -> Intervention TET (limit collection/use). Interactive Collection/Usage & Modification/Deletion -> Remediation TET (also change/remove data).",
        "tags": [
          "TETs",
          "TetCat",
          "Zimmermann",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TetCat classification of TETs (Zimmermann 2015)",
          "caption": "Figure 2: TetCat (Zimmermann, 2015) from ACIT4280 PETs page.",
          "shows": "Untrusted Assertion; trusted Ex Ante Awareness/Declaration; Ex Post Audit/Intervention/Remediation."
        }
      },
      {
        "id": "4280-pets-fritsch-timeline",
        "q": "Fritsch PET timeline decades (1970s-2000+): key milestones per decade?",
        "a": "1970s: data protection in computers debate. 1980s: Mix invented; information hiding; steganography. 1990s: MixMaster; IP/ISDN/GSM Mixes; credentials; commercialization. 2000+: more regulation; internationalization; compliance; large research projects; application focus.",
        "tags": [
          "PETs",
          "history",
          "Fritsch",
          "WillPETS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-timeline-fritsch.png",
          "alt": "Historic development of PETs (Fritsch 2007)",
          "caption": "Figure 1: PET timeline (Fritsch, 2007) from ACIT4280 PETs page.",
          "shows": "1970s debate; 1980s Mix/hiding; 1990s MixMaster/commercialization; 2000+ compliance."
        }
      },
      {
        "id": "4280-sticky-policies",
        "q": "What are sticky policies (Pearson & Casassa-Mont 2011), and why do they matter for managed privacy?",
        "a": "Machine-readable privacy preferences that travel with the personal data as it moves across systems and parties, so the agreed constraints 'stick' after disclosure/sharing-supporting purpose limitation and multi-party privacy management beyond a single controller.",
        "tags": [
          "managed-privacy",
          "sticky-policies",
          "PETs",
          "Chapter5"
        ]
      },
      {
        "id": "4280-managed-privacy-roadmap",
        "q": "What is the theme of Fritsch & Abie's 2008 research road map on managing privacy risks?",
        "a": "Treat privacy as something to manage systematically in information systems (privacy risk management / 'managed privacy'): identify and handle privacy risks (incl. duality of risks to users vs organisations), not only react with ad-hoc PETs or legal checklists. Sets a research agenda for managing privacy risks end-to-end.",
        "tags": [
          "managed-privacy",
          "privacy-risk",
          "Chapter5",
          "Fritsch"
        ]
      },
      {
        "id": "4280-zimmermann-tetcat",
        "q": "How does Zimmermann (2015) categorise TETs (TetCat), beyond simple ex-ante vs ex-post?",
        "a": "Uses key parameters Assurance Level (trustworthiness of info), Application Time (ex ante / ex post / real time), and Interactivity Level (read-only insight vs control). TetCat groups TETs into categories such as Assertion, Awareness/Declaration, Audit, Intervention and Remediation TETs. Distinct from Pfitzmann-Hansen anonymity terminology.",
        "tags": [
          "managed-privacy",
          "TETs",
          "Zimmermann",
          "Chapter5",
          "Lecture2"
        ]
      },
      {
        "id": "4280-pet-lim-dimensions",
        "q": "Along which three dimensions are limitations of PETs in practice discussed?",
        "a": "Technological limitations; usability / ergonomy; and maturity of PETs in IT investment decisions (cost/benefit framing).",
        "tags": [
          "PETs",
          "limitations",
          "managed-privacy",
          "Chapter5",
          "oral"
        ]
      },
      {
        "id": "4280-pet-lim-tech",
        "q": "Give technological limitation examples for PETs in practice.",
        "a": "Cryptography often costly to run; TOR can be slow; Privacy ABCs / IDEMIX / U-Prove can be computationally expensive; sticky-policy approaches add complexity when policies must travel with data across parties.",
        "tags": [
          "PETs",
          "limitations",
          "technology",
          "Chapter5"
        ]
      },
      {
        "id": "4280-pet-lim-usability",
        "q": "What usability / ergonomy limits PETs in practice?",
        "a": "Procedural restrictions plus performance/complexity burdens. Usable privacy is its own research field. User acceptance is a hard limit (Fritsch & Fuglerud): if users will not or cannot use the PET, the privacy gain fails in practice.",
        "tags": [
          "PETs",
          "limitations",
          "usability",
          "Fuglerud",
          "Chapter5"
        ]
      },
      {
        "id": "4280-pet-lim-cost-drivers",
        "q": "Is PET / IT the main cost driver of organisational privacy work?",
        "a": "Often no. Privacy office, training, legal and policy work frequently dominate (Ponemon 2004). Roughly ~1/3 of privacy-office spend and under half of training spend may go to IT systems - so PETs are only part of the privacy bill.",
        "tags": [
          "PETs",
          "limitations",
          "cost",
          "Ponemon",
          "Chapter5"
        ]
      },
      {
        "id": "4280-pet-lim-compliance-goal",
        "q": "What investment goal do organisations often optimise for instead of maximum privacy?",
        "a": "Cheapest sufficient compliance: spend on privacy measures up to where marginal spend roughly equals expected cost of non-compliance (fines, breach fallout, reputation) - not maximising privacy regardless of cost.",
        "tags": [
          "PETs",
          "limitations",
          "compliance",
          "cost",
          "Chapter5",
          "oral"
        ]
      },
      {
        "id": "4280-pet-lim-ropi",
        "q": "What is ROPI (Fritsch & Abie), and what is the formula?",
        "a": "Return on Privacy Investment. ROPI = PB * CB - ICB (privacy benefit times cost of breach, minus investment/cost of the privacy controls). Needs breach incidence lists and cost data - which are mostly white spots empirically.",
        "tags": [
          "PETs",
          "ROPI",
          "Fritsch",
          "Abie",
          "managed-privacy",
          "Chapter5"
        ]
      },
      {
        "id": "4280-pet-lim-summary",
        "q": "Summarise common practical critiques of PETs.",
        "a": "Often poorly aligned with real organisational needs; costly; poorly usable; unclear performance/benefit; complicate development; and many remain research prototypes rather than production-ready products.",
        "tags": [
          "PETs",
          "limitations",
          "Chapter5",
          "oral"
        ]
      },
      {
        "id": "4280-pet-lim-roadmap-roads",
        "q": "Fritsch & Abie (2008) research roadmap: which three 'roads' for managing privacy risks?",
        "a": "1) Risk model (how to model privacy risks systematically). 2) Cost & effect (measure investment vs privacy effect, e.g. ROPI thinking). 3) Empirics (evidence from real breaches, deployments, and outcomes).",
        "tags": [
          "PETs",
          "roadmap",
          "Fritsch",
          "Abie",
          "managed-privacy",
          "Chapter5"
        ]
      },
      {
        "id": "4280-pet-lim-breach-empirics",
        "q": "What has been the main solid empirics source for privacy-risk evidence so far?",
        "a": "Mandatory breach reporting / breach notification regimes - they create observable incident data. Broader cost/benefit and PET-effectiveness data remain sparse (many white spots).",
        "tags": [
          "PETs",
          "empirics",
          "breach",
          "Chapter5"
        ]
      },
      {
        "id": "4280-flipped",
        "q": "How is ACIT4280 taught (format) according to the Aug 13 2026 intro?",
        "a": "Flipped classroom: students read/watch Canvas material before class; bi-weekly online lectures with case studies & student presentations; group home assignment (groups of 3) with written report + presentation; final timed digital exam on Inspera.",
        "tags": [
          "course",
          "format"
        ]
      },
      {
        "id": "4280-art12",
        "q": "What does Art. 12 require for communicating with data subjects?",
        "a": "Information must be concise, transparent, intelligible, easily accessible, in clear and plain language (Art. 29 WP recommends multi-layered privacy policies). Prefer electronic means for electronic requests; may use standardised machine-readable icons.",
        "tags": [
          "Art.12",
          "transparency"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-art12.png",
          "alt": "Transparency Article 12 slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-art13-15",
        "q": "What key information must transparency/access cover (Art. 13 & 15)?",
        "a": "Controller identity & contact (incl. DPO); purposes & legal basis; recipients; international transfers; retention periods; data subject rights; existence of automated decision-making (logic, significance, consequences). Access: electronic copy of the data (Art. 15), without adversely affecting others' rights/freedoms (trade secrets, IP).",
        "tags": [
          "Art.13",
          "Art.15"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-overview.png",
          "alt": "Data subject rights overview",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-erasure",
        "q": "When does the right to erasure (Art. 17) apply?",
        "a": "Without undue delay when data are no longer necessary; consent withdrawn and no other legal basis; objection succeeds; unlawful processing; legal obligation to erase; and related grounds in Art. 17. If made public, take reasonable steps to inform other controllers.",
        "tags": [
          "Art.17",
          "rights"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-overview.png",
          "alt": "Data subject rights overview",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-portability",
        "q": "What is the right to data portability (Art. 20), and what does it exclude?",
        "a": "Where processing is based on consent or contract: receive personal data in a structured, commonly used, machine-readable format and transmit to another controller (or have it transmitted directly). Does not include derived data or data received from third parties (e.g. reputation scores).",
        "tags": [
          "Art.20",
          "rights"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-overview.png",
          "alt": "Data subject rights overview",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-object-auto",
        "q": "What do Art. 21 and Art. 22 protect?",
        "a": "Art. 21: right to object to processing based on legitimate interests/public interest (incl. profiling), to direct marketing (incl. profiling), and in some research/statistics cases. Art. 22: right not to be subject to a decision based solely on automated processing that produces legal effects or similarly significantly affects the person.",
        "tags": [
          "Art.21",
          "Art.22"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-dsr-overview.png",
          "alt": "Data subject rights overview",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-google-spain",
        "q": "Why is Google Spain / Costeja (C-131/12) linked to data subject rights in the materials?",
        "a": "CJEU judgment on the 'right to be forgotten' / delisting-connected in course materials to erasure/transparency rights (Art. 17 context).",
        "tags": [
          "case-law",
          "rights"
        ],
        "figure": {
          "type": "img",
          "src": "figures/google-spain.svg",
          "alt": "Search results and right to be forgotten",
          "caption": "Costeja balancing",
          "shows": "Costeja balancing"
        }
      },
      {
        "id": "4280-onestop",
        "q": "What 'clear rules for business' does the L8 GDPR obligations material highlight?",
        "a": "One single set of rules; one-stop-shop (deal with one lead supervisory authority); European rules on European soil (non-EU companies offering services in the EU must apply the same rules); risk-based approach.",
        "tags": [
          "L8",
          "governance"
        ],
        "figure": {
          "type": "img",
          "src": "figures/one-stop.svg",
          "alt": "Lead supervisory authority cooperation",
          "caption": "One-stop-shop idea",
          "shows": "One-stop-shop idea"
        }
      },
      {
        "id": "4280-breach72",
        "q": "What are the GDPR data-breach notification duties (Art. 33-34)?",
        "a": "Notify the supervisory authority without undue delay and, where feasible, within 72 hours (Art. 33). Notify the data subject if the breach is likely to result in a high risk to their rights and freedoms (Art. 34).",
        "tags": [
          "Art.33",
          "breach"
        ],
        "figure": {
          "type": "img",
          "src": "figures/breach-72h.svg",
          "alt": "72-hour breach notification timeline",
          "caption": "Art. 33 clock",
          "shows": "Art. 33 clock"
        }
      },
      {
        "id": "4280-art32",
        "q": "What does security of processing (Art. 32) emphasise?",
        "a": "Appropriate technical and organisational measures ensuring confidentiality, integrity and availability-examples include pseudonymisation and/or encryption.",
        "tags": [
          "Art.32",
          "security"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/encryption-padlock-clear.svg",
          "alt": "Encryption diagram",
          "caption": "Art. 32 includes encryption as a security measure",
          "shows": "Encryption turns plaintext into ciphertext."
        }
      },
      {
        "id": "4280-records-dpo",
        "q": "What are Art. 30 records and Art. 38 DPO obligations (high level)?",
        "a": "Controllers/processors must maintain records of processing activities (Art. 30). Designate a DPO (Art. 38) unless processing is not a core business activity (as framed in L8 slides).",
        "tags": [
          "Art.30",
          "Art.38"
        ]
      },
      {
        "id": "4280-transfers",
        "q": "How may personal data be transferred to third countries (Art. 45-49 overview)?",
        "a": "Primarily where the Commission has decided an adequate level of protection (Art. 45). Otherwise safeguards such as standard contractual clauses (Art. 46), binding corporate rules (Art. 47), or limited exceptions (Art. 49, e.g. explicit consent). Materials note Privacy Shield replaced Safe Harbor after Schrems, with ongoing adequacy concerns.",
        "tags": [
          "transfers",
          "Art.45"
        ],
        "figure": {
          "type": "img",
          "src": "figures/transfers.svg",
          "alt": "Adequacy SCCs BCRs transfer tools",
          "caption": "Art. 45-49 overview",
          "shows": "Art. 45-49 overview"
        }
      },
      {
        "id": "4280-fines",
        "q": "What is the two-tier administrative fine structure under Art. 83?",
        "a": "Lower tier: up to the greater of EUR10 million or 2% of global annual turnover. Higher tier (serious breaches): up to the greater of EUR20 million or 4% of global annual turnover. Fines must be effective, proportionate and dissuasive.",
        "tags": [
          "Art.83",
          "enforcement"
        ],
        "figure": {
          "type": "img",
          "src": "figures/fine-tiers.svg",
          "alt": "Two-tier GDPR administrative fines",
          "caption": "Art. 83 percentages",
          "shows": "Art. 83 percentages"
        }
      },
      {
        "id": "4280-edpb",
        "q": "What replaced the Article 29 Working Party under the GDPR institutional setup?",
        "a": "The European Data Protection Board (EDPB), Art. 68-73. Supervisory authorities (Art. 51-59) monitor, assess and enforce; data subjects can lodge complaints.",
        "tags": [
          "EDPB",
          "governance"
        ],
        "figure": {
          "type": "img",
          "src": "figures/edpb.svg",
          "alt": "Article 29 WP replaced by EDPB",
          "caption": "Institutional continuity",
          "shows": "Institutional continuity"
        }
      },
      {
        "id": "4280-eprivacy-lex",
        "q": "How does the draft ePrivacy Regulation relate to the GDPR?",
        "a": "It is lex specialis to the GDPR: specific privacy rules for electronic communications; intended as a directly applicable Regulation replacing the ePrivacy ('Cookie') Directive; extends to OTT services such as Skype, WhatsApp, Facebook Messenger, Gmail, etc.",
        "tags": [
          "ePrivacy",
          "L9"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/gdpr-scope-lex.png",
          "alt": "Scope and lex generalis slide",
          "caption": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-eprivacy-rules",
        "q": "Name proposed main rules of the draft ePrivacy Regulation (L9).",
        "a": "Privacy rules for communication content & metadata; simpler cookie rules (no consent for non-privacy-intrusive cookies; privacy-friendly browser defaults); anti-spam protection; limited processing by traditional telecoms for additional services/business development; enforcement by DPAs also in charge under GDPR.",
        "tags": [
          "ePrivacy",
          "L9"
        ],
        "figure": {
          "type": "img",
          "src": "figures/eprivacy-gdpr-venn.svg",
          "alt": "ePrivacy rules beside GDPR",
          "caption": "Communications focus",
          "shows": "Communications focus"
        }
      },
      {
        "id": "4280-eprivacy-concerns",
        "q": "What 'grave' concerns did Art. 29 WP raise about the draft ePrivacy Regulation?",
        "a": "Tracking of terminal equipment location; conditions for analysing content & metadata; tracking walls; default settings of terminal equipment/software.",
        "tags": [
          "ePrivacy",
          "WP29"
        ],
        "figure": {
          "type": "img",
          "src": "figures/eprivacy-gdpr-venn.svg",
          "alt": "ePrivacy draft concerns relative to GDPR",
          "caption": "WP29 critique context",
          "shows": "WP29 critique context"
        }
      },
      {
        "id": "4280-pets-minimise",
        "q": "Give PET examples mapped to data minimisation (L10).",
        "a": "Anonymity/pseudonymity tools: communication-level (Mixes, DC-nets, Tor, steganography); application-level (anonymous credentials, anonymous payment, PIR); data-level (k-anonymity, differential privacy, secret sharing).",
        "tags": [
          "PETs",
          "L10"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-l10-mapping.png",
          "alt": "Mapping GDPR principles to PETs",
          "caption": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-pets-purpose",
        "q": "Which PETs/tools are mapped to purpose limitation in L10?",
        "a": "Privacy policy languages, sticky policies, functional separation.",
        "tags": [
          "PETs",
          "purpose-limitation"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-l10-mapping.png",
          "alt": "Mapping GDPR principles to PETs",
          "caption": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-pets-transparency",
        "q": "Which approaches map to lawfulness/fairness/transparency in L10?",
        "a": "Algorithmic transparency & ethical data management, Fairness by Design, ex ante and ex post Transparency Enhancing Tools (TETs).",
        "tags": [
          "PETs",
          "transparency"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-l10-mapping.png",
          "alt": "Mapping GDPR principles to PETs",
          "caption": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-pets-security",
        "q": "Which controls map to integrity & confidentiality (Art. 5) in L10?",
        "a": "Security controls including access control, authentication, encryption (e.g. TLS), logging.",
        "tags": [
          "PETs",
          "security"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/padlock.svg",
          "alt": "Padlock icon",
          "caption": "Security PETs include encryption and access control",
          "shows": "Padlock = confidentiality control.",
          "attribution": "Source: Wikimedia Commons (CC0) - AJ Ashton"
        }
      },
      {
        "id": "4280-pets-accountability",
        "q": "What maps to accountability in the L10 GDPR->PETs mapping?",
        "a": "Privacy-preserving transparency logging, provenance, consent management.",
        "tags": [
          "PETs",
          "accountability"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-l10-mapping.png",
          "alt": "Mapping GDPR principles to PETs",
          "caption": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 1 / L10). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-exam-format",
        "q": "What is the ACIT4280 exam format (saved course plan FALL 2026)?",
        "a": "Individual digital written exam, 3 hours, no aids (A-F). Coursework: one group assignment (report + presentation).",
        "tags": [
          "course",
          "exam"
        ]
      },
      {
        "id": "4280-l2-pet-focus",
        "q": "What has PET research historically focused on (Lecture 2)?",
        "a": "Information hiding and control, inspired by legal/human-rights perspectives-yet there is a noted lack of widely deployed PETs in the 'real world'.",
        "tags": [
          "Lecture2",
          "PETs"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/what-are-pets.png",
          "alt": "What are PETs slide",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-concepts",
        "q": "Name key PET concepts to remember from Pfitzmann-Hansen (Lecture 2).",
        "a": "Unobservability; anonymity & pseudonymity; partial identities; unlinkability.",
        "tags": [
          "Lecture2",
          "terminology"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-pfitzmann-lattice.png",
          "alt": "Pfitzmann Hansen terminology lattice",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-authz",
        "q": "In basic identity-based transactions, what is the difference between identification, authentication, and authorization?",
        "a": "Identification: who is the user. Authentication: prove it is really that user. Authorization/non-repudiation: permit actions/documents (often with digital signatures) and create receipts. Pseudonyms can support privacy-enhancing identity management.",
        "tags": [
          "Lecture2",
          "identity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/authn-authz.svg",
          "alt": "Identification authentication authorization",
          "caption": "Identity transaction basics",
          "shows": "Identity transaction basics"
        }
      },
      {
        "id": "4280-l2-synthetic",
        "q": "What are 'synthetic identities' in Lecture 2?",
        "a": "Identifiers created from observed data (IP, combined accounts/location, behavioural mining, biometrics) beyond the data subject's control-can become person-related (e.g. via home/work patterns in location tracks).",
        "tags": [
          "Lecture2",
          "identity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/k-anonymity-slide.png",
          "alt": "K-anonymity slide",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-trilemma",
        "q": "What is the Anonymity Trilemma (Lecture 2)?",
        "a": "Strong anonymity, low bandwidth, and low latency-choose two (Das et al.). Tor is framed as a low-latency anonymity network (relays/bridges) for anonymous browsing.",
        "tags": [
          "Lecture2",
          "Tor"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/onion-routing.svg",
          "alt": "Onion routing",
          "caption": "Anonymity trilemma and Tor trade-offs",
          "shows": "Onion layers hide who talks to whom.",
          "attribution": "Source: Wikimedia Commons (CC BY-SA 3.0) - HANtwister"
        }
      },
      {
        "id": "4280-l3-privacy-vs-dp",
        "q": "How does Lecture 3 distinguish privacy from data protection?",
        "a": "Privacy is fuzzy, contextual, a social construct. Data protection must be more discrete; proportionality of processing is key. Data protection is necessary but not sufficient for privacy.",
        "tags": [
          "Lecture3",
          "PbD"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/privacy-vs-dp.png",
          "alt": "Privacy and data protection slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-cavoukian",
        "q": "List Ann Cavoukian's seven Privacy by Design principles (Lecture 3).",
        "a": "1) Proactive not reactive / preventative not remedial; 2) Privacy as the default; 3) Privacy embedded into design; 4) Full functionality-positive-sum, not zero-sum; 5) End-to-end security-full lifecycle protection; 6) Visibility and transparency-keep it open; 7) Respect for user privacy-keep it user-centric.",
        "tags": [
          "Lecture3",
          "Cavoukian"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/cavoukian-pbd.png",
          "alt": "Ann Cavoukian Privacy by Design",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-goals",
        "q": "Which privacy protection goals complement CIA in the Standard Data Protection Model / Hansen et al. (Lecture 3)?",
        "a": "Alongside confidentiality (and CIA): transparency, intervenability, and unlinkability (privacy goals from the German DP community / SDM). Summary slide also frames CIA + unlinkability + transparency + intervenability.",
        "tags": [
          "Lecture3",
          "goals"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/privacy-protection-goals.png",
          "alt": "Privacy protection goals slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-paradigms",
        "q": "Name the three privacy research paradigms in Lecture 3.",
        "a": "Privacy as Confidentiality; Privacy as Control; Privacy as Practice.",
        "tags": [
          "Lecture3",
          "paradigms"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/privacy-paradigms.png",
          "alt": "Privacy paradigms slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-pbd-limit",
        "q": "What practical limit of Cavoukian's PbD principles does Lecture 3 stress for developers?",
        "a": "The seven principles do not provide hands-on instructions for engineers-you must still ask how to implement each principle in software.",
        "tags": [
          "Lecture3",
          "PbD"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/dpbd-default.png",
          "alt": "Data protection by design and by default",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-pia-def",
        "q": "What is a Privacy Impact Assessment (PIA) according to Lecture 4?",
        "a": "A systematic process for identifying and evaluating privacy risks/impacts of a project. Anticipatory-done in advance or in parallel with the initiative-not only a one-off report.",
        "tags": [
          "Lecture4",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-assessment.png",
          "alt": "Privacy impact assessment slide",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-risk-formula",
        "q": "How does qualitative risk assessment combine impact and likelihood (Lecture 4)?",
        "a": "Risk(A) ~ impact(T(A)) x likelihood(T(A)) for threat T on asset A; classify resulting levels (typically low/moderate/high). Consider significance, likelihood, and magnitude of impact.",
        "tags": [
          "Lecture4",
          "risk"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/risk-chart.png",
          "alt": "Risk chart from Canvas course files",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-pia-outcome",
        "q": "What outcomes are expected from a PIA (Lecture 4 summary)?",
        "a": "Identify privacy impacts; assess them from all stakeholders' perspectives; show how negative impacts can be avoided or lessened; clarify residual/accepted impacts where unavoidable.",
        "tags": [
          "Lecture4",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-table1.png",
          "alt": "PIA table from Canvas course files",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-risk-bias",
        "q": "What bias in privacy risk assessment does Lecture 4 warn about?",
        "a": "Risk management often focuses on risks to service providers/system owners rather than end users-yet all stakeholders are threatened; long-term privacy risk models (incl. duality of risks) are lacking.",
        "tags": [
          "Lecture4",
          "risk"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/privacy-risk-analysis.png",
          "alt": "Privacy risk analysis slide",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-isms",
        "q": "Why is IT security management described as a 'horizontal' activity (Lecture 5)?",
        "a": "It cuts across quality, operations, HR, and facility management-most departments contact security management. Organizing an ISMS needs management support, a cross-role panel, and regular incident/priority meetings.",
        "tags": [
          "Lecture5",
          "ISMS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pdca-iso.png",
          "alt": "PDCA ISO 27000 diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-treatment",
        "q": "What is risk treatment via controls (Lecture 5)?",
        "a": "Select and implement technical and/or administrative controls (from catalogues such as ISO 27001 annex / NIST SP 800-53 privacy & security controls) to reduce or remove risks in infrastructure, procedures and resources.",
        "tags": [
          "Lecture5",
          "controls"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/risk-treatment.png",
          "alt": "Risk treatment with privacy controls",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-incident",
        "q": "Outline the incident-management stages from ISO/IEC 27035 as taught in Lecture 5.",
        "a": "1) Plan and prepare (policy, IR/CSIRT team); 2) Detect and report; 3) Assess/decide it is an incident; 4) Respond (contain, eradicate, recover, forensics); 5) Lessons learned / improvements.",
        "tags": [
          "Lecture5",
          "incident"
        ],
        "figure": {
          "type": "img",
          "src": "figures/incident-stages.svg",
          "alt": "Incident management stage sequence",
          "caption": "ISO/IEC 27035 sketch",
          "shows": "ISO/IEC 27035 sketch"
        }
      },
      {
        "id": "4280-l5-privacy-controls",
        "q": "What does Lecture 5 emphasise about many privacy controls?",
        "a": "Many privacy controls are administrative (not only technical). Privacy/security management is a complex multi-role process; prepare relationships with emergency response before incidents happen.",
        "tags": [
          "Lecture5",
          "controls"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/control-selection.png",
          "alt": "Control selection diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-eid",
        "q": "What is an e-ID in Lecture 2 terms?",
        "a": "A portion of digital data plus algorithms (hard/software) whose purpose is to convince a computer that a particular, possibly privileged, person is using it - may be official (passport-based) or soft (email/pseudonym).",
        "tags": [
          "Lecture2",
          "identity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/authn-authz.svg",
          "alt": "e-ID identity claim",
          "caption": "Digital identity evidence",
          "shows": "Digital identity evidence"
        }
      },
      {
        "id": "4280-l2-identity-cats",
        "q": "Name Pfitzmann-style categories of identity control from Lecture 2.",
        "a": "Me-Identity (what I define), Our-Identity (what others and I define), Their-Identity (what others define as my identity).",
        "tags": [
          "Lecture2",
          "identity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pet-concepts.svg",
          "alt": "Identity category control",
          "caption": "Who defines identity",
          "shows": "Who defines identity"
        }
      },
      {
        "id": "4280-l2-identifiability",
        "q": "What is identifiability (Pfitzmann-Hansen) as taught in Lecture 2?",
        "a": "From an attacker's view: the attacker can sufficiently identify the subject within an identifiability set - subjects may be indistinguishable or distinguishable by attributes/usage patterns.",
        "tags": [
          "Lecture2",
          "terminology"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pet-concepts.svg",
          "alt": "Identifiability set idea",
          "caption": "Pfitzmann-Hansen",
          "shows": "Pfitzmann-Hansen"
        }
      },
      {
        "id": "4280-l2-aaa",
        "q": "Beyond CIA, which AAA security objectives does Lecture 2 list?",
        "a": "Authentication, Authorization, and Accounting (logging/tracking of users and data/sessions).",
        "tags": [
          "Lecture2",
          "security"
        ],
        "figure": {
          "type": "img",
          "src": "figures/authn-authz.svg",
          "alt": "Authentication authorization accounting",
          "caption": "AAA beside CIA",
          "shows": "AAA beside CIA"
        }
      },
      {
        "id": "4280-l2-mixnets",
        "q": "What classic paper/idea starts mix networks in Lecture 2?",
        "a": "David Chaum (1981) \"Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms\" - mix format and mixing strategy for strong anonymity (often at latency/bandwidth cost).",
        "tags": [
          "Lecture2",
          "PETs",
          "mixnets"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/mixnets-slide.png",
          "alt": "Mixnets slide",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-tor-path",
        "q": "What is a typical Tor circuit path for anonymous browsing (Lecture 2)?",
        "a": "Client traffic goes via guard (entry), middle, and exit relays - low-latency anonymity network for browsing; bridges help when Tor is blocked.",
        "tags": [
          "Lecture2",
          "Tor"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/tor-onion-service.svg",
          "alt": "Tor diagram",
          "caption": "Tor path through relays",
          "shows": "Entry, middle and exit hops peel layers.",
          "attribution": "Source: Wikimedia Commons (CC BY-SA 4.0) - Tga.D"
        }
      },
      {
        "id": "4280-l2-onion",
        "q": "What anonymity property do onion services emphasise (Lecture 2)?",
        "a": "Recipient anonymity (who is receiving requests) plus self-authenticated, end-to-end encrypted services; single onion services are a related deployment variant.",
        "tags": [
          "Lecture2",
          "Tor"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/onion-routing.svg",
          "alt": "Onion routing",
          "caption": "Onion routing principle",
          "shows": "Layers of encryption like an onion.",
          "attribution": "Source: Wikimedia Commons (CC BY-SA 3.0) - HANtwister"
        }
      },
      {
        "id": "4280-l2-tets",
        "q": "Ex-ante vs ex-post Transparency Enhancing Tools (TETs) - give examples from Lecture 2.",
        "a": "Ex-ante: privacy policy languages (e.g. P3P/PPL), multi-layered policies and icons. Ex-post: dashboards / Data Track-style tools that show what was disclosed and support access/intervenability.",
        "tags": [
          "Lecture2",
          "TETs",
          "transparency"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-tetcat.png",
          "alt": "TET categories diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l2-privacy-protect",
        "q": "Lecture 2 summary: privacy protection consists of which elements?",
        "a": "Protect communication content and relationship; protect identities; conceal activity (unobservability); unlinkability of actions; transparency of collection/processing/storage; intervenability and rectification opportunities.",
        "tags": [
          "Lecture2",
          "PETs"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pet-concepts.svg",
          "alt": "Privacy protection elements",
          "caption": "Lecture 2 wrap-up",
          "shows": "Lecture 2 wrap-up"
        }
      },
      {
        "id": "4280-l2-pets-objectives",
        "q": "What objectives do PETs target beyond raw data security (Lecture 2)?",
        "a": "Control over personal data / transparency; data minimisation/avoidance; identity management; lawful processing; plus data security and integrity.",
        "tags": [
          "Lecture2",
          "PETs"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pets-timeline-fritsch.png",
          "alt": "PET timeline from Canvas files",
          "caption": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 2). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-trilogy",
        "q": "What \"trilogy\" of applications does Cavoukian's PbD extend to (Lecture 3)?",
        "a": "1) IT systems; 2) accountable business practices; 3) physical design and networked infrastructure.",
        "tags": [
          "Lecture3",
          "Cavoukian",
          "PbD"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pbd-7.svg",
          "alt": "PbD trilogy of applications",
          "caption": "Systems practices infrastructure",
          "shows": "Systems practices infrastructure"
        }
      },
      {
        "id": "4280-l3-default",
        "q": "What does \"Privacy as the Default\" mean (Cavoukian principle 2)?",
        "a": "Maximum privacy without user action - personal data are automatically protected; if the individual does nothing, privacy remains intact.",
        "tags": [
          "Lecture3",
          "Cavoukian"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/dpbd-default.png",
          "alt": "Data protection by design and by default",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-positive-sum",
        "q": "What does Cavoukian's \"positive-sum, not zero-sum\" principle argue?",
        "a": "Accommodate legitimate interests in a win-win way - avoid false dichotomies such as privacy vs security; both can be designed together.",
        "tags": [
          "Lecture3",
          "Cavoukian"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pbd-7.svg",
          "alt": "Positive-sum PbD principle",
          "caption": "Not privacy versus security",
          "shows": "Not privacy versus security"
        }
      },
      {
        "id": "4280-l3-unlinkability",
        "q": "Give example measures for unlinkability (Standard Data Protection Model / Lecture 3).",
        "a": "Restrict processing/transfer rights; close unnecessary interfaces; organisational separation; purpose-specific pseudonyms/anonymisation/anonymous credentials; regulated purpose-change procedures.",
        "tags": [
          "Lecture3",
          "goals"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pet-concepts.svg",
          "alt": "Unlinkability measures",
          "caption": "Separate and pseudonymise",
          "shows": "Separate and pseudonymise"
        }
      },
      {
        "id": "4280-l3-intervenability",
        "q": "What does intervenability require in practice (Lecture 3)?",
        "a": "Means for consent/withdrawal/objection; support for rights (correct/block/erase); SPoC for data subjects; traceability of controller actions granting rights - ability to intervene in processing.",
        "tags": [
          "Lecture3",
          "goals"
        ],
        "figure": {
          "type": "img",
          "src": "figures/dsr-rights-grid.svg",
          "alt": "Intervenability and data subject rights",
          "caption": "Act on processing",
          "shows": "Act on processing"
        }
      },
      {
        "id": "4280-l3-paradigm-conf",
        "q": "What characterises the \"Privacy as Confidentiality\" research paradigm?",
        "a": "Once data is disclosed, privacy is lost; emphasis on data minimisation and crypto; centralised collection seen as bad; strong open-source/reproducibility culture.",
        "tags": [
          "Lecture3",
          "paradigms"
        ],
        "figure": {
          "type": "img",
          "src": "figures/privacy-vs-dp.svg",
          "alt": "Privacy as confidentiality paradigm",
          "caption": "Hide and minimise",
          "shows": "Hide and minimise"
        }
      },
      {
        "id": "4280-l3-paradigm-control",
        "q": "What characterises \"Privacy as Control\"?",
        "a": "Privacy as ability to control personal data - purpose, intervenability, transparency, accountability (classic data-protection framing); disclosure may still be in your interest (e.g. healthcare).",
        "tags": [
          "Lecture3",
          "paradigms"
        ],
        "figure": {
          "type": "img",
          "src": "figures/privacy-vs-dp.svg",
          "alt": "Privacy as control paradigm",
          "caption": "Data protection framing",
          "shows": "Data protection framing"
        }
      },
      {
        "id": "4280-l3-mistake-storage",
        "q": "Hansen mistake 1: what is \"Storage as Default\"?",
        "a": "Storing personal data without justifying need, retention period, and access control - violates minimisation, purpose binding, and right to be forgotten.",
        "tags": [
          "Lecture3",
          "design-mistakes"
        ],
        "figure": {
          "type": "img",
          "src": "figures/function-creep.svg",
          "alt": "Storage as default mistake",
          "caption": "Justify retention",
          "shows": "Justify retention"
        }
      },
      {
        "id": "4280-l3-mistake-link",
        "q": "Hansen mistake 2: what is \"Linkability as Default\"?",
        "a": "No unidentified use possible; transactions are linkable across contexts - enables profiling and may violate minimisation/purpose binding.",
        "tags": [
          "Lecture3",
          "design-mistakes"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pet-concepts.svg",
          "alt": "Linkability as default",
          "caption": "Prefer unlinkable use",
          "shows": "Prefer unlinkable use"
        }
      },
      {
        "id": "4280-l3-pia-vs-dpia",
        "q": "PIA vs DPIA mandatory status as stressed in Lecture 3?",
        "a": "PIAs are not generally mandatory; DPIAs are required only in particular high-risk cases (GDPR Art. 35). Treating every PIA as mandatory can cause \"PIA fatigue\".",
        "tags": [
          "Lecture3",
          "DPIA",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-assessment.png",
          "alt": "Privacy impact assessment slide",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-pia-process",
        "q": "Why is treating PIA as a one-time early task a mistake (Lecture 3)?",
        "a": "PIA should be a continuing process across the lifecycle, not a single checklist completed once and forgotten for years.",
        "tags": [
          "Lecture3",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-process.png",
          "alt": "PIA is a process",
          "caption": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 3). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l3-cause-effect",
        "q": "How does Lecture 3 separate cause and effect in privacy risk layers?",
        "a": "Cause: user privacy risks / infringement of personal life. Effects for the organisation: reputation damage, fines, lawsuits, loss of trust. Do not only manage organisational effects.",
        "tags": [
          "Lecture3",
          "risk"
        ],
        "figure": {
          "type": "img",
          "src": "figures/risk-matrix.svg",
          "alt": "User privacy risk versus org effects",
          "caption": "Cause versus effect",
          "shows": "Cause versus effect"
        }
      },
      {
        "id": "4280-l4-privacy-types",
        "q": "Which four privacy targets should a PIA consider (Lecture 4 summary)?",
        "a": "Privacy of personal information; privacy of the person; privacy of personal behaviour; privacy of personal communications.",
        "tags": [
          "Lecture4",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pia-flow.svg",
          "alt": "Four privacy targets in PIA",
          "caption": "Broader than data fields",
          "shows": "Broader than data fields"
        }
      },
      {
        "id": "4280-l4-pia-core",
        "q": "Name several core PIA elements from PIAF (Lecture 4).",
        "a": "Ongoing process; scalability; all privacy types; accountability; transparency; stakeholder involvement; publication/registry (with sensitive-info limits); risk management and legal compliance; audit and review.",
        "tags": [
          "Lecture4",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-table2.png",
          "alt": "PIA table from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-controls-types",
        "q": "Preventive vs detective, technical vs non-technical controls (Lecture 4)?",
        "a": "Preventive: stop violations; detective: detect them. Technical: PETs/security in the system. Non-technical: processes, procedures, policies, operations.",
        "tags": [
          "Lecture4",
          "controls"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/controls-diagram.png",
          "alt": "Privacy controls diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-solove-impact",
        "q": "How does Solove's taxonomy help PIA impact thinking (readings/Lecture 4)?",
        "a": "Privacy-violating actions: information collection, processing, dissemination, and invasions - risk starts already at collection, before invasion.",
        "tags": [
          "Lecture4",
          "Solove"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/solove-taxonomy.png",
          "alt": "Solove taxonomy from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-enisa-impact",
        "q": "What ENISA SME impact levels are taught for individuals' privacy harm?",
        "a": "Low (minor inconvenience), Medium (significant but manageable inconvenience), High (serious difficulties), Very high (significant/irreversible consequences).",
        "tags": [
          "Lecture4",
          "risk",
          "ENISA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/solove-redrawn.png",
          "alt": "Solove redrawn impact diagram",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l4-pia-report",
        "q": "What should a PIA report typically contain (Lecture 4)?",
        "a": "Project description; privacy issues analysis; business case for any intrusion; alternatives considered; privacy design features; residual risks; recommendations and implementation/audit path.",
        "tags": [
          "Lecture4",
          "PIA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pia-table1.png",
          "alt": "PIA table from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 4). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-pdca",
        "q": "What continuous cycle frames ISO/security management in Lecture 5?",
        "a": "Plan-Do-Check-Act (PDCA): continuous improvement over repeated rounds of planning, implementing controls, monitoring, and corrective action.",
        "tags": [
          "Lecture5",
          "ISMS",
          "PDCA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/pdca-cycle-slide.png",
          "alt": "Plan-Do-Check-Act cycle slide",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-iso-domains",
        "q": "Give examples of ISO/IEC 27001:2013 Annex A domains from Lecture 5.",
        "a": "Among 14 domains: policies; organisation; HR security; asset management; access control; cryptography; physical security; operations; communications; system acquisition/dev; suppliers; incident management; business continuity; compliance.",
        "tags": [
          "Lecture5",
          "ISO27001"
        ],
        "figure": {
          "type": "img",
          "src": "figures/art32-security.svg",
          "alt": "ISO 27001 control domains",
          "caption": "Annex A overview",
          "shows": "Annex A overview"
        }
      },
      {
        "id": "4280-l5-triggers",
        "q": "List triggers that should start a new PDCA / re-assessment (Lecture 5).",
        "a": "Regular schedule; infrastructure/software/supplier/outsourcing changes; major updates; staff/location/product changes; \"world change\" (new attacks, tools, crypto breaks).",
        "tags": [
          "Lecture5",
          "ISMS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pdca.svg",
          "alt": "PDCA re-assessment triggers",
          "caption": "When to re-run PDCA",
          "shows": "When to re-run PDCA"
        }
      },
      {
        "id": "4280-l5-linddun",
        "q": "What do the LINDDUN letters stand for (Lecture 5/6)?",
        "a": "Linkability, Identifiability, Non-repudiation, Detectability, Disclosure of information, Unawareness, Non-compliance - privacy threat categories used with DFDs/threat trees.",
        "tags": [
          "Lecture5",
          "Lecture6",
          "LINDDUN"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/linddun-steps.png",
          "alt": "LINDDUN steps diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l5-stakeholders",
        "q": "Who are typical ISMS \"players\" vs subjects in Lecture 5?",
        "a": "Players: Board, CEO, ISMS Forum (CTO/CSO/DPO/management/product owners). Subjects: humans and assets (equipment, networks, apps, information stores).",
        "tags": [
          "Lecture5",
          "ISMS"
        ],
        "figure": {
          "type": "img",
          "src": "figures/gdpr-roles.svg",
          "alt": "ISMS stakeholders sketch",
          "caption": "Governance roles",
          "shows": "Governance roles"
        }
      },
      {
        "id": "4280-l5-smartcar-task",
        "q": "What risk-analysis task does the smart-car factory case ask groups to do?",
        "a": "Identify critical information assets; find security/privacy threats per asset; assess likelihood/damage (ENISA-style); rank risks highest to lowest - applying management method to a connected production scenario.",
        "tags": [
          "Lecture5",
          "case-study"
        ],
        "figure": {
          "type": "img",
          "src": "figures/risk-matrix.svg",
          "alt": "Smart car case risk ranking",
          "caption": "Assets threats ranking",
          "shows": "Assets threats ranking"
        }
      },
      {
        "id": "4280-l5-oasis",
        "q": "How is OASIS Privacy by Design for Software Engineers framed in Lecture 5?",
        "a": "As a PDCA-style method that includes risk analysis - privacy management documentation approach for engineers (PbD-SE).",
        "tags": [
          "Lecture5",
          "PbD"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/oasis-cycle.png",
          "alt": "OASIS privacy management cycle from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 5). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-hoepman8",
        "q": "List Hoepman-style privacy design strategies from Lecture 6.",
        "a": "Minimise; Hide; Separate; Aggregate (abstract); Inform; Control; Enforce; Demonstrate.",
        "tags": [
          "Lecture6",
          "strategies"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/hoepman-strategies.png",
          "alt": "Hoepman privacy strategies from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-minimise",
        "q": "What does the Minimise strategy ask (Lecture 6)?",
        "a": "Restrict personal data processed to the minimal amount needed for the purpose; ask if another design fulfils the purpose with less data (e.g. pseudonyms instead of real names).",
        "tags": [
          "Lecture6",
          "strategies"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/hoepman-strategies.png",
          "alt": "Hoepman privacy strategies from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-separate",
        "q": "What does the Separate strategy recommend?",
        "a": "Process personal data in distributed compartments when possible - prefer distributed/local over centralised remote processing (e.g. contact data and purchase data in separate stores).",
        "tags": [
          "Lecture6",
          "strategies"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/hoepman-strategies.png",
          "alt": "Hoepman privacy strategies from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-demonstrate",
        "q": "Why is Demonstrate especially GDPR-relevant (Lecture 6)?",
        "a": "Controllers must be able to show how the privacy policy and legal requirements are implemented (accountability) - e.g. recent audit evidence.",
        "tags": [
          "Lecture6",
          "strategies",
          "accountability"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/hoepman-strategies.png",
          "alt": "Hoepman privacy strategies from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-dark-list",
        "q": "Name privacy dark patterns from the Lecture 6 survey excerpt.",
        "a": "Privacy Zuckering; Bad Defaults; Forced Registration; Hidden Legalese; Immortal Accounts; Address Book Leeching; Shadow User Profiles (several tied to identity management).",
        "tags": [
          "Lecture6",
          "dark-patterns"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pensum/ACIT4280/curated/hoepman-threats.png",
          "alt": "Hoepman threats diagram from Canvas",
          "caption": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas.",
          "shows": "From course materials (ACIT4280 Lecture 6). Source: lecture slides / Canvas."
        }
      },
      {
        "id": "4280-l6-fogging",
        "q": "What is the dark pattern \"Fogging identification with security\"?",
        "a": "While collecting identity attributes, the service claims the extra data is for the user's security - obscuring the real acquisition purpose (MAXIMIZE/CENTRALIZE/OBSCURE strategies).",
        "tags": [
          "Lecture6",
          "dark-patterns"
        ],
        "figure": {
          "type": "img",
          "src": "figures/function-creep.svg",
          "alt": "Fogging ID collection with security",
          "caption": "Purpose obscured",
          "shows": "Purpose obscured"
        }
      },
      {
        "id": "4280-l6-architecture",
        "q": "How does Lecture 6 summarise software architecture (IEEE 1471-style)?",
        "a": "Fundamental organisation of a system: components, relationships to each other and the environment, and principles guiding design and evolution.",
        "tags": [
          "Lecture6",
          "architecture"
        ]
      },
      {
        "id": "4280-l6-iso25010",
        "q": "Name top-level ISO 25010 quality attributes listed in Lecture 6 (incl. security).",
        "a": "Functional suitability; performance efficiency; compatibility; usability; reliability; security; maintainability; portability.",
        "tags": [
          "Lecture6",
          "quality"
        ],
        "figure": {
          "type": "img",
          "src": "figures/cia-triad.svg",
          "alt": "Security among quality attributes",
          "caption": "ISO 25010 includes security",
          "shows": "ISO 25010 includes security"
        }
      },
      {
        "id": "4280-title-scope",
        "q": "What lecture themes does ACIT4280 cover after the GDPR foundations?",
        "a": "PETs (L2); Privacy by Design / protection goals / paradigms (L3); PIA and privacy risk (L4); privacy/security management and cases (L5); privacy engineering, strategies, patterns and dark patterns (L6).",
        "tags": [
          "course"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pets-taxonomy.svg",
          "alt": "Course lecture arc PETs to engineering",
          "caption": "L2 to L6 arc",
          "shows": "L2 to L6 arc"
        }
      }
    ]
  },
  "acit4100": {
    "course": "ACIT4100",
    "title": "Understanding & Communicating Research",
    "cards": [
      {
        "id": "4100-zotero",
        "q": "What do you use Zotero (or similar) for in research work?",
        "a": "Reference management: store sources, organise a literature survey, and generate citations/reference lists (APA7 / course requirements).",
        "tags": [
          "tools",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/zotero.svg",
          "alt": "Reference management illustration",
          "caption": "Zotero stores sources and builds citations",
          "shows": "Reference managers keep PDFs/metadata and generate APA reference lists."
        }
      },
      {
        "id": "4100-litsearch",
        "q": "Name three sensible steps in a literature search (as the course trains).",
        "a": "1) Clarify topic/question and search terms. 2) Search relevant databases and sort/categorise hits. 3) Critically assess sources and build a taxonomy/spreadsheet for the essay.",
        "tags": [
          "literature"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/research-process-clear.svg",
          "alt": "Research process",
          "caption": "Literature search is a clear process",
          "shows": "Question -> search -> assess -> write and cite."
        }
      },
      {
        "id": "4100-imrad",
        "q": "What is IMRaD, and when is it used?",
        "a": "Introduction-Methods-Results-and-Discussion: common structure in empirical research articles. The ACIT4100 essay is not a typical IMRaD literature review-it should understand and communicate research in a classic/narrative style.",
        "tags": [
          "genre"
        ],
        "figure": {
          "type": "img",
          "src": "figures/imrad.svg",
          "alt": "IMRaD",
          "caption": "IMRaD structures research articles",
          "shows": "Introduction/Discussion broad; Methods/Results focused."
        }
      },
      {
        "id": "4100-claim",
        "q": "What distinguishes a claim from evidence in academic text / Toulmin?",
        "a": "A claim is what you assert; evidence/data supports the claim. The Toulmin model (used in the course's rhetoric/ethics assessment) separates claim, data/grounds, warrant, and more.",
        "tags": [
          "rhetoric",
          "Toulmin"
        ],
        "figure": {
          "type": "img",
          "src": "figures/toulmin.svg",
          "alt": "Claim versus evidence boxes",
          "caption": "Toulmin-style distinction",
          "shows": "Toulmin-style distinction"
        }
      },
      {
        "id": "4100-peer",
        "q": "Why is peer review important?",
        "a": "Quality control before publication: other researchers assess method, argumentation and contribution-a central part of the publication tradition you should describe in the essay.",
        "tags": [
          "publishing"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/peer-review-clear.svg",
          "alt": "Peer review",
          "caption": "Peer review checks quality before publication",
          "shows": "Author -> journal -> expert reviewers."
        }
      },
      {
        "id": "4100-rq",
        "q": "What characterises a good research question for this course?",
        "a": "Scoped, relevant to ACIT/your specialisation, researchable via literature (not anthropological fieldwork), and suited to make methods, ethics and the research field visible-not just a 'technology product'.",
        "tags": [
          "essay"
        ],
        "figure": {
          "type": "img",
          "src": "figures/rq-focus.svg",
          "alt": "Research question focus",
          "caption": "A clear research question keeps the essay focused",
          "shows": "One evaluable question beats a vague theme dump."
        }
      },
      {
        "id": "4100-cite",
        "q": "When must you cite in academic text?",
        "a": "When you use others' ideas, data, wording or unique content-including when paraphrasing. Missing citation = plagiarism of ideas/words. The course requires an APA7-based standard.",
        "tags": [
          "plagiarism",
          "APA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/apa-cite-clear.svg",
          "alt": "APA citation",
          "caption": "Always credit sources (APA)",
          "shows": "Paraphrase still needs a citation."
        }
      },
      {
        "id": "4100-essay-focus",
        "q": "What is the 2026 essay focus shift in ACIT4100?",
        "a": "Away from mainly describing a technology, toward understanding and communicating research: methods, history/tradition, notable researchers/venues, regulation/ethics, industry/society relations-summarise and synthesise others' work, not invent new empirical findings.",
        "tags": [
          "essay",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/research-process-clear.svg",
          "alt": "Research process",
          "caption": "Essay = communicate research clearly",
          "shows": "Focus the question, use quality sources, synthesise and cite."
        }
      },
      {
        "id": "4100-styles",
        "q": "Which writing styles must the ACIT4100 essay mainly use?",
        "a": "Classic style (Steven Pinker, covered in the course) and/or narrative style (short-story techniques). Hybrids (classic with narrative 'cut-scenes') are allowed. Style cannot compensate for thin research content.",
        "tags": [
          "classic-style",
          "narrative"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Essay structure supporting required styles",
          "caption": "Classic and narrative craft",
          "shows": "Classic and narrative craft"
        }
      },
      {
        "id": "4100-apa7-strict",
        "q": "How does ACIT4100's referencing standard differ from plain APA7 for scientific papers?",
        "a": "Based on APA7 but stricter for scientific papers: include page number and paragraph number. Books/websites follow conventional APA7. See Kildekompasset APA 7th.",
        "tags": [
          "APA",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/apa-cite-clear.svg",
          "alt": "APA citation",
          "caption": "APA anatomy: Author. (Year). Title. Source.",
          "shows": "Colour-coded reference parts. In-text: (Author, Year)."
        }
      },
      {
        "id": "4100-assess-stars",
        "q": "Which assessment categories are weighted most heavily (***) in the essay rubric?",
        "a": "Literature survey (***) and Research methods (***). Rhetoric and Flow/structure are **; Ethics **; Visual presentation and Language/other are *.",
        "tags": [
          "assessment"
        ],
        "figure": {
          "type": "img",
          "src": "figures/assess-stars.svg",
          "alt": "Star-weighted assessment categories",
          "caption": "Triple-star criteria matter most",
          "shows": "Triple-star criteria matter most"
        }
      },
      {
        "id": "4100-lit-threshold",
        "q": "What literature volume is discussed in assessment / failure criteria?",
        "a": "Rubric: ~10 research articles is low, ~20 is high (how they are used matters more). Failure risk if fewer than 10 research papers. The course plan notes a mandatory spreadsheet survey (threshold can differ by document year-follow current Canvas/2026 requirements).",
        "tags": [
          "literature",
          "requirements"
        ],
        "figure": {
          "type": "img",
          "src": "figures/litsearch.svg",
          "alt": "Literature volume expectation",
          "caption": "Enough quality sources",
          "shows": "Enough quality sources"
        }
      },
      {
        "id": "4100-ai-declaration",
        "q": "What AI declaration is required, and what happens if it is missing?",
        "a": "At the end of the essay (after the reference list): list tool(s) and activities, OR state that no AI was used. Not in the word count. Using AI is not mandatory for a good grade. Missing the Declaration of AI use means fail, whether or not AI was used. OsloMet: https://student.oslomet.no/en/veiledning-kunstig-intelligens-studentoppgaver",
        "tags": [
          "AI",
          "integrity",
          "assessment",
          "requirements"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ai-declare.svg",
          "alt": "Mandatory AI use declaration",
          "caption": "Declare tools or non-use",
          "shows": "After references; not in word count."
        }
      },
      {
        "id": "4100-ai-write-cheat",
        "q": "When is using AI treated as cheating in the ACIT4100 essay?",
        "a": "Using AI to literally write parts of the essay is cheating. The exam requires you to write the essay; generated text is not writing and tries to circumvent the exam.",
        "tags": [
          "AI",
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ai-declare.svg",
          "alt": "AI writing essay is cheating",
          "caption": "You must write the essay",
          "shows": "Generated essay text = cheating."
        }
      },
      {
        "id": "4100-ai-cheat-examples",
        "q": "Give four examples of AI use that count as cheating for the essay.",
        "a": "1) AI writes the essay/parts from your ideas. 2) AI fixes up your draft. 3) AI generates an essay from your material. 4) AI restyles your paragraph into essay style. All leave text that was not really written by you.",
        "tags": [
          "AI",
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ai-declare.svg",
          "alt": "Cheating AI writing examples",
          "caption": "AI must not write your essay text",
          "shows": "Ideas/draft/material/restyle still cheating."
        }
      },
      {
        "id": "4100-ai-bland-text",
        "q": "Why does AI-generated essay text often get weak grades, beyond integrity?",
        "a": "LLM text often reads bland, polished and business-like - little personality - and says little despite fancy language. It also short-circuits learning to understand and communicate research, which you develop by writing yourself.",
        "tags": [
          "AI",
          "essay",
          "learning"
        ]
      },
      {
        "id": "4100-ai-allowed",
        "q": "Which AI uses does ACIT4100 endorse for the essay process?",
        "a": "Summarise/explain research articles; group articles into categories; have AI summarise YOUR draft/outline so you check coverage against your ideas; discuss topic/structure; help find material / common knowledge; teach grammar/writing from YOUR paragraph so YOU improve. Mentoring support - not masking your writing.",
        "tags": [
          "AI",
          "essay"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ai-declare.svg",
          "alt": "Allowed AI mentoring uses",
          "caption": "AI as mentor, not ghostwriter",
          "shows": "Support learning; do not write for you."
        }
      },
      {
        "id": "4100-ai-grammarly",
        "q": "Is Grammarly (or similar spell/style checkers) cheating in ACIT4100?",
        "a": "Not cheating if they only work on text you write yourself. Not endorsed either: they often make wording overly advanced/academic. Rare synonyms do not improve the text.",
        "tags": [
          "AI",
          "language"
        ]
      },
      {
        "id": "4100-plagiarism-forms",
        "q": "Name major plagiarism forms from the Avoiding Plagiarism reading.",
        "a": "Verbatim (word-for-word / mosaic); plagiarism of ideas (paraphrase without credit); self-plagiarism/duplicate publication; loose paraphrasing that keeps another's logic; failing to cite non-scholarly sources that contributed unique information.",
        "tags": [
          "plagiarism"
        ],
        "figure": {
          "type": "img",
          "src": "figures/plagiarism-vs-cite.svg",
          "alt": "Plagiarism forms versus proper citation",
          "caption": "Avoiding plagiarism reading",
          "shows": "Avoiding plagiarism reading"
        }
      },
      {
        "id": "4100-mandatory",
        "q": "What are the two mandatory goal-posts before the essay exam (from saved course pages)?",
        "a": "1) Assignment 1 - Literature taxonomy spreadsheet (scientific papers threshold for approval). 2) Assignment 2 - Presentation recording (5-10 minutes on the essay topic). Exact due dates: verify current Canvas (year labels may lag).",
        "tags": [
          "requirements"
        ]
      },
      {
        "id": "4100-syllabus-topics",
        "q": "Give examples of weekly themes from the saved ACIT4100 syllabus.",
        "a": "Rhetoric & persuasive arguments; searching/sorting literature; philosophy of science; research methods; using AI for research; classic style; narrative templates; public speaking; role of the expert; plagiarism; Q&A.",
        "tags": [
          "syllabus"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Weekly themes feeding the research funnel",
          "caption": "Syllabus topic examples",
          "shows": "Syllabus topic examples"
        }
      },
      {
        "id": "4100-ethics-rubric",
        "q": "What should the ethics discussion in the essay cover (assessment criteria)?",
        "a": "Identify ethical issues (professional ethics, research ethics, societal impact); present different viewpoints; de-construct arguments. The course plan also requires ethical challenges of research and societal uses.",
        "tags": [
          "ethics"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ethics-essay.svg",
          "alt": "Stakeholders harms duties ethics lens",
          "caption": "Ethics discussion criteria",
          "shows": "Ethics discussion criteria"
        }
      },
      {
        "id": "4100-disqualify",
        "q": "List key reasons an essay may fail (from assessment information).",
        "a": "Missing AI-use declaration (fail); insufficient research literature (minimum 10 considered); cannot follow evaluation criteria; insufficient research focus; not technology-related; no standard referencing; too much rewrite of sources ('not your own text'). Common word-count/cheating rules still apply; list not complete.",
        "tags": [
          "assessment",
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/ai-declare.svg",
          "alt": "Integrity failures that can fail the essay",
          "caption": "Declaration and plagiarism risks",
          "shows": "Declaration and plagiarism risks"
        }
      },
      {
        "id": "4100-wordcount-2026",
        "q": "What is the ACIT4100 essay word count (current Canvas)?",
        "a": "Individual essay 5500-6500 words (A-F). Not group work. Old intro video may still say ~12000 words - that is outdated. Confirm on current Canvas / OsloMet course page for your year.",
        "tags": [
          "essay",
          "2026",
          "requirements"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Essay length and structure",
          "caption": "Check current Canvas too",
          "shows": "Check current Canvas too"
        }
      },
      {
        "id": "4100-essay-must-include",
        "q": "Which three content blocks must the ACIT4100 essay include (course plan)?",
        "a": "1) Literature survey. 2) Discussion of methods used in the reviewed material. 3) Ethical challenges (research ethics and societal uses).",
        "tags": [
          "essay",
          "requirements"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Survey methods ethics funnel",
          "caption": "Three mandatory content areas",
          "shows": "Three mandatory content areas"
        }
      },
      {
        "id": "4100-mandatory-7",
        "q": "What literature spreadsheet threshold should you follow for Mandatory 1?",
        "a": "Current Canvas: taxonomy spreadsheet with 10+ scientific papers. Older saved course plans mentioned at least 7 - always follow the threshold published on current Canvas.",
        "tags": [
          "requirements",
          "literature"
        ],
        "figure": {
          "type": "img",
          "src": "figures/litsearch.svg",
          "alt": "Literature spreadsheet volume",
          "caption": "Meet the published threshold",
          "shows": "Meet the published threshold"
        }
      },
      {
        "id": "4100-video",
        "q": "What is the video goal-post before the essay exam?",
        "a": "A 5-10 minute recording/presentation on the essay topic (mandatory work requirement).",
        "tags": [
          "requirements"
        ]
      },
      {
        "id": "4100-synthesize",
        "q": "Are you expected to produce new empirical findings in the ACIT4100 essay?",
        "a": "No. Summarize, synthesize and communicate what others have published; you are not trained as anthropologists inventing new fieldwork models.",
        "tags": [
          "essay",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Synthesize published research",
          "caption": "Communicate existing knowledge",
          "shows": "Communicate existing knowledge"
        }
      },
      {
        "id": "4100-apa-page-para",
        "q": "For scientific papers in ACIT4100 APA7-based referencing, what extra detail is required?",
        "a": "Include page number and paragraph number (stricter than plain APA7). Books and websites follow conventional APA7. See Kildekompasset APA 7th.",
        "tags": [
          "APA",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/apa-anatomy.svg",
          "alt": "APA citation with page and paragraph",
          "caption": "Stricter for papers",
          "shows": "Stricter for papers"
        }
      },
      {
        "id": "4100-toulmin-parts",
        "q": "Name the main Toulmin parts used in the course's rhetoric/ethics work.",
        "a": "Claim (assertion), data/grounds (evidence), and warrant (why the evidence supports the claim); further parts may include backing, qualifier, and rebuttal.",
        "tags": [
          "rhetoric",
          "Toulmin"
        ],
        "figure": {
          "type": "img",
          "src": "figures/toulmin.svg",
          "alt": "Claim data warrant Toulmin",
          "caption": "Argument structure",
          "shows": "Argument structure"
        }
      },
      {
        "id": "4100-paraphrase",
        "q": "Does paraphrasing remove the need to cite?",
        "a": "No. Using another's ideas or unique content in your own words still requires citation; otherwise it is idea plagiarism.",
        "tags": [
          "plagiarism",
          "APA"
        ],
        "figure": {
          "type": "img",
          "src": "figures/plagiarism-vs-cite.svg",
          "alt": "Paraphrase still needs citation",
          "caption": "Credit the source",
          "shows": "Credit the source"
        }
      },
      {
        "id": "4100-vancouver",
        "q": "What authorship convention is named in the ACIT4100 learning outcomes?",
        "a": "The Vancouver convention on authorship (who qualifies as an author) - part of research integrity and publishing tradition.",
        "tags": [
          "publishing",
          "integrity"
        ]
      },
      {
        "id": "4100-methods-types",
        "q": "What method families should you be able to discuss when reviewing papers?",
        "a": "Qualitative and quantitative research methods (and how papers in your field typically design experiments/labs or studies) - identify methods used in the literature you survey.",
        "tags": [
          "methods"
        ],
        "figure": {
          "type": "img",
          "src": "figures/imrad.svg",
          "alt": "Methods section awareness",
          "caption": "Name methods in the survey",
          "shows": "Name methods in the survey"
        }
      },
      {
        "id": "4100-phil-science",
        "q": "Give examples of philosophy-of-science themes listed for ACIT4100.",
        "a": "Falsificationism/paradigms and traditions within philosophy of science (explicit or implicit in a research field) - connect them to how your field publishes and argues.",
        "tags": [
          "syllabus",
          "philosophy"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Philosophy of science in the funnel",
          "caption": "Paradigms and falsification",
          "shows": "Paradigms and falsification"
        }
      },
      {
        "id": "4100-perspectives",
        "q": "List example perspectives the 2026 essay requirements suggest for describing a research field.",
        "a": "Methods/methodologies; lab/experimental designs; philosophy-of-science tradition; publication venues; history of the field; codes of conduct/regulation; industry/society relations; ethical effects.",
        "tags": [
          "essay",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Essay perspectives outline",
          "caption": "Mix perspectives with criteria",
          "shows": "Mix perspectives with criteria"
        }
      },
      {
        "id": "4100-kildekompasset",
        "q": "Where does the course point you for APA 7th details?",
        "a": "Kildekompasset APA 7th (Norwegian and English): https://www.kildekompasset.no/en/referencing-styles/apa-7th/",
        "tags": [
          "APA",
          "tools"
        ],
        "figure": {
          "type": "img",
          "src": "figures/apa-anatomy.svg",
          "alt": "APA reference anatomy",
          "caption": "Use Kildekompasset",
          "shows": "Use Kildekompasset"
        }
      },
      {
        "id": "4100-classic-pinker",
        "q": "What is 'classic style' in this course (Pinker / Sense of Style)?",
        "a": "Clear, reader-oriented prose as described by Steven Pinker (The Sense of Style) and covered in class - suitable for popular-science / expert communication. May be hybridised with narrative cut-scenes. Pinker's book is on the optional source list (not pensum), but classic style itself is course-relevant for the essay.",
        "tags": [
          "classic-style",
          "Pinker",
          "optional-sources"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Classic style essay craft",
          "caption": "Pinker classic style",
          "shows": "Pinker classic style"
        }
      },
      {
        "id": "4100-course-name",
        "q": "What is the current ACIT4100 course name, and what outdated title may still appear in old video?",
        "a": "Current: Understanding and Communicating Research. Old intro video may still say Research methods & Ethics - treat that title as outdated; trust Canvas.",
        "tags": [
          "course-info",
          "canvas"
        ]
      },
      {
        "id": "4100-teachers",
        "q": "Who teaches ACIT4100 now (current Canvas)?",
        "a": "Kyrre Begnum and Sylvia Lysgård. Older materials naming Pedro / Kristine are outdated.",
        "tags": [
          "course-info",
          "canvas"
        ]
      },
      {
        "id": "4100-flipped",
        "q": "How does the flipped classroom work in ACIT4100?",
        "a": "Study the digital material BEFORE class. Class time is for activities and assisted individual work (not a first-time lecture of the week's content).",
        "tags": [
          "teaching",
          "flipped"
        ]
      },
      {
        "id": "4100-attendance",
        "q": "Is attendance mandatory, and what classroom rules apply?",
        "a": "Attendance is NOT obligatory - you do not need to notify staff if absent. Sessions are built for active participation / group work. If you come, arrive on time; breaks and meals are outside the classroom.",
        "tags": [
          "teaching",
          "practical",
          "faq"
        ]
      },
      {
        "id": "4100-publish-ahead",
        "q": "How far ahead do teachers publish weekly digital material?",
        "a": "At least one week ahead, so you can prepare before class.",
        "tags": [
          "teaching",
          "canvas"
        ]
      },
      {
        "id": "4100-exam-individual",
        "q": "Is the ACIT4100 exam group work, and what length should you ignore from old video?",
        "a": "No - it is an individual essay (5500-6500 words on current Canvas). Old video length ~12000 words is outdated. Not a group exam.",
        "tags": [
          "exam",
          "requirements"
        ]
      },
      {
        "id": "4100-not-typical-review",
        "q": "Is the ACIT4100 essay a typical literature review?",
        "a": "No. It is not a typical literature review - write to the published assessment criteria (methods, ethics, communicating research, etc.), not a generic review template.",
        "tags": [
          "essay",
          "assessment"
        ]
      },
      {
        "id": "4100-mand1-due",
        "q": "What is Assignment 1 (official Grades name), and when is it roughly due?",
        "a": "Assignment 1 - Literature taxonomy spreadsheet (10+ scientific papers threshold). Due around 26 September as listed on Canvas (Canvas/Grades may show 2025 / year quirks - always verify the year for your course run).",
        "tags": [
          "requirements",
          "deadlines"
        ]
      },
      {
        "id": "4100-mand2-due",
        "q": "What is Assignment 2 (official Grades name), and when is it roughly due?",
        "a": "Assignment 2 - Presentation recording (5-10 minute video on the essay topic). Due around 31 October (confirm exact date/time and year on Canvas).",
        "tags": [
          "requirements",
          "deadlines"
        ]
      },
      {
        "id": "4100-essay-deadline",
        "q": "When is the essay exam roughly due?",
        "a": "Around 5 December at noon on Canvas for the current run - always verify the exact deadline and year on Canvas / OsloMet (do not treat a pasted year as absolute truth).",
        "tags": [
          "exam",
          "deadlines"
        ]
      },
      {
        "id": "4100-writing-weekly",
        "q": "How should you plan time for the ACIT4100 essay?",
        "a": "Writing takes weekly time across the semester - do not leave the full essay for the final weeks after the mandatory goal-posts.",
        "tags": [
          "essay",
          "practical"
        ]
      },
      {
        "id": "4100-english-plain",
        "q": "What English level is expected in the essay?",
        "a": "Plain, grammatically correct English is enough. Advanced / fancy language is not an advantage in assessment.",
        "tags": [
          "essay",
          "language"
        ]
      },
      {
        "id": "4100-oslomet-page",
        "q": "Where do you find formal exam details (word count, form, year)?",
        "a": "OsloMet course information page for ACIT4100 - select the correct academic year. Cross-check Canvas for work requirements and deadlines.",
        "tags": [
          "exam",
          "course-info"
        ]
      },
      {
        "id": "4100-trust-canvas",
        "q": "If old intro video conflicts with Canvas (name, teachers, word count), what do you trust?",
        "a": "Trust current Canvas and the OsloMet course page for your year. Intro video can lag (old course title, old staff, old ~12000-word length).",
        "tags": [
          "canvas",
          "course-info"
        ]
      },
      {
        "id": "4100-class-purpose",
        "q": "What is class time mainly for in ACIT4100?",
        "a": "Active participation and group work: activities plus assisted individual work on your essay/literature process - after you have already done the digital prep.",
        "tags": [
          "teaching",
          "flipped",
          "faq"
        ]
      },
      {
        "id": "4100-topic-choice",
        "q": "What may you choose as the ACIT4100 essay topic (Essay requirements 2026)?",
        "a": "A field of research of your own choosing within the scope of the ACIT program. Focus on the research itself (understanding and communicating research), not mainly a technology with research around it.",
        "tags": [
          "essay",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/rq-focus.svg",
          "alt": "Choose a research field within ACIT",
          "caption": "Own research field within ACIT",
          "shows": "Topic = research field, not a product pitch."
        }
      },
      {
        "id": "4100-not-judge",
        "q": "Should you judge the quality of research findings like a domain expert?",
        "a": "No. Search, summarize, synthesize and communicate what others have published. You may discuss how you interpret findings, but you are not expected to judge their quality as an expert. You are not trained anthropologists uncovering new knowledge.",
        "tags": [
          "essay",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Synthesize do not judge as expert",
          "caption": "Report and interpret, do not referee",
          "shows": "Communicate published knowledge; do not act as expert referee."
        }
      },
      {
        "id": "4100-criteria-prescribe",
        "q": "Who decides which essay perspectives are more mandatory than others?",
        "a": "The assessment criteria document: clear expectations prescribe some areas as more mandatory. You choose the mix of perspectives, but you must check that document and cover the prescribed priorities.",
        "tags": [
          "essay",
          "assessment",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/assess-stars.svg",
          "alt": "Assessment criteria set mandatory areas",
          "caption": "Check the criteria document",
          "shows": "Mix is yours; mandatory weight comes from the rubric."
        }
      },
      {
        "id": "4100-own-effort",
        "q": "Do weekly course materials alone cover the essay perspectives?",
        "a": "No. Weekly content gets you started on most topics, but you still need substantial own effort, including skill training in reading scientific works. Class also includes writing exercises.",
        "tags": [
          "essay",
          "2026",
          "teaching"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/research-process-clear.svg",
          "alt": "Own reading and writing practice",
          "caption": "Course starts; you deepen",
          "shows": "Prep + own reading + in-class writing drills."
        }
      },
      {
        "id": "4100-content-over-style",
        "q": "Can excellent style compensate for thin research content in the essay?",
        "a": "No. Style is only a wrapper around information that must be communicated. Best grades go to essays that are rich in content and well executed in classic and/or narrative style.",
        "tags": [
          "essay",
          "classic-style",
          "narrative",
          "2026"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Content first then style craft",
          "caption": "Content first, style wraps it",
          "shows": "Rich research content + well executed style."
        }
      },
      {
        "id": "4100-not-hybrid",
        "q": "Is ACIT4100 hybrid (online + campus in parallel)?",
        "a": "No. The course is not hybrid - expect on-campus sessions for participation/group work (plus the flipped digital prep before class).",
        "tags": [
          "teaching",
          "faq",
          "practical"
        ]
      },
      {
        "id": "4100-not-recorded",
        "q": "Are ACIT4100 class sessions recorded?",
        "a": "No. Classes are not recorded so students can speak more comfortably and so learning from participation stays in the room.",
        "tags": [
          "teaching",
          "faq",
          "practical"
        ]
      },
      {
        "id": "4100-oria-access",
        "q": "How do you access research articles for ACIT4100 (library FAQ)?",
        "a": "Search Oria via the OsloMet library (https://www.oslomet.no/en/ul) - log in; use VPN or the OsloMet network when needed. Google Scholar often works too.",
        "tags": [
          "literature",
          "faq",
          "tools"
        ]
      },
      {
        "id": "4100-inspera",
        "q": "Where do you hand in the ACIT4100 exam?",
        "a": "Inspera via Studentweb - see https://student.oslomet.no/hjemmeeksamen for home-exam / Inspera access guidance.",
        "tags": [
          "exam",
          "faq",
          "practical"
        ]
      },
      {
        "id": "4100-candidate-number",
        "q": "Where do you find your candidate number before the exam deadline?",
        "a": "In Studentweb - look up your candidate number there before the hand-in deadline.",
        "tags": [
          "exam",
          "faq",
          "practical"
        ]
      },
      {
        "id": "4100-video-cc",
        "q": "What should you know about course video captions and browsers (Canvas FAQ)?",
        "a": "Closed captions (CC) are English-only (speech recognition). Supported browsers: Chrome, Firefox, Edge, Safari. Allow pop-ups so video tools work.",
        "tags": [
          "canvas",
          "faq",
          "practical"
        ]
      },
      {
        "id": "4100-konte-fail",
        "q": "What happens if you fail the ACIT4100 essay exam?",
        "a": "A continuation exam (konte) is available. It counts as a new exam attempt. Reasons for failing are listed in the assessment information document.",
        "tags": [
          "exam",
          "konte",
          "course-info"
        ]
      },
      {
        "id": "4100-konte-same-essay",
        "q": "If you failed ACIT4100, can you keep working on the same essay for the continuation exam?",
        "a": "Yes. Failed students may continue working on the same essay they submitted. How much rework is needed varies.",
        "tags": [
          "exam",
          "konte",
          "essay"
        ]
      },
      {
        "id": "4100-retake-new-essay",
        "q": "If you passed ACIT4100 but want a better grade next year, can you improve the same essay?",
        "a": "No. You must submit a new essay. Unlike failed students on konte, you cannot improve the same base text.",
        "tags": [
          "exam",
          "retake",
          "essay"
        ]
      },
      {
        "id": "4100-mandatory-two-years",
        "q": "How long do previously approved mandatory assignments stay valid when retaking ACIT4100?",
        "a": "Only for the past two years. If older, you must redo them.",
        "tags": [
          "exam",
          "mandatory",
          "retake"
        ]
      },
      {
        "id": "4100-oslomet-share-breach",
        "q": "Why is sharing your ACIT4100 essay with other students a breach?",
        "a": "The essay is an individual exam. Sharing it with others breaks exam rules. Official OsloMet cheating info: https://student.oslomet.no/en/cheating",
        "tags": [
          "integrity",
          "exam",
          "OsloMet"
        ]
      },
      {
        "id": "4100-oslomet-source-plagiarism",
        "q": "Is plagiarism from sources allowed if you do not share your essay with classmates?",
        "a": "No. Plagiarism from sources is also forbidden - do not present others' text or ideas as your own without proper citation.",
        "tags": [
          "integrity",
          "plagiarism",
          "OsloMet"
        ]
      },
      {
        "id": "4100-oslomet-detection",
        "q": "How does OsloMet check electronic essay submissions for cheating?",
        "a": "Submissions are checked against the internet and other exams (including previous years and courses). The system can detect synonym swaps and systematic rewriting.",
        "tags": [
          "integrity",
          "OsloMet"
        ]
      },
      {
        "id": "4100-oslomet-process",
        "q": "What is the process if cheating is suspected at OsloMet?",
        "a": "A report is made; the student is notified and invited to a meeting; the case goes to a central committee; then a judgment is issued.",
        "tags": [
          "integrity",
          "OsloMet"
        ]
      },
      {
        "id": "4100-oslomet-penalties",
        "q": "What penalties can follow an OsloMet cheating judgment?",
        "a": "Acquittal; annulled grade (must retake the course); or annulled grade plus expulsion from all Norwegian higher education for up to 1 year. In ACIT4100, experience is that cheaters often get the strongest penalty.",
        "tags": [
          "integrity",
          "OsloMet"
        ]
      },
      {
        "id": "4100-teacher-help-boundary",
        "q": "How do ACIT4100 teachers help with writing about others' research?",
        "a": "They help you write ABOUT others' work - not write what those authors write. You must produce your own wording and understanding.",
        "tags": [
          "teaching",
          "essay",
          "integrity"
        ]
      },
      {
        "id": "4100-assess-caution",
        "q": "What caution does the essay assessment information give about using the star list?",
        "a": "Do not try to calculate your grade from the list (you lack other essays). Do not reverse-engineer category weights with example essays - the list is revised yearly. Stars are coarse relative importance only. Rubrics may feel unclear early; meaning grows during the course. List = what they look for, not how to execute well.",
        "tags": [
          "assessment"
        ],
        "figure": {
          "type": "img",
          "src": "figures/assess-stars.svg",
          "alt": "Assessment caution",
          "caption": "Stars guide; do not reverse-engineer grades",
          "shows": "Relative weight only; list evolves yearly."
        }
      },
      {
        "id": "4100-stars-meaning",
        "q": "What do the stars (*, **, ***) mean in the ACIT4100 essay rubric?",
        "a": "Coarse relative importance when grading: *** weighs more than **, which weighs more than *. Not a full hidden points formula. Categories: Literature survey *** and Research methods ***; Flow/structure **, Rhetoric **, Ethics **; Visual presentation * and Language/other *.",
        "tags": [
          "assessment"
        ],
        "figure": {
          "type": "img",
          "src": "figures/assess-stars.svg",
          "alt": "Star weights",
          "caption": "More stars = more weight",
          "shows": "*** lit + methods; ** flow/rhetoric/ethics; * visual/language."
        }
      },
      {
        "id": "4100-two-sensors",
        "q": "How many sensors read each ACIT4100 essay, and what may compensate?",
        "a": "Two sensors read each essay. Strong performance in one category may sometimes compensate for weaknesses elsewhere - but structured criteria still aim for transparency.",
        "tags": [
          "assessment"
        ]
      },
      {
        "id": "4100-flow-structure",
        "q": "What does Flow / structure (**) look for in the essay?",
        "a": "Easy to follow with guiding text: paragraphs stick to one topic/point; introduction communicates the focus; segues (transitions) between sections; coherent overall structure.",
        "tags": [
          "assessment",
          "structure"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Flow and structure",
          "caption": "Topic paragraphs, intro focus, segues",
          "shows": "Guide the reader; keep a coherent path."
        }
      },
      {
        "id": "4100-rhetoric-rubric",
        "q": "What does Rhetoric (**) look for in the essay?",
        "a": "Rhetorical and dramatic devices plus appropriate style: capture attention in the introduction; rhetorical devices; dramatic devices for interest/engagement; use rhetoric terminology and the Toulmin model (e.g. how others frame an issue, or in ethics); written in classic style.",
        "tags": [
          "assessment",
          "rhetoric",
          "Toulmin"
        ],
        "figure": {
          "type": "img",
          "src": "figures/toulmin.svg",
          "alt": "Rhetoric and Toulmin",
          "caption": "Attention, devices, Toulmin, classic style",
          "shows": "Rhetoric ** includes classic style and Toulmin."
        }
      },
      {
        "id": "4100-lit-survey-use",
        "q": "Beyond paper count, what does Literature survey (***) reward?",
        "a": "How papers are used matters more than raw count (~10 low, ~20 high). Aggregate and categorize articles; use categorization to highlight aspects/observations; add non-scientific material (media, podcasts, dictionaries) for context; present literature in a storyline order.",
        "tags": [
          "assessment",
          "literature"
        ],
        "figure": {
          "type": "img",
          "src": "figures/litsearch.svg",
          "alt": "Literature survey use",
          "caption": "Categorize, contextualize, storyline",
          "shows": "Use > count; build a narrative path through sources."
        }
      },
      {
        "id": "4100-methods-rubric",
        "q": "What does Research methods (***) require in the essay?",
        "a": "Identify key research methods/approaches in your literature; describe them; discuss some (background, paradigm, strengths and weaknesses); give examples of how papers in your survey used the method.",
        "tags": [
          "assessment",
          "methods"
        ],
        "figure": {
          "type": "img",
          "src": "figures/imrad.svg",
          "alt": "Research methods rubric",
          "caption": "Identify, discuss, exemplify methods",
          "shows": "Paradigm + strengths/weaknesses + literature examples."
        }
      },
      {
        "id": "4100-visual-rubric",
        "q": "What does Visual presentation (*) require?",
        "a": "Images/diagrams share a consistent visual format, including titles and captions. Visuals complement written text - they must not replace it. Do not drop diagrams without advising the reader how to understand them.",
        "tags": [
          "assessment",
          "visual"
        ],
        "figure": {
          "type": "img",
          "src": "figures/assess-stars.svg",
          "alt": "Visual presentation",
          "caption": "Consistent captions; complement text",
          "shows": "Same format; guide the reader; do not replace prose."
        }
      },
      {
        "id": "4100-language-rubric",
        "q": "What does Language / other (*) cover, and which reference styles are mentioned?",
        "a": "General English proficiency, plus proper quotes and referencing. The language bullet says must follow IEEE or APA. Primary course standard for ACIT4100 is still APA7-based and stricter for scientific papers (page + paragraph). Books/websites: conventional APA7. See Kildekompasset.",
        "tags": [
          "assessment",
          "language",
          "APA",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/apa-anatomy.svg",
          "alt": "Language and referencing",
          "caption": "English + quotes/refs; APA7-stricter primary",
          "shows": "Language * mentions IEEE or APA; course primary = APA7-stricter for papers."
        }
      },
      {
        "id": "4100-ref-books-web",
        "q": "Do books and websites need page and paragraph numbers under the ACIT4100 referencing standard?",
        "a": "No. The stricter page + paragraph rule applies to scientific papers. Books and websites follow conventional APA7.",
        "tags": [
          "APA",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/real/apa-cite-clear.svg",
          "alt": "APA for books and websites",
          "caption": "Papers stricter; books/web conventional APA7",
          "shows": "Page+paragraph = papers only."
        }
      },
      {
        "id": "4100-cheat-report",
        "q": "Which signs may lead to reporting the essay for cheating (assessment information)?",
        "a": "List not complete. Signs of circumventing collect-organize-structure-write with own skills: text-generation engines; masking others text as your own; using text/images/content without reference; using paper lists from other literature reviews instead of your own searches. Ask staff if unsure.",
        "tags": [
          "assessment",
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/plagiarism-vs-cite.svg",
          "alt": "Cheating report signs",
          "caption": "Own search, own writing, proper credit",
          "shows": "Generators, masking, no refs, borrowed paper lists."
        }
      },
      {
        "id": "4100-not-own-text",
        "q": "What is \"not your own text\" as a fail reason (distinct from plagiarism)?",
        "a": "Too much of the essay is merely a rewrite of other sources. May not be plagiarism in mild cases, but sensors cannot find enough of you composing with your own writing skills - so the essay can fail on that basis.",
        "tags": [
          "assessment",
          "integrity"
        ],
        "figure": {
          "type": "img",
          "src": "figures/plagiarism-vs-cite.svg",
          "alt": "Not your own text",
          "caption": "Rewrite-heavy text can fail",
          "shows": "Compose; do not only rephrase sources."
        }
      },
      {
        "id": "4100-fail-min-papers",
        "q": "What literature minimum can lead to considering a fail?",
        "a": "Fewer than 10 research papers: sensors will consider failing. Rubric also treats ~10 as low and ~20 as high, but how papers are used matters more than count alone.",
        "tags": [
          "assessment",
          "literature",
          "requirements"
        ],
        "figure": {
          "type": "img",
          "src": "figures/litsearch.svg",
          "alt": "Minimum research papers",
          "caption": "Under 10 research papers = fail risk",
          "shows": "Min 10; use quality and synthesis."
        }
      },
      {
        "id": "4100-fail-tech-focus",
        "q": "Name research-focus and topic fails from the assessment information.",
        "a": "Consider fail if: cannot evaluate against the criteria list; insufficient research focus; not related to technology; no standard reference format. Also fail if missing AI declaration or under 10 research papers (see other cards).",
        "tags": [
          "assessment"
        ],
        "figure": {
          "type": "img",
          "src": "figures/rq-focus.svg",
          "alt": "Technology and research focus",
          "caption": "Research + technology + evaluable criteria",
          "shows": "Stay on research/technology and meet the rubric."
        }
      },
      {
        "id": "4100-lit-storyline",
        "q": "What does a literature \"storyline\" mean in the survey criterion?",
        "a": "The order in which you present literature should show a deliberate narrative path - not a random dump of papers. Storyline supports coherence with Flow/structure.",
        "tags": [
          "assessment",
          "literature"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Literature storyline",
          "caption": "Ordered path through the literature",
          "shows": "Sequence = argument, not a pile of cites."
        }
      },
      {
        "id": "4100-nonscientific-context",
        "q": "May you use non-scientific sources in the literature survey criterion?",
        "a": "Yes - to substantiate, complement, or give useful context to the research literature (e.g. media articles, podcasts, dictionaries). They support, not replace, research articles.",
        "tags": [
          "assessment",
          "literature"
        ]
      },
      {
        "id": "4100-apa7-primary",
        "q": "What is the primary referencing standard for ACIT4100 essays?",
        "a": "APA7-based, mandatory for every essay regardless of writing style. Stricter for scientific papers (page number AND paragraph number). Books/websites: conventional APA7. Language rubric mentions IEEE or APA for quotes/refs, but the course primary standard is this APA7-stricter rule. Details: Kildekompasset APA 7th.",
        "tags": [
          "APA",
          "references",
          "assessment"
        ],
        "figure": {
          "type": "img",
          "src": "figures/apa-anatomy.svg",
          "alt": "Primary APA7-stricter standard",
          "caption": "APA7-based + page and paragraph for papers",
          "shows": "Primary course standard; IEEE/APA note is secondary in Language *."
        }
      },
      {
        "id": "4100-assess-not-typical",
        "q": "Why do teachers share the star criteria instead of only example essays?",
        "a": "They grade something slightly different from a normal literature survey. Example texts can help but also confuse when topics/styles differ. The star categories help you self-evaluate against what sensors look for.",
        "tags": [
          "assessment",
          "essay"
        ]
      },
      {
        "id": "4100-sources-not-pensum",
        "q": "Is the Canvas \"List of source material\" mandatory pensum for ACIT4100?",
        "a": "No. The course has no single textbook. The listed books/talks are NOT part of the curriculum; they are optional deeper material ordered by topic (Writing, Philosophy of science, Political philosophy, Rhetoric, Technology and Society), not by importance.",
        "tags": [
          "meta",
          "optional-sources",
          "not-pensum"
        ],
        "figure": {
          "type": "img",
          "src": "figures/research-funnel.svg",
          "alt": "Optional deeper sources",
          "caption": "Source list = fordypning, not pensum",
          "shows": "No single textbook; dive deeper only if useful."
        }
      },
      {
        "id": "4100-freytag-pyramid",
        "q": "What is Freytag's Pyramid useful for in ACIT4100 essay styles?",
        "a": "A classic narrative arc (exposition, rising action, climax, falling action, denouement/resolution). Useful if you write in narrative / short-story style or use narrative cut-scenes inside classic prose. Listed under Writing on the optional source list - craft tool, not a book to memorise as pensum.",
        "tags": [
          "narrative",
          "optional-sources",
          "Writing"
        ],
        "figure": {
          "type": "img",
          "src": "figures/thesis-outline.svg",
          "alt": "Narrative arc sketch",
          "caption": "Freytag-style story shape",
          "shows": "Shape tension for narrative essay sections."
        }
      },
      {
        "id": "4100-narrative-templates",
        "q": "How do narrative templates relate to the ACIT4100 essay (vs memorising every Writing source)?",
        "a": "Syllabus week on narrative templates supports short-story techniques and hybrids with classic style. Optional Writing sources (e.g. Olson on narrative, Freytag's Pyramid) can deepen craft; you do not need to memorise the full source list as if it were pensum.",
        "tags": [
          "narrative",
          "meta",
          "optional-sources"
        ]
      },
      {
        "id": "4100-overleaf-locators",
        "q": "For scientific papers in ACIT4100, which locators must citations include?",
        "a": "Both a page number and a paragraph number (or a line range when that fits better). The Overleaf example shows how to attach these locators in LaTeX citations.",
        "tags": [
          "APA",
          "Overleaf",
          "references"
        ],
        "figure": {
          "type": "img",
          "src": "figures/apa-anatomy.svg",
          "alt": "Citation with page and paragraph locators",
          "caption": "Page + paragraph (or lines) for papers",
          "shows": "Course rule: scientific papers need precise locators, not only author-year."
        }
      },
      {
        "id": "4100-overleaf-packages",
        "q": "Which packages does the ACIT4100 Overleaf APA example emphasise, and how is biblatex set up?",
        "a": "csquotes and biblatex. Configure biblatex with style=apa and backend=biber (plus sorting options as in the example). Document style and spacing can change; those packages are the important part.",
        "tags": [
          "Overleaf",
          "LaTeX",
          "APA"
        ]
      },
      {
        "id": "4100-overleaf-cite-cmds",
        "q": "In the Overleaf example, when do you use parencite versus textcite (with optional locators)?",
        "a": "parencite = parenthetical citation. textcite = narrative citation (author names in the sentence). Both can take a locator such as [\\pno~17, para.~3] before the bib key.",
        "tags": [
          "Overleaf",
          "LaTeX",
          "references"
        ]
      },
      {
        "id": "4100-overleaf-illustrative",
        "q": "Is hansen2024 in the Overleaf referencing example a real paper for your essay?",
        "a": "No. It is an illustrative bib entry (fake DOI) only to demonstrate page/paragraph locators - not a source you should treat as real research.",
        "tags": [
          "Overleaf",
          "references",
          "integrity"
        ]
      },
      {
        "id": "4100-overleaf-apa-pdf",
        "q": "Where is the compiled APA_example.pdf for the Overleaf referencing demo?",
        "a": "On the ACIT4100 Canvas page Referencing example for OverLeaf / LaTeX (download APA_example.pdf there). The page also shows the LaTeX/bib setup.",
        "tags": [
          "Overleaf",
          "Canvas",
          "APA"
        ]
      },
      {
        "id": "4100-mandatory-info-quiz",
        "q": "Why must you pass the Mandatory information quiz in ACIT4100?",
        "a": "It must be passed to open the rest of the course in Canvas. (Course information quiz is separate; both appear under Grades.)",
        "tags": [
          "canvas",
          "requirements",
          "quiz"
        ]
      },
      {
        "id": "4100-assign1-official",
        "q": "What is the official Canvas/Grades name of Assignment 1 in ACIT4100?",
        "a": "Assignment 1 - Literature taxonomy spreadsheet. Due around 26 September noon on Canvas (dates may still show year 2025 - verify the year for your run).",
        "tags": [
          "requirements",
          "deadlines",
          "canvas"
        ]
      },
      {
        "id": "4100-assign2-official",
        "q": "What is the official Canvas/Grades name of Assignment 2 in ACIT4100?",
        "a": "Assignment 2 - Presentation recording. Due around 31 October noon on Canvas (dates may still show year 2025 - verify the year for your run).",
        "tags": [
          "requirements",
          "deadlines",
          "canvas"
        ]
      }
    ]
  },
  "computer-basics": {
    "course": "Computer basics",
    "title": "Computer for dummies",
    "cards": [
      {
        "id": "cb-file-folder",
        "q": "What is the difference between a file and a folder?",
        "a": "A file is one item (document, photo, program). A folder (directory) is a container that holds files and/or other folders.",
        "tags": [
          "files",
          "folders"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-explorer.svg",
          "alt": "Folder containing files",
          "caption": "Folders organise files",
          "shows": "Folders organise files"
        }
      },
      {
        "id": "cb-explorer",
        "q": "How do you open File Explorer quickly on Windows?",
        "a": "Press Win+E, or click the folder icon on the taskbar, or search 'File Explorer' in the Start menu.",
        "tags": [
          "explorer",
          "shortcuts"
        ]
      },
      {
        "id": "cb-path-name",
        "q": "In the path C:\\Users\\You\\Documents\\report.pdf - what is the path, and what is the filename?",
        "a": "The path is the full location (C:\\Users\\You\\Documents\\report.pdf). The filename is report.pdf (name + extension).",
        "tags": [
          "paths",
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-path.svg",
          "alt": "Path broken into drive, folders, and filename",
          "caption": "Path = where; filename = which file",
          "shows": "Path = where; filename = which file"
        }
      },
      {
        "id": "cb-address-bar",
        "q": "Where in File Explorer can you see or type the full path?",
        "a": "In the address bar at the top. Click it to reveal/edit the full path (e.g. C:\\Users\\...).",
        "tags": [
          "explorer",
          "paths"
        ]
      },
      {
        "id": "cb-recycle",
        "q": "What happens when you delete a file normally, and how do you remove it for good?",
        "a": "It usually goes to the Recycle Bin (recoverable). Empty the Recycle Bin, or use Shift+Delete, to remove it permanently (harder to recover).",
        "tags": [
          "files",
          "recycle-bin"
        ]
      },
      {
        "id": "cb-settings",
        "q": "How do you open Windows Settings?",
        "a": "Press Win+I, or Start -> Settings (gear icon).",
        "tags": [
          "settings",
          "shortcuts"
        ]
      },
      {
        "id": "cb-taskmgr",
        "q": "What is Task Manager for, and how do you open it?",
        "a": "See running apps/processes, CPU/RAM use, and end a frozen program. Open with Ctrl+Shift+Esc (or Ctrl+Alt+Delete -> Task Manager).",
        "tags": [
          "task-manager"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-task-manager.svg",
          "alt": "Task Manager concept with CPU and memory",
          "caption": "Task Manager shows what is running",
          "shows": "Task Manager shows what is running"
        }
      },
      {
        "id": "cb-downloads",
        "q": "Where do browser downloads usually land on Windows?",
        "a": "In your Downloads folder (often C:\\Users\\<you>\\Downloads). Check the browser's download list (Ctrl+J in many browsers) for the exact file.",
        "tags": [
          "browser",
          "downloads"
        ]
      },
      {
        "id": "cb-extension",
        "q": "What is a file extension (e.g. .pdf, .docx, .exe), and why does it matter?",
        "a": "The suffix after the last dot tells Windows (and you) the file type and which app opens it. .exe means a program - don't run unknown ones.",
        "tags": [
          "files",
          "extensions"
        ]
      },
      {
        "id": "cb-show-ext",
        "q": "How can you make Windows always show file extensions in File Explorer?",
        "a": "File Explorer -> View -> Show -> File name extensions (wording can vary slightly by Windows version).",
        "tags": [
          "explorer",
          "extensions"
        ]
      },
      {
        "id": "cb-admin-user",
        "q": "Administrator account vs standard user - what's the practical difference?",
        "a": "An administrator can install software, change system settings, and manage other accounts. A standard user is limited - safer for everyday use; Windows prompts (UAC) when admin rights are needed.",
        "tags": [
          "accounts",
          "security"
        ]
      },
      {
        "id": "cb-wifi",
        "q": "Where do you connect to Wi-Fi or see network status on Windows?",
        "a": "Click the network / Wi-Fi icon in the system tray (bottom-right), or Settings -> Network & internet.",
        "tags": [
          "network",
          "wifi"
        ]
      },
      {
        "id": "cb-updates",
        "q": "Where do you check for Windows updates?",
        "a": "Settings -> Windows Update. Install updates regularly for security and bug fixes; reboot when asked.",
        "tags": [
          "updates",
          "settings"
        ]
      },
      {
        "id": "cb-usb",
        "q": "How do you safely remove a USB drive?",
        "a": "Use 'Eject' / 'Safely remove hardware' on the USB icon in the system tray (or right-click the drive in File Explorer -> Eject) before unplugging, so files finish writing.",
        "tags": [
          "usb",
          "hardware"
        ]
      },
      {
        "id": "cb-cloud-local",
        "q": "Cloud storage vs local storage - what's the difference?",
        "a": "Local = on this PC (or USB). Cloud = on the internet (OneDrive, Google Drive, etc.) - available on other devices when online; still sync copies may exist locally in a sync folder.",
        "tags": [
          "cloud",
          "storage"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-cloud-local.svg",
          "alt": "PC disk versus cloud sync",
          "caption": "Local on the machine; cloud over the network",
          "shows": "Local on the machine; cloud over the network"
        }
      },
      {
        "id": "cb-copy-paste",
        "q": "What are the usual shortcuts for copy, cut, and paste?",
        "a": "Copy Ctrl+C, Cut Ctrl+X, Paste Ctrl+V. Cut moves; copy duplicates. Works in Explorer and most apps.",
        "tags": [
          "shortcuts",
          "clipboard"
        ]
      },
      {
        "id": "cb-screenshot",
        "q": "How do you take a screenshot of part of the screen on modern Windows?",
        "a": "Win+Shift+S opens Snipping Tool overlay to select an area. PrtSc copies the whole screen; Win+PrtSc often saves a full-screen shot to Pictures\\Screenshots.",
        "tags": [
          "screenshots",
          "shortcuts"
        ]
      },
      {
        "id": "cb-desktop-docs",
        "q": "Desktop vs Documents - how should you think about them?",
        "a": "Both are folders under your user profile. Desktop is for quick access (icons on the screen); Documents is a better long-term place for coursework and files you don't need as icons.",
        "tags": [
          "folders",
          "organisation"
        ]
      },
      {
        "id": "cb-start-search",
        "q": "What's a fast way to find an app or setting without hunting menus?",
        "a": "Press the Windows key and start typing the name (e.g. 'Notepad', 'Wi-Fi', 'Task Manager'). Select the result and Enter.",
        "tags": [
          "start",
          "search"
        ]
      },
      {
        "id": "cb-browser-os",
        "q": "What is the difference between the operating system and a web browser?",
        "a": "The OS (Windows) runs the whole computer: files, hardware, apps. A browser (Chrome, Edge, Firefox) is an app for websites - it does not replace the OS.",
        "tags": [
          "os",
          "browser"
        ]
      },
      {
        "id": "cb-minimise-close",
        "q": "Minimise vs close (X) - what happens to the program?",
        "a": "Minimise hides the window but the program keeps running (taskbar). Close (X) exits that window/app (unsaved work may be lost).",
        "tags": [
          "windows",
          "ui"
        ]
      },
      {
        "id": "cb-right-click",
        "q": "What does right-click usually do?",
        "a": "Opens a context menu with actions for that item (Open, Copy, Rename, Properties, etc.). Very useful in File Explorer and on the desktop.",
        "tags": [
          "ui",
          "explorer"
        ]
      },
      {
        "id": "cb-taskmgr-cpu",
        "q": "Why open Task Manager when a PC feels slow?",
        "a": "Check CPU, memory, and disk usage to see which process is consuming resources (Ctrl+Shift+Esc).",
        "tags": [
          "performance"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-task-manager.svg",
          "alt": "Task Manager resource view",
          "caption": "Find heavy processes",
          "shows": "Find heavy processes"
        }
      },
      {
        "id": "cb-ext-risk",
        "q": "Why can file extensions matter for security?",
        "a": "The extension hints at the file type (e.g. .exe vs .pdf). Malware may disguise dangerous types; show extensions in Explorer to avoid surprises.",
        "tags": [
          "files",
          "security"
        ]
      },
      {
        "id": "cb-admin-why",
        "q": "When should you use an administrator account?",
        "a": "Only when needed to install software or change system settings - daily browsing/email as a standard user reduces impact of mistakes and malware.",
        "tags": [
          "accounts",
          "security"
        ]
      },
      {
        "id": "cb-cloud-sync",
        "q": "What is a risk of assuming \"the cloud always has my only copy\"?",
        "a": "Sync conflicts, accidental deletes, or account lockout can lose access - keep important local copies and know where the authoritative file lives.",
        "tags": [
          "cloud",
          "files"
        ],
        "figure": {
          "type": "img",
          "src": "figures/pc-cloud-local.svg",
          "alt": "Cloud versus local copies",
          "caption": "Know where files live",
          "shows": "Know where files live"
        }
      },
      {
        "id": "cb-updates-why",
        "q": "Why install OS and app updates promptly?",
        "a": "Updates often patch security vulnerabilities and fix bugs - delaying leaves known holes open.",
        "tags": [
          "security",
          "updates"
        ]
      },
      {
        "id": "cb-wifi-public",
        "q": "What is a basic caution on public Wi-Fi?",
        "a": "Avoid sensitive logins on untrusted networks when possible; prefer HTTPS and consider a trusted network/VPN policy for confidential work.",
        "tags": [
          "network",
          "security"
        ]
      }
    ]
  }
};

  var EXPECTED = {
    acit4050: 85,
    acit4280: 147,
    acit4100: 102,
    "computer-basics": 28
  };

  global.QUIZ_DECKS_META = {
    version: "lock29",
    expected: EXPECTED,
    loadedAt: Date.now()
  };
  global.__QUIZ_DECKS_LOAD_OK = true;

  try {
    var mismatch = [];
    Object.keys(EXPECTED).forEach(function (key) {
      var deck = global.QUIZ_DECKS[key];
      var n = deck && Array.isArray(deck.cards) ? deck.cards.length : -1;
      if (n !== EXPECTED[key]) mismatch.push(key + "=" + n);
    });
    if (mismatch.length && typeof console !== "undefined" && console.warn) {
      console.warn("[quiz-decks] count mismatch:", mismatch.join(", "));
    }
  } catch (e) { /* ignore */ }
})(typeof window !== "undefined" ? window : globalThis);

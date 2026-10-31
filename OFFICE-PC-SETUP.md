# Office PC — setup & information gathering

## Start here

Paste this into Claude Code on the office PC, in this repo's folder:

> This is the CDCE website rebuild (Centre for Distance and Continuing Education,
> University of Peradeniya). I'm continuing on my office PC, which can reach the live
> server at cdce.pdn.ac.lk. Read HANDOVER.md and this file first — they carry the
> design decisions and the information-gathering plan.
>
> State: the React/Vite frontend is built and complete. It is a design proposal, not
> published, and the Director has not approved it. No backend exists yet.
>
> In order:
> 1. Part A below — get it running locally, confirm `npm run build` works.
> 2. Part B below — help me collect the DB schema, row counts, and the Moodle
>    web-service check.
> 3. Then help me decide the backend: PHP on the existing server (Apache 2.4 /
>    FreeBSD / PHP 7.4.30) or Node on a new VM. The deciding question is whether
>    anything needs to be per-student. If it is all public content, a scheduled JSON
>    export is probably enough and no backend is needed.
>
> Rules that do not bend:
> - No real student rows and no DB passwords leave the building. Schema only
>   (`mysqldump --no-data`), fake rows generated locally.
> - Never expose MySQL 3306 through a tunnel. No DB credentials in the React bundle.
> - This repo stays private: it documents the server's unpatched PHP 7.4.30 and where
>   the credentials live.
>
> Still open on the frontend: body font (Source Sans 3 vs Plus Jakarta Sans); the
> dormant dark-theme palette still holds the old warm values that were replaced in
> light mode; hero photography.

---


Two separate machines are involved:

- **Office PC** — your workstation. Runs the dev site, can reach the server.
- **Web server** — `cdce.pdn.ac.lk`. Apache 2.4.54 / FreeBSD / PHP 7.4.30, holds the
  MySQL database and the uploaded files.

Part A runs on the PC. Part B runs wherever `mysql` can reach the database — either on
the server over SSH, or on the PC if a MySQL client is installed and the DB accepts
connections from your subnet.

> Windows PC: run these in **Git Bash** (ships with Git for Windows), not CMD or
> PowerShell. The `~` paths and heredocs need a POSIX shell.

---

## Part A — get the site running on the office PC

Prerequisites: Git, Node.js 18+.

```bash
node --version && git --version
```

Clone and run:

```bash
git clone https://github.com/Nipuna754/CDCE-WEBSITE.git
cd CDCE-WEBSITE
npm install
npm run dev
```

Opens on http://localhost:5173. Then read `HANDOVER.md` in the repo root before
changing anything — it lists the decisions that look arbitrary but break the design if
simplified.

Verify the production build works too:

```bash
npm run build
```

---

## Part B — information to collect

Replace `USER` and `DBNAME`. You will be prompted for the password each time; do not
put it on the command line.

### 1. Database schema, structure only — no student data leaves the building

```bash
mysqldump --no-data -u USER -p DBNAME > ~/cdce-schema.sql
```

### 2. Row counts — separates live content from abandoned tables

```bash
mysql -u USER -p -e "SELECT table_name, table_rows FROM information_schema.tables WHERE table_schema='DBNAME' ORDER BY table_rows DESC;" > ~/cdce-rowcounts.txt
```

### 3. The PHP files that contain the queries

The schema alone does not say what the columns *mean*. These four do:

```bash
cd /path/to/webroot
cp notice1.php Deg.php gallery.php downloads-for-staff.php ~/cdce-php/
```

(Also useful if easy: `baresults.php`, `diploma2.php`, `certificate2.php`.)

### 4. Uploaded files — size of the migration

```bash
cd /path/to/webroot
du -sh dload/
find dload/ -type f | wc -l
find dload/ -type f | sed -E 's/.*\.//' | sort | uniq -c | sort -rn
```

### 5. Are Moodle web services enabled?

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://cdcelms2.pdn.ac.lk/webservice/rest/server.php
curl -s -o /dev/null -w '%{http_code}\n' https://cdcebba1.pdn.ac.lk/webservice/rest/server.php
```

`200` or `403` → enabled. `404` → needs turning on in Moodle:
Site administration → Advanced features → Enable web services.

### 6. Moodle version

Log in as admin → Site administration → Notifications. The version is at the top.
Needed for both instances (`cdcelms2`, `cdcebba1`).

### 7. Where does PHP read its DB credentials from?

Find the connection file, but **send only the variable names and the host/db values —
redact the password.**

```bash
cd /path/to/webroot
grep -rl "mysqli_connect\|new PDO\|mysql_connect" --include="*.php" . | head
```

---

## Do not send

- **Database passwords.** Never needed. The connector will read them from an
  environment variable on the machine that runs inside the network.
- **Real student rows.** `--no-data` in step 1 handles this. Fake rows get written
  locally for development.

---

## Questions that need answers from people, not commands

1. **What and where is the MIS?** It is not linked from the public site. Separate
   application, or the same database?
2. **Does anything on the new site need to be per-student** (results, enrolment, fee
   status)? If everything is public content, the whole Cloudflare Tunnel half of the
   plan never gets built.
3. **Who will edit content after launch** — you running a sync script, or CDCE staff
   needing an admin screen? The second is a much larger piece of work.
4. **Ask IT for an always-on VM inside the subnet** (2 vCPU / 2 GB is plenty) and
   confirm outbound port 443 is not filtered on it. Your office PC is not a server —
   it sleeps, reboots and moves.

## Also worth raising with IT, unrelated to this project

- **PHP 7.4.30 reached end-of-life in November 2022** — that server has had no security
  patches in nearly four years.
- The current site links to itself over plain `http://` in several places.

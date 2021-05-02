ferhats-MacBook-Air:nodejs-course fo$ heroku -v
 ›   Warning: Our terms of service have changed: https://dashboard.heroku.com/terms-of-service
heroku/7.52.0 darwin-x64 node-v12.21.0
ferhats-MacBook-Air:nodejs-course fo$ heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/e8f34d87-95cb-457f-95af-74539aff9a90?requestor=SFMyNTY.g2gDbQAAAA0xNzYuODguMTM2LjcwbgYAXiDoCHkBYgABUYA.xUAw9JpO8R1n9gC14duDZsyWulXlkjMr_2wQrF4GDuk
Logging in... done
Logged in as fozturk@gmail.com
ferhats-MacBook-Air:nodejs-course fo$ 
ferhats-MacBook-Air:nodejs-course fo$ git -v
unknown option: -v
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
ferhats-MacBook-Air:nodejs-course fo$ git 
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout    Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

ferhats-MacBook-Air:web-server fo$ git init
Initialized empty Git repository in /Users/fo/workspace/nodejs-course/web-server/.git/
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git add src/
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   src/app.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        templates/
        utils/

ferhats-MacBook-Air:web-server fo$ git add .
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   package-lock.json
        new file:   package.json
        new file:   public/css/style.css
        new file:   public/help.html
        new file:   public/img/cliently.png
        new file:   public/img/robot.png
        new file:   public/js/feapp.js
        new file:   src/app.js
        new file:   templates/partials/footer.hbs
        new file:   templates/partials/header.hbs
        new file:   templates/views/about.hbs
        new file:   templates/views/index.hbs
        new file:   utils/forecast.js
        new file:   utils/geocode.js

ferhats-MacBook-Air:web-server fo$ git commit -m "initial commit for web-server project"
[master (root-commit) 1e2aef3] initial commit for web-server project
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 15 files changed, 1035 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/css/style.css
 create mode 100644 public/help.html
 create mode 100644 public/img/cliently.png
 create mode 100644 public/img/robot.png
 create mode 100644 public/js/feapp.js
 create mode 100644 src/app.js
 create mode 100644 templates/partials/footer.hbs
 create mode 100644 templates/partials/header.hbs
 create mode 100644 templates/views/about.hbs
 create mode 100644 templates/views/index.hbs
 create mode 100644 utils/forecast.js
 create mode 100644 utils/geocode.js
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   public/js/feapp.js

no changes added to commit (use "git add" and/or "git commit -a")
ferhats-MacBook-Air:web-server fo$ git add public/js/feapp.js 
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   public/js/feapp.js

ferhats-MacBook-Air:web-server fo$ git commit -m "removed unnecessary console.log call"
[master 10fc16b] removed unnecessary console.log call
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 2 deletions(-)
ferhats-MacBook-Air:web-server fo$ git config --global --edit
ferhats-MacBook-Air:web-server fo$ git commit --amend --reset-author
[master 0243a9e] removed unnecessary console.log call
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

ferhats-MacBook-Air:web-server fo$ ls -a 
ferhats-MacBook-Air:web-server fo$ ls -a -l ~/.ssh
ls: /Users/fo/.ssh: No such file or directory
ferhats-MacBook-Air:web-server fo$ ssh-keygen -t rsa -b 4096 -C "fozturk@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/fo/.ssh/id_rsa): 
Created directory '/Users/fo/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/fo/.ssh/id_rsa.
Your public key has been saved in /Users/fo/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:3BlSegLa+4jSc3gotVm5hxLE2XSD3rigljY0sjrqzJY fozturk@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|      o.o .      |
|   . *.o +       |
|    =.oo+ o      |
|. o.. o+.= o     |
| + +o.+.S o      |
|. *o O.=         |
|.o+.X * o        |
|=E o = .         |
|==               |
+----[SHA256]-----+
ferhats-MacBook-Air:web-server fo$ ls -a -l ~/.ssh
total 16
drwx------   4 fo  staff   128 Apr 25 15:34 .
drwxr-xr-x+ 32 fo  staff  1024 Apr 25 15:34 ..
-rw-------   1 fo  staff  3381 Apr 25 15:34 id_rsa
-rw-r--r--   1 fo  staff   743 Apr 25 15:34 id_rsa.pub
ferhats-MacBook-Air:web-server fo$ eval "$(ssh-agent -s)"
Agent pid 50016
ferhats-MacBook-Air:web-server fo$ shh-add -K ~/.ssh/id_rsa
bash: shh-add: command not found
ferhats-MacBook-Air:web-server fo$ ssh-add -K ~/.ssh/id_rsa
Identity added: /Users/fo/.ssh/id_rsa (fozturk@gmail.com)
ferhats-MacBook-Air:web-server fo$ shh-add -K ~/.ssh/id_rsa




ferhats-MacBook-Air:nodejs-course fo$ heroku -v
 ›   Warning: Our terms of service have changed: https://dashboard.heroku.com/terms-of-service
heroku/7.52.0 darwin-x64 node-v12.21.0
ferhats-MacBook-Air:nodejs-course fo$ heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/e8f34d87-95cb-457f-95af-74539aff9a90?requestor=SFMyNTY.g2gDbQAAAA0xNzYuODguMTM2LjcwbgYAXiDoCHkBYgABUYA.xUAw9JpO8R1n9gC14duDZsyWulXlkjMr_2wQrF4GDuk
Logging in... done
Logged in as fozturk@gmail.com
ferhats-MacBook-Air:nodejs-course fo$ 
ferhats-MacBook-Air:nodejs-course fo$ git -v
unknown option: -v
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
ferhats-MacBook-Air:nodejs-course fo$ git 
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout    Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

ferhats-MacBook-Air:web-server fo$ git init
Initialized empty Git repository in /Users/fo/workspace/nodejs-course/web-server/.git/
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        src/
        templates/
        utils/

nothing added to commit but untracked files present (use "git add" to track)
ferhats-MacBook-Air:web-server fo$ git add src/
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   src/app.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore
        package-lock.json
        package.json
        public/
        templates/
        utils/

ferhats-MacBook-Air:web-server fo$ git add .
ferhats-MacBook-Air:web-server fo$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   package-lock.json
        new file:   package.json
        new file:   public/css/style.css
        new file:   public/help.html
        new file:   public/img/cliently.png
        new file:   public/img/robot.png
        new file:   public/js/feapp.js
        new file:   src/app.js
        new file:   templates/partials/footer.hbs
        new file:   templates/partials/header.hbs
        new file:   templates/views/about.hbs
        new file:   templates/views/index.hbs
        new file:   utils/forecast.js
        new file:   utils/geocode.js

ferhats-MacBook-Air:web-server fo$ git commit -m "initial commit for web-server project"
[master (root-commit) 1e2aef3] initial commit for web-server project
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 15 files changed, 1035 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/css/style.css
 create mode 100644 public/help.html
 create mode 100644 public/img/cliently.png
 create mode 100644 public/img/robot.png
 create mode 100644 public/js/feapp.js
 create mode 100644 src/app.js
 create mode 100644 templates/partials/footer.hbs
 create mode 100644 templates/partials/header.hbs
 create mode 100644 templates/views/about.hbs
 create mode 100644 templates/views/index.hbs
 create mode 100644 utils/forecast.js
 create mode 100644 utils/geocode.js
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   public/js/feapp.js

no changes added to commit (use "git add" and/or "git commit -a")
ferhats-MacBook-Air:web-server fo$ git add public/js/feapp.js 
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   public/js/feapp.js

ferhats-MacBook-Air:web-server fo$ git commit -m "removed unnecessary console.log call"
[master 10fc16b] removed unnecessary console.log call
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 2 deletions(-)
ferhats-MacBook-Air:web-server fo$ git config --global --edit
ferhats-MacBook-Air:web-server fo$ git commit --amend --reset-author
[master 0243a9e] removed unnecessary console.log call
 Committer: ferhat öztürk <fo@ferhats-MacBook-Air.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

ferhats-MacBook-Air:web-server fo$ ls -a 
ferhats-MacBook-Air:web-server fo$ ls -a -l ~/.ssh
ls: /Users/fo/.ssh: No such file or directory
ferhats-MacBook-Air:web-server fo$ ssh-keygen -t rsa -b 4096 -C "fozturk@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/fo/.ssh/id_rsa): 
Created directory '/Users/fo/.ssh'.
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/fo/.ssh/id_rsa.
Your public key has been saved in /Users/fo/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:3BlSegLa+4jSc3gotVm5hxLE2XSD3rigljY0sjrqzJY fozturk@gmail.com
The key's randomart image is:
+---[RSA 4096]----+
|      o.o .      |
|   . *.o +       |
|    =.oo+ o      |
|. o.. o+.= o     |
| + +o.+.S o      |
|. *o O.=         |
|.o+.X * o        |
|=E o = .         |
|==               |
+----[SHA256]-----+
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ git remote add origin git@github.com:foztr/nodejs-cliently.git
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDKCoP1mrDvVOUCEy2hWXQsyibhbJgMal4BS09eHsgCqe++UqV/Mq9XX9JJlG1RG3tThChbOpbz9uH+bH4FMM1q5+xFaT5xwJkx8hdKBajX/G2jgSf7NgSMzsCd+Ys9eCtsmynWPXnU2aAtD+f04p6hN3Re0/mENpEoDNrtu2SIh8DZ6ivXmE06FSMbYH30lfGowzvj05QxYIE5RO/8pT0Qpy1W37+s2zyk38lNq75fakadN2izCd+dXHSXjUFiTRrZ+WlOtr0Fra1yVeKxdltQEMPgfo6piuvQvwbJuj3IcwCy2RF4iPQpBAohd5KNKKD5eLJRQw2bmN5Mi2bN4XtAnEOHzJqfdCT6IwaI5uKDlgueg1rM+s3nlEdZywaEH82Bz4KcPCSzFSWTQ0ceu3S2eQ2QSWYwv6d9NcPPL0lL/qApK58dsc8RMAbsYPUO6XqF4wRcLBotIHQdzrUWIt8eD4cr0CL4QbFOZoWDAEWnZe6Oo8keh+1pJYA2EHPfCFFvtROU3XTmenOKazOrBYBue75sLDExg1edBySzpHTUWJjnJRapG85XWaW9IcORAXzp98OvFlM7K8gzkBTxnerkRpOKC27fNakW4GtNRKCdaFx1FmP8Uyzhr1IMHwVdy4+csovJyNAlhb5FhHpu05DpYtyMuTNeAUB9rGSpuffz7Q== fozturk@gmail.com
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ ssh -T git@github.com
The authenticity of host 'github.com (140.82.121.4)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,140.82.121.4' (RSA) to the list of known hosts.
Hi foztr! You've successfully authenticated, but GitHub does not provide shell access.
ferhats-MacBook-Air:web-server fo$ 
ferhats-MacBook-Air:web-server fo$ 
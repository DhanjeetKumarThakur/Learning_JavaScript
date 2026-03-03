---
mode: agent 
model: Claude Haiku 4.5 (copilot)
description: Reviews the recent changes in a file
---
Check ONLY the latest changes in this file: ${input:check:The current file}:
- if you find changes proceed for review, if no changes simply revert the message "No new changes found".
- for finding the changes in ${input:check:The current file} use the command "git diff master -- filepath" which checks the differences between the current branch and the master branch. 
- Let me knows where I am not following best practices
- show me where anti-patterns may exist in the file
- make sure duplicate code is pointed out to me
- warn me if there is a single-line conditional expression that has more than two binary conditions.

Briefly encourage me to review the results, in one or two sentences. 
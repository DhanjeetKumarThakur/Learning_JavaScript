--- 
mode: agent
model: Claude Sonnet 4.5 
description: Reviews the codebase
---
Check ONLY this file: ${input:check:The current file}:
- let me know where I am not following best practices
- show me where anti-patterns may exist in the file
- make sure duplicate code is pointed out to me
- warn me if there is a single-line conditional expression that has more than two binary conditions

Briefly encourage me to review the results, in one or two sentences. 
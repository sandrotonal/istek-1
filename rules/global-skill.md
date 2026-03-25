# Global Skill: Code Review & Enhancement

## Purpose
Automatically review code changes and suggest improvements based on best practices.

## Triggers
- When a file is modified in `src/`.
- When a PR is created or updated.
- On command: `@review-code`.

## Actions
1. Analyze syntax and linting issues.
2. Check for unused variables, missing types, etc.
3. Suggest refactoring if needed.
4. Generate unit test stubs if missing.

## Output Format
```json
{
  "issues": ["missing type annotation", "unused import"],
  "suggestions": ["add @types/react", "use useCallback for performance"],
  "tests": ["create test for handleLogin function"]
}
```

## Integration
- This skill is linked to TRAE's AI agent via `@Builder with MCP`.
- It runs automatically when triggered.
# `@sebastienrousseau/java-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/java-config`.

---

## Description

Shareable Java configuration standards providing enterprise Checkstyle, SpotBugs, and PMD rulesets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/java-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. checkstyle.xml

- **Description**: Strict Checkstyle ruleset enforcing Java code conventions, naming standards, and documentation.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. spotbugs-exclude.xml

- **Description**: SpotBugs static analysis configuration identifying null pointers, concurrency hazards, and resource leaks.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. pmd-ruleset.xml

- **Description**: PMD quality ruleset auditing cyclomatic complexity, best practices, and error-prone constructs.
- **Scope**: Production & Development
- **Status**: Stable & Active

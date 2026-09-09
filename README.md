<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

<p align="center">
  <img src="./java-config.svg" alt="java-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/java-config</h1>

<p align="center">
  Shareable Java configuration providing standardized Checkstyle, SpotBugs, and PMD rules adhering to modern 2026 standards.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/java-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/java-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/java-config"><img src="https://img.shields.io/npm/v/%40sebastienrousseau%2Fjava-config.svg?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/java-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/java-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="LICENSE-APACHE"><img src="https://img.shields.io/badge/license-Apache--2.0%20OR%20MIT-blue.svg?style=for-the-badge" alt="License: Apache-2.0 OR MIT" /></a>
  <a href="#minimum-toolchain-policy"><img src="https://img.shields.io/badge/node->=%2018.0.0-93450a.svg?style=for-the-badge&logo=node.js" alt="Node >= 18.0.0" /></a>
</p>

---

## Contents

- [Overview](#overview)
- [Presets](#presets)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [License](#license)
- [Security](#security)

---

## Overview

`@sebastienrousseau/java-config` delivers production-ready, standardized configurations for Java tooling adhering to 2026 enterprise best practices.

## Presets Included

- `checkstyle.xml`
- `spotbugs-exclude.xml`
- `pmd-ruleset.xml`

## Installation

```bash
npm install -D @sebastienrousseau/java-config
```

## Quick Start

### CommonJS
```javascript
const config = require("@sebastienrousseau/java-config");
console.log(config.presets);
```

### ESM
```javascript
import config from "@sebastienrousseau/java-config";
console.log(config.defaultPreset);
```

## License

Dual licensed under [Apache License, Version 2.0](LICENSE-APACHE) or [MIT License](LICENSE-MIT).

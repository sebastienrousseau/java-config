---
title: "Usage — @sebastienrousseau/java-config"
description: "How to use and configure @sebastienrousseau/java-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/java-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/java-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/java-config";
console.log(config.defaultPreset);
```

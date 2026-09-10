// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

export interface JavaConfig {
  [key: string]: unknown;
}

declare const config: JavaConfig;
export default config;

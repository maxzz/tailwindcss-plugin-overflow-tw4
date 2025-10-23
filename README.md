# Tailwind CSS v4 Overflow Overlay Plugin

A Tailwind CSS v4 plugin that adds overflow overlay utilities.

## Installation

```bash
npm install tailwindcss-plugin-overflow-tw4
# or
pnpm add tailwindcss-plugin-overflow-tw4
# or
yarn add tailwindcss-plugin-overflow-tw4
```

## Usage

Add the plugin to your Tailwind CSS configuration:

```javascript
// tailwind.config.js
import overflowPlugin from 'tailwindcss-plugin-overflow-tw4';

export default {
  plugins: [
    overflowPlugin,
  ],
};
```

## Available Utilities

This plugin provides the following utilities:

- `.overflow-overlay` - Sets `overflow: overlay`
- `.overflow-x-overlay` - Sets `overflow-x: overlay`
- `.overflow-y-overlay` - Sets `overflow-y: overlay`

## Example

```html
<div class="overflow-overlay">
  <!-- Content with overlay scrollbars -->
</div>

<div class="overflow-y-overlay">
  <!-- Content with vertical overlay scrollbar -->
</div>
```

## Development

### Setup

```bash
pnpm install
```

### Build

```bash
pnpm run build
```

### Debug

```bash
pnpm run debug
```

Or use VS Code's debugger with the provided launch configuration.

### Publish

```bash
pnpm run publish:npm
```

## Requirements

- Node.js >= 18.0.0
- pnpm >= 10.0.0
- Tailwind CSS v4.x

## License

MIT

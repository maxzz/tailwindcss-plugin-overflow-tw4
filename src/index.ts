import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/plugin';

/**
 * Tailwind CSS v4 Plugin for Overflow Overlay Utilities
 * 
 * This plugin adds overflow-overlay utilities to Tailwind CSS.
 * The overflow-overlay value is a legacy scrollbar behavior that can be useful
 * for custom scrollbar implementations.
 */
const overflowPlugin = plugin(function ({ addUtilities }: PluginAPI) {
    addUtilities({
        '.overflow-overlay': {
            overflow: 'overlay',
        },
        '.overflow-x-overlay': {
            overflowX: 'overlay',
        },
        '.overflow-y-overlay': {
            overflowY: 'overlay',
        },
    });
});

export default overflowPlugin;

// For debugging purposes when run with tsx
if (typeof process !== 'undefined' && import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, '/')}`) {
    console.log('Tailwind CSS Overflow Overlay Plugin loaded successfully!');
    console.log('Available utilities:');
    console.log('  - .overflow-overlay');
    console.log('  - .overflow-x-overlay');
    console.log('  - .overflow-y-overlay');
}

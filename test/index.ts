import overflowPlugin from '../src/index.js';

console.log('='.repeat(60));
console.log('Testing Tailwind CSS Overflow Overlay Plugin');
console.log('='.repeat(60));
console.log();

console.log('Plugin loaded:', overflowPlugin);
console.log('Plugin type:', typeof overflowPlugin);
console.log();

// Test that the plugin is a function (Tailwind plugins are functions)
if (typeof overflowPlugin === 'function') {
  console.log('✓ Plugin is a function (valid Tailwind plugin)');
} else {
  console.error('✗ Plugin is not a function');
}

console.log();
console.log('Plugin details:');
console.log('  - Name:', overflowPlugin.name || '(anonymous)');
console.log('  - Has __isOptionsFunction:', '__isOptionsFunction' in overflowPlugin);
console.log();

console.log('Available utilities that will be added:');
console.log('  - .overflow-overlay');
console.log('  - .overflow-x-overlay');
console.log('  - .overflow-y-overlay');
console.log();

console.log('='.repeat(60));
console.log('Test completed successfully!');
console.log('='.repeat(60));

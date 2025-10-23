import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        'tw-overflow': 'src/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: false,
    treeshake: true,
    splitting: false,
    outDir: 'dist',
    target: 'es2022',
    platform: 'node',
});

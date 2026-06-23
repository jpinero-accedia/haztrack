// vim: ft=typescript: ts=3: sw=3: noet:

import esbuild from 'esbuild';

await esbuild.build (
	{
		entryPoints: ['src/index.ts'],
		bundle:      false,
		format:      'esm',
		platform:    'browser',
		outdir:      'dist',
		loader:      { '.ts': 'ts' },
		sourcemap:   true,
	}
);

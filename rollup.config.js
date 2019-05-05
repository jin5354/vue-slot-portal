import typescript from 'rollup-plugin-typescript2'
import VuePlugin from 'rollup-plugin-vue'
import {terser} from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'esm',
    name: 'slotPortal'
  },
  plugins: [
    typescript({
      'clean': true,
      'tsconfigOverride': {
        compilerOptions: {
          declaration: true
        }
      }
    }),
    babel({ runtimeHelpers: true }),
    VuePlugin(),
    terser(),
  ],
  external: ['vue']
}
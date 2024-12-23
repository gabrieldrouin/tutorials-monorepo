# zachgoll-express

Course from freeCodeCamp.org by Zach Gollwitzer

Source: https://www.youtube.com/watch?v=F-sFp_AvHc8

## typescript ressources

- Secure APIs with Node.js, Express, TypeScript, ESM, and Arcjet: https://www.youtube.com/watch?v=FOGiNmvNzlM
- How to Setup Node.js and TypeScript: https://www.youtube.com/watch?v=u_GQSEjis48
- **GOAT tutorial, uses all methods** - How to fix ERR_UNKNOWN_FILE_EXTENSION in #TypeScript: https://www.youtube.com/watch?v=jn370WEIvjs
- How To Use TypeScript With Express & Node: https://www.youtube.com/watch?v=qy8PxD3alWw
- (3 part series) Typescript API in NodeJS / Express in Depth: https://www.youtube.com/watch?v=NYZKUTGC51g
- **Best explanation as to why tsx is used** - The End of ts-node? Here’s What You Need to Know : https://www.youtube.com/watch?v=-7dNs1ggKRs

## notes

- tsx is a typescript _runner_, which means it doesn't do type-checking.
  As such, `package.json` scripts are defined as:
  `"dev": "tsx src/index.ts",
"start": "tsc --noEmit && tsx src/index.ts",`
  where `start` will transpile and provide type-checking with no output file (`--noEmit`).

- The following article mentions that using nodemon with ts-node remains faster than using tsx: https://medium.com/modernnerd-code/tsx-vs-ts-node-and-nodemon-0ec60d21c5e1
  Because this current project is very small, this comparison can not be tested, and tsx seems to be overall easier to use, so we'll stick with it.

- The tsimp repo (https://github.com/tapjs/tsimp) explains the difference between current loaders and compilers available:

  > - swc is a TypeScript compiler implementation in Rust
  > - tsx is a zero-config TypeScript executer that aims to be a drop-in replacement for node, powered by esbuild.
  > - ts-node is probably the most established of these, with a huge feature set and support for every version of node and TypeScript you could possibly want.

- ts-runtime-comparison: https://github.com/privatenumber/ts-runtime-comparison?tab=readme-ov-file

-

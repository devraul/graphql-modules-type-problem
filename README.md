# `graphql-modules` moduleResolution bug problem

## Repro

1. go to `module-nodenext`
2. install deps with npm `npm install`
3. run `npm run lint`
4. see no error
5. go to `module-bundler`
6. install deps with npm `npm install`
7. run `npm run lint`
8. see the errors related to types

TO FIX:

1. go to `module-bundler`;
2. open `module-bundler/node_modules/graphql-modules/package.json`
3. Change the `exports` field:

   ```diff
     {
       "typings": "index.d.ts",
       "exports": {
         ".": {
   +       "types": "./index.d.ts",
           "require": "./index.js",
           "import": "./index.mjs"
         },
         "./*": {
   +       "types": "./*.d.ts",
           "require": "./*.js",
           "import": "./*.mjs"
         },
         "./package.json": "./package.json"
     }
   ```

4. Save the changes
5. now run `npm run lint` again
6. see the error is gone

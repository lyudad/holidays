# Holiday team1

## Workflow 28/10/21 Ticket 'Create react|redux|typescript template' / Alex Kurkov

Whats's new:
1. Bootstrapped with CRA typescript template
2. Extended eslint with 'airbnb' presets and add new scripts to package.json:
```
npm run lint // lint all js/ts files

npm run lint-fix // lint and auto-fix(if possible) all js/ts files
```
2. Removed template files
3. Add example RTK slice 'user' with 2 actions, created redux-store and add it to project  
4. created `types.ts` file in /src/utils for project TS interfaces & types

## PR#1 Ticket 'Create react|redux|typescript template' / Alex Kurkov
Whats's new:
1. Add simple routing (created HomePage & NotFoundPage as templates)
2. Now modules can be imported by absolute paths from root `/src`
3. Created HOC (HigherOrderComponent) for futer protected by auth routes
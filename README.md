# eslint-plugin-use-client-t3
An ESLint plugin to disallow specific client directives in the T3 stack with tRPC.

## Installation
```bash
npm link @MdSadiqMd/eslint-plugin-use-client-t3
```

## Usage
Add the plugin to your ESLint configuration file (e.g., `.eslintrc.cjs`):
```js
{
    plugins: [
        // other plugins...
        "@MdSadiqMd/use-client-t3",
    ],
    rules: {
        // other rules...
        "@MdSadiqMd/use-client-t3/no-top-level-use-client": "error",
        "@MdSadiqMd/use-client-t3/no-event-handlers-in-client-props": "error",
    }
}
```

## Rules
- **`no-top-level-use-client`**: Disallow the use of top-level `"use client"` directive in certain files, as it may cause issues with the stack.
- **`no-event-handlers-in-client-props`**: Prevent passing event handlers to Client Component props to avoid runtime issues.

## Run
```bash
npm run lint -- --fix
```

## License
MIT License

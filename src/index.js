module.exports = {
    rules: {
        "no-top-level-use-client": {
            create(context) {
                return {
                    Program(node) {
                        const filename = context.getFilename();

                        if (filename.endsWith('src/app/page.tsx')) {
                            node.body.forEach((statement) => {
                                if (
                                    statement.type === "ExpressionStatement" &&
                                    statement.expression.type === "Literal" &&
                                    statement.expression.value === "use client"
                                ) {
                                    context.report({
                                        node: statement,
                                        message: 'Top-level "use client" directive may cause problems to existing stack.',
                                    });
                                }
                            });
                        }
                    },
                };
            },
        },
        "no-event-handlers-in-client-props": {
            create(context) {
                return {
                    JSXAttribute(node) {
                        const filename = context.getFilename();

                        if (filename.endsWith('src/app/page.tsx')) {
                            if (node.value && node.value.type === 'JSXExpressionContainer') {
                                const value = node.value.expression;
                                if (
                                    (value.type === 'ArrowFunctionExpression' || value.type === 'FunctionExpression') &&
                                    node.name.name.startsWith('on')
                                ) {
                                    context.report({
                                        node,
                                        message: 'Event handlers cannot be passed to Client Component props.',
                                    });
                                }
                            }
                        }
                    },
                };
            },
        },
    },
};
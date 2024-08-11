export const topLevelHookInFC: string = 'function Counter() {\n' +
    '  // ✅ Good: top-level in a function component\n' +
    '  const [count, setCount] = useState(0);\n' +
    '  // ...\n' +
    '}\n' +
    '\n';

export const topLevelHookInCustomHook: string = 'function useWindowWidth() {\n' +
    '  // ✅ Good: top-level in a custom Hook\n' +
    '  const [width, setWidth] = useState(window.innerWidth);\n' +
    '  // ...\n' +
    '}';

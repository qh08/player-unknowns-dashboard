export function propsValidError(propName, ComponentName) {
    return new Error(`Validation failed. With prop "${propName}" in component "${ComponentName}".`);
}
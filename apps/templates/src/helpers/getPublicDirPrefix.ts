export function getPublicDirectoryPrefix(): string {
    return import.meta.env.MODE == 'production' ? 'static/' : '';
};
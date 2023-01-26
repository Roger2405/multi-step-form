export default function getObjectFromStorage<T>(key: string) {
    const strFromStorage = sessionStorage.getItem(key);
    if (strFromStorage) {
        const json = JSON.parse(strFromStorage || '');
        return json as T;
    }
    else {
        return undefined;
    }

}
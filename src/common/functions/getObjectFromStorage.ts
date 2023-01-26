export default function getObjectFromStorage<T>(key: string) {
    const strFromStorage = sessionStorage.getItem(key);
    // console.log(strFromStorage)
    if (strFromStorage !== undefined) {
        const json = JSON.parse(strFromStorage || '');
        return json as T;
    }
    else {
        return {} as T;
    }

}
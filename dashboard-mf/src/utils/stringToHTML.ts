export const stringToHTML = function (str: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    const desc = doc.getElementsByTagName('body');
    return desc.item(0)?.innerText;
};
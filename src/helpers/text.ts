export function camelizeText(text: string) :string
{
    text = text.replace(/_/g, ' ');
    return text.toLowerCase().replace(/\b[a-z]/g, (letter) => {
        return letter.toUpperCase();
    }).replace(/ /g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
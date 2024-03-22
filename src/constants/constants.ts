export const api_key: string = 'cbfc34c404168b13581b967133516c73262f9d244f3d3e6768251f8acabe43dd';
export const base_url: string = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=30&tsym=USD';
export const image_url: string = 'https://www.cryptocompare.com';

const currentDate = new Date(Date.now());
const day: string = currentDate.getDate().toString().padStart(2, '0');
const month: string = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year: string = currentDate.getFullYear().toString();
const hours: string = currentDate.getHours().toString().padStart(2, '0');
const minutes: string = currentDate.getMinutes().toString().padStart(2, '0');
export const formattedDate: string = `${day}.${month}.${year} ${hours}:${minutes} МСК`;
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertCurrency(total: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

const translit = (str: string) => {
  const ru =
    'А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split(
      '-'
    );
  const en =
    'A-a-B-b-V-v-G-g-D-d-E-e-E-e-Zh-zh-Z-z-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-Kh-kh-Ts-ts-Ch-ch-Sh-sh-Sh-sh-Y-y-Y-y-E-e-Yu-yu-Ya-ya'.split(
      '-'
    );
  let res = '';
  for (let i = 0, l = str.length; i < l; i++) {
    const s = str.charAt(i);
    const n = ru.indexOf(s);
    if (n >= 0) {
      res += en[n];
    } else {
      res += s;
    }
  }
  return res;
};

export const generateSlug = (str: string): string => {
  let url: string = str.replace(/[\s]+/gi, '-');

  url = translit(url);

  url = url
    .replace(/[^0-9a-z_\-]+/gi, '-')
    .replace(/[-]+/gi, '-')
    .toLowerCase();
  return url;
};

export const getAuthURL = (provider: string): string => {
  const serverUrl = process.env.SERVER_URL;

  return `${serverUrl}/auth/${provider}/login`;
};

export const getStoreLocal = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }
  return null;
};

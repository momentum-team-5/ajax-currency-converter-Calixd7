let currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
let url = 'https://exchangeratesapi.io/'

let fromcurrencyEl = document.getElementById('fromcurrency');
let fromammountEl = document.getElementById('fromammount');
let tocurrencyEl = document.getElementById('tocurrency');
let toammountEl = document.getElementById('toammount');
let rateEl = document.getElementById('rate');
let submitEl = document.getElementById('submit');
 
fromcurrencyEl.addEventListener('change', calculate);
fromammountEl.addEventListener('input', calculate);
tocurrencyEl.addEventListener('change', calculate);
toammountEl.addEventListener('input', calculate);
 

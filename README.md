# cookie-crud

[![Build](https://github.com/ryuusama09/cookie-crud/actions/workflows/nodejs.yml/badge.svg)](https://github.com/ryuusama09/cookie-crud/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/cookie-crud.svg)](https://www.npmjs.com/package/cookie-crud)
[![NPM Downloads](https://img.shields.io/npm/dt/cookie-crud.svg)](https://www.npmjs.com/package/cookie-crud)
[![Github Repo Size](https://img.shields.io/github/repo-size/ryuusama09/cookie-crud.svg)](https://github.com/ryuusama09/cookie-crud)
[![LICENSE](https://img.shields.io/npm/l/cookie-crud.svg)](https://github.com/ryuusama09/cookie-crud/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/ryuusama09/cookie-crud.svg)](https://github.com/ryuusama09/cookie-crud/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/ryuusama09/cookie-crud.svg)](https://github.com/ryuusama09/cookie-crud/commits/master)


[![Build](https://github.com/arshadkazmi42/cookie-crud/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/cookie-crud/actions/workflows/nodejs.yml)

CRUD operations on browser cookies store in Sqlite. ( CrossPlatform )

## Install

```
npm i cookie-crud
```

## Usage

```javascript

const CookieCrud = require('cookie-crud');
const CC = new CookieCrud();

const ChromeCookie = CC.getChrome();
const FirefoxCookie = CC.getFirefox();

// Reading cookie
const cookie = await FirefoxCookie.getCookie('arshad.com');

// Inserting cookie
const DATA = [
  {
    'baseDomain': 'arshad.com',
    'originAttributes': '',
    'name': 'arshad',
    'value': 'arshad-test-cookie',
    'host': 'arshad.com',
    'path': '/root',
    'expiry': 1,
    'lastAccessed': 111111111,
    'creationTime': 10001110,
    'isSecure': 1,
    'isHttpOnly': 0,
    'inBrowserElement': 0,
    'sameSite': 0,
  }
];

await FirefoxCookie.setCookie(DATA);


// Reading cookie
const cookie = await ChromeCookie.getCookie('arshad.com');

// Inserting cookie
const DATA = [
  {
    'creation_utc': 'now',
    'encrypted_value': 'enc2',
    'expires_utc': 'never',
    'has_expires': 'yes',
    'host_key': 'arshad.com',
    'is_httponly': 'yes',
    'is_persistent': 'no',
    'is_secure': 'yes',
    'last_access_utc': 'now',
    'name': 'arshad',
    'path': '/root',
    'priority': 'no',
    'value': 'kazmi',
    'samesite': -1
  }
];

await ChromeCookie.setCookie(DATA);

```

## API

- **`getCookie(path)`**
  - Returns cookie json from database for the input path
    - **Params**
      - path (String)

- **`setCookie(cookies)`**
  - Adds all the input cookies into the sqlite database
    - **Params**
      - cookies (Array of cookies object)

- **`removeCookie(domain)`**
  - Removes all records matching the domain.
  - > It uses `like` condition (`%domain%`) so anything matching the pattern will be removed
    - **Params**
      - path (String)

> Same APIs are available for all the browsers

## Supported Browsers

- Firefox
- Chrome

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/cookie-crud/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase


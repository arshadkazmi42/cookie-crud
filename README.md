# cookie-crud

[![Build Status](https://api.travis-ci.com/arshadkazmi42/cookie-crud.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/cookie-crud)

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

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>


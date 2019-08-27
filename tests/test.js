const { expect } = require('chai');

const CookieCrud = require('../index');
const Cookie = new CookieCrud(__dirname + '/chrome-cookie.db', __dirname + '/firefox-cookie.sqlite');

const CHROME_DATA = [
  {
    'creation_utc': 'now',
    'encrypted_value': '{"type": "Buffer", "data": [101,110,99,50]}',
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
  }
];

const CHROME_INSERTED = [
  {
    'creation_utc': 'now',
    'encrypted_value': '{"type":"Buffer","data":[101,110,99,50]}',
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

const FIREFOX_DATA = [
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


describe('chrome cookie get and set operations', () => {
  it('should add new row in the database', async () => {
    const ChromeCookie = Cookie.getChrome();
    expect(ChromeCookie).is.not.null;

    await ChromeCookie.setCookie(CHROME_DATA);

    let rows = await ChromeCookie.getCookie('arshad.com');
    expect(rows.length).to.equal(1);
    expect(rows).to.deep.equal(CHROME_INSERTED);

    await ChromeCookie.removeCookie('arshad.com');

    rows = await ChromeCookie.getCookie('arshad.com');
    expect(rows.length).to.equal(0);
  });
});

describe('firefox cookie get and set operations', () => {
  it('should add new row in the database', async () => {
    const FirefoxCookie = Cookie.getFirefox();
    expect(FirefoxCookie).is.not.null;

    await FirefoxCookie.setCookie(FIREFOX_DATA);

    let rows = await FirefoxCookie.getCookie('arshad.com');
    expect(rows.length).to.equal(1);
    expect(rows).to.deep.equal(FIREFOX_DATA);

    await FirefoxCookie.removeCookie('arshad.com');
    
    rows = await FirefoxCookie.getCookie('arshad.com');
    expect(rows.length).to.equal(0);
  });
});

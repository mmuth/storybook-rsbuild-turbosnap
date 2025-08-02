// Ensure the __webpack_public_path__ is configured correctly before any additional chunks are loaded
// If not done before any imports this will result in some chunks being loaded from the wrong location
// No other imports should be done before this point

const baseUrl = document.currentScript?.getAttribute('baseUrl');
if (!baseUrl) {
  throw new Error('no baseUrl configured on script tag.');
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
__webpack_public_path__ = baseUrl;

void import('./bootstrap');


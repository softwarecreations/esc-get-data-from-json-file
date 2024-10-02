# esc-get-data-from-json-file
Get data from JSON file with helpful console.error messages on error, then: exit, throw or return default data.

## Example
```JavaScript
import getDataFromJsonFile from 'esc-get-data-from-json-file';
const prefsO = getDataFromJsonFile({
  label   : 'preferences',
  filePath: '/tmp/prefs.json',
  onError : { flavour:'chocolate', size:'large' },
});

console.log('prefsO', prefsO);
```
Alternatively onError could be null, an array, 'exit' or 'throw'.

## Installation
`npm install esc-get-data-from-json-file`

## Project goals
* Lightweight: 536 bytes of code
* No dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-get-data-from-json-file

### PR's or issues
Welcome

### License
MIT

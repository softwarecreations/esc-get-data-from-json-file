'use strict';

import fs from 'fs';

export const getDataFromJsonFile = ({ label, filePath, onError='exit' }) => { // onError can also be null or {} or [] or whatever you want { foo:1, bar:2, baz:null, qux:[1,2,3] }
	try {
    const json = fs.readFileSync(filePath, 'utf8');
  	return JSON.parse(json);
  } catch (readErr) {
		if (fs.existsSync(filePath)) {
			console.error(`Error reading from '${label}' file ${filePath}:`, readErr);
		} else {
			console.error(`'${label}' does not exist at ${filePath}`);
		}
		if (onError==='exit') return process.exit(1);
		if (onError==='throw') throw err;
		return onError;
  }
};

export default getDataFromJsonFile;

#!/usr/bin/env ts-node-script

// generates form json files from google forms
// to build forms that submit to google sheets

import * as fs from 'fs';
import { googleFormsToJson } from 'react-google-forms-hooks';

(async () => {
  const interested = await googleFormsToJson('https://docs.google.com/forms/d/e/1FAIpQLSdqe3FwMO6Bj5yC_KWKv7jvOdLD_vMCcKrWdA7xxenlYfWxNA/viewform');
  fs.writeFileSync('./src/components/Forms/InterestForm.json', JSON.stringify(interested, null, 2));
})();

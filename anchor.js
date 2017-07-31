let anchor = val => val
       .trim()
       .toLowerCase()
       .replace(/[^\w\- ]+/g, '')
       .replace(/\s/g, '-')
       .replace(/\-+$/, '');

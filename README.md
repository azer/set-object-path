## change-object-path

Set given (deep) object path

See also: [get-object-path](http://github.com/azer/get-object-path), [change-object](http://github.com/azer/change-object)

## Install

```bash
$ npm install change-object-path
```

## Usage

```js
var set = require('change-object-path')
var data = {
  title: 'My Products',
  products: {
    eggs: [{ kind: 'white', amount: 300 }, { kind: 'brown', amount: 200 }]
  }
}

set(data, 'products.eggs[0].amount', 200)
data.products.eggs[0].amount
// => 200
```

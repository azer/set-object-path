var test = require("prova");
var set = require("./");

test('setting a simple path', function (t) {
  var obj = {
    foo: 123,
    bar: 456,
    qux: 789,
    yo: 'lo'
  };

  set(obj, 'foo', 1230);
  set(obj, 'bar', 4560);
  set(obj, 'yo', 'yolo');

  t.plan(3);
  t.equal(obj.foo, 1230);
  t.equal(obj.bar, 4560);
  t.equal(obj.yo, 'yolo');
});

test('setting a deep path', function (t) {
  var data = {
    title: 'My Products',
    products: {
      apples: 789,
      eggs: [{ kind: 'white', amount: 300 }, { kind: 'brown', amount: 200 }],
      bananas: 150,
      oranges: ['washington']
    }
  };

  set(data, 'products.eggs[0].kind', 'bird');
  set(data, 'products.eggs[0].amount', 250);
  set(data, 'products.veggies.tomatoes', ['cherry']);
  set(data, 'products.veggies.potatoes', 210);
  set(data, 'products.oranges[0]', 'finike');

  t.plan(10);
  t.equal(data.title, 'My Products');
  t.equal(data.products.eggs[0].kind, 'bird');
  t.equal(data.products.eggs[0].amount, 250);
  t.equal(data.products.eggs[1].kind, 'brown');
  t.equal(data.products.eggs[1].amount, 200);
  t.equal(data.products.apples, 789);
  t.equal(data.products.bananas, 150);
  t.equal(data.products.veggies.tomatoes[0], 'cherry');
  t.equal(data.products.veggies.potatoes, 210);
  t.equal(data.products.oranges[0], 'finike');
});

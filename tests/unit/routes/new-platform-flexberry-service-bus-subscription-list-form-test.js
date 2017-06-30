import { moduleFor, test } from 'ember-qunit';

const moduleName = 'new-platform-flexberry-service-bus-subscription-list-form';

moduleFor(`route:${moduleName}`, `Unit | Route | ${moduleName}`, {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

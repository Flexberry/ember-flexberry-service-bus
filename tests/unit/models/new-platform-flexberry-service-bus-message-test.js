import { moduleForModel, test } from 'ember-qunit';

const modelName = 'new-platform-flexberry-service-bus-message';

moduleForModel(modelName, `Unit | Model | ${modelName}`, {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-flexberry-service-bus-bus',
    'model:new-platform-flexberry-service-bus-client',
    'model:new-platform-flexberry-service-bus-message-type',
    'model:new-platform-flexberry-service-bus-message',
    'model:new-platform-flexberry-service-bus-sending-permission',
    'model:new-platform-flexberry-service-bus-statistics-compression-setting',
    'model:new-platform-flexberry-service-bus-statistics-monitor',
    'model:new-platform-flexberry-service-bus-statistics-record',
    'model:new-platform-flexberry-service-bus-statistics-setting',
    'model:new-platform-flexberry-service-bus-subscription-statistics-monitor',
    'model:new-platform-flexberry-service-bus-subscription'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

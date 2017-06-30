import { moduleForModel, test } from 'ember-qunit';

const modelName = 'new-platform-flexberry-service-bus-bus';

moduleForModel(modelName, `Unit | Serializer | ${modelName}`, {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-flexberry-service-bus-bus',
    'transform:file',
    'transform:decimal',

    'transform:new-platform-flexberry-service-bus-statistics-interval',
    'transform:new-platform-flexberry-service-bus-time-unit',
    'transform:new-platform-flexberry-service-bus-transport-type',

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

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

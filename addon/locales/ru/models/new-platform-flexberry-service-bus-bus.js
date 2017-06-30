export default {
  projections: {
    AuditView: {
      managerAddress: {
        caption: 'Manager address'
      },
      iD: {
        caption: 'ID'
      },
      name: {
        caption: 'Name'
      },
      address: {
        caption: 'Address'
      },
      dnsIdentity: {
        caption: 'Dns identity'
      },
      description: {
        caption: 'Description'
      },
      subscriptions: {
        caption: 'Subscriptions',
        description: {
          caption: 'Description'
        },
        expiryDate: {
          caption: 'Expiry date'
        },
        isCallback: {
          caption: 'Is callback'
        },
        transportType: {
          caption: 'Transport type'
        },
        messageType: {
          caption: 'Message type',
          iD: {
            caption: 'ID'
          }
        }
      }
    },
    EditView: {
      iD: {
        caption: 'ID'
      },
      name: {
        caption: 'Name'
      },
      managerAddress: {
        caption: 'Manager address'
      },
      address: {
        caption: 'Address'
      },
      dnsIdentity: {
        caption: 'DNS Identity'
      },
      description: {
        caption: 'Description'
      },
      subscriptions: {
        caption: 'Subscriptions',
        isCallback: {
          caption: 'Callback'
        },
        messageType: {
          caption: 'Message type',
          name: {
            caption: ''
          }
        },
        expiryDate: {
          caption: 'Expiry date'
        },
        transportType: {
          caption: 'Transport type'
        },
        client: {
          caption: ''
        }
      }
    },
    ListView: {
      iD: {
        caption: 'ID'
      },
      name: {
        caption: 'Name'
      },
      managerAddress: {
        caption: 'Manager address'
      }
    }
  }
};

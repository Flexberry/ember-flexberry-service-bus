export default {
  projections: {
    AuditView: {
      iD: {
        __caption__: 'ID'
      },
      name: {
        __caption__: 'Name'
      },
      address: {
        __caption__: 'Address'
      },
      dnsIdentity: {
        __caption__: 'Dns identity'
      },
      description: {
        __caption__: 'Description'
      },
      sendingPermissions: {
        __caption__: 'Sending permissions',
        messageType: {
          __caption__: 'Message type',
          iD: {
            __caption__: 'ID'
          }
        }
      },
      subscriptions: {
        __caption__: 'Subscriptions',
        description: {
          __caption__: 'Description'
        },
        expiryDate: {
          __caption__: 'Expiry date'
        },
        isCallback: {
          __caption__: 'Is callback'
        },
        transportType: {
          __caption__: 'Transport type'
        },
        messageType: {
          __caption__: 'Message type',
          iD: {
            __caption__: 'ID'
          }
        }
      }
    },
    EditView: {
      iD: {
        __caption__: 'ID'
      },
      name: {
        __caption__: 'Name'
      },
      address: {
        __caption__: 'Address'
      },
      dnsIdentity: {
        __caption__: 'DNS Identity'
      },
      description: {
        __caption__: 'Description'
      },
      connectionsLimit: {
        __caption__: 'Connections limit'
      },
      sequentialSent: {
        __caption__: 'Sequential sent'
      },
      subscriptions: {
        __caption__: 'Subscriptions',
        isCallback: {
          __caption__: 'Callback'
        },
        messageType: {
          __caption__: 'Message type',
          name: {
            __caption__: ''
          }
        },
        expiryDate: {
          __caption__: 'Expiry date'
        },
        transportType: {
          __caption__: 'Transport type'
        },
        client: {
          __caption__: ''
        }
      },
      sendingPermissions: {
        __caption__: 'Sending permissions',
        messageType: {
          __caption__: 'Message type',
          name: {
            __caption__: ''
          }
        },
        client: {
          __caption__: ''
        }
      }
    },
    ListView: {
      iD: {
        __caption__: 'ID'
      },
      name: {
        __caption__: 'Name'
      },
      address: {
        __caption__: 'Address'
      }
    },
    LookupView: {
      iD: {
        __caption__: 'ID'
      },
      name: {
        __caption__: 'Name'
      }
    }
  }
};

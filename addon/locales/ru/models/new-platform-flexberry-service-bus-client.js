export default {
  projections: {
    AuditView: {
      iD: {
        __caption__: 'Идентификатор'
      },
      name: {
        __caption__: 'Имя'
      },
      address: {
        __caption__: 'Адрес'
      },
      dnsIdentity: {
        __caption__: 'Dns identity'
      },
      description: {
        __caption__: 'Описание'
      },
      sendingPermissions: {
        __caption__: 'Разрешения на отправку',
        messageType: {
          __caption__: 'Тип сообщения',
          iD: {
            __caption__: 'Идентификатор'
          }
        }
      },
      subscriptions: {
        __caption__: 'Подписки',
        description: {
          __caption__: 'Описание'
        },
        expiryDate: {
          __caption__: 'Срок действия'
        },
        isCallback: {
          __caption__: 'Callback'
        },
        transportType: {
          __caption__: 'Способ передачи'
        },
        messageType: {
          __caption__: 'Тип сообщения',
          iD: {
            __caption__: 'Идентификатор'
          }
        }
      }
    },
    EditView: {
      iD: {
        __caption__: 'Идентификатор'
      },
      name: {
        __caption__: 'Имя'
      },
      address: {
        __caption__: 'Адрес'
      },
      dnsIdentity: {
        __caption__: 'DNS Identity'
      },
      description: {
        __caption__: 'Описание'
      },
      subscriptions: {
        __caption__: 'Подписки',
        isCallback: {
          __caption__: 'Callback'
        },
        messageType: {
          __caption__: 'Тип сообщения',
          name: {
            __caption__: ''
          }
        },
        expiryDate: {
          __caption__: 'Срок действия'
        },
        transportType: {
          __caption__: 'Способ передачи'
        },
        client: {
          __caption__: ''
        }
      },
      sendingPermissions: {
        __caption__: 'Разрешения на отправку',
        messageType: {
          __caption__: 'Тип сообщения',
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
        __caption__: 'Идентификатор'
      },
      name: {
        __caption__: 'Имя'
      },
      address: {
        __caption__: 'Адрес'
      }
    },
    LookupView: {
      iD: {
        __caption__: 'Идентификатор'
      },
      name: {
        __caption__: 'Имя'
      }
    }
  }
};

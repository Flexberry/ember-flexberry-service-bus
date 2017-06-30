export default {
  projections: {
    AuditView: {
      iD: {
        caption: 'Идентификатор'
      },
      name: {
        caption: 'Имя'
      },
      address: {
        caption: 'Адрес'
      },
      dnsIdentity: {
        caption: 'Dns identity'
      },
      description: {
        caption: 'Описание'
      },
      sendingPermissions: {
        caption: 'Разрешения на отправку',
        messageType: {
          caption: 'Тип сообщения',
          iD: {
            caption: 'Идентификатор'
          }
        }
      },
      subscriptions: {
        caption: 'Подписки',
        description: {
          caption: 'Описание'
        },
        expiryDate: {
          caption: 'Срок действия'
        },
        isCallback: {
          caption: 'Callback'
        },
        transportType: {
          caption: 'Способ передачи'
        },
        messageType: {
          caption: 'Тип сообщения',
          iD: {
            caption: 'Идентификатор'
          }
        }
      }
    },
    EditView: {
      iD: {
        caption: 'Идентификатор'
      },
      name: {
        caption: 'Имя'
      },
      address: {
        caption: 'Адрес'
      },
      dnsIdentity: {
        caption: 'DNS Identity'
      },
      description: {
        caption: 'Описание'
      },
      subscriptions: {
        caption: 'Подписки',
        isCallback: {
          caption: 'Callback'
        },
        messageType: {
          caption: 'Тип сообщения',
          name: {
            caption: ''
          }
        },
        expiryDate: {
          caption: 'Срок действия'
        },
        transportType: {
          caption: 'Способ передачи'
        },
        client: {
          caption: ''
        }
      },
      sendingPermissions: {
        caption: 'Разрешения на отправку',
        messageType: {
          caption: 'Тип сообщения',
          name: {
            caption: ''
          }
        },
        client: {
          caption: ''
        }
      }
    },
    ListView: {
      iD: {
        caption: 'Идентификатор'
      },
      name: {
        caption: 'Имя'
      },
      address: {
        caption: 'Адрес'
      }
    },
    LookupView: {
      iD: {
        caption: 'Идентификатор'
      },
      name: {
        caption: 'Имя'
      }
    }
  }
};

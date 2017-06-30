export default {
  projections: {
    AuditView: {
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
    },
    DetailView: {
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
    EditView: {
      client: {
        caption: 'Клиент',
        name: {
          caption: ''
        }
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
      description: {
        caption: 'Описание'
      },
      isCallback: {
        caption: 'Callback'
      },
      transportType: {
        caption: 'Способ передачи'
      }
    },
    ListView: {
      isCallback: {
        caption: 'Callback'
      },
      client: {
        caption: '',
        name: {
          caption: 'Клиент'
        }
      },
      messageType: {
        caption: '',
        name: {
          caption: 'Тип сообщения'
        }
      },
      expiryDate: {
        caption: 'Срок действия'
      },
      transportType: {
        caption: 'Способ передачи'
      }
    },
    LookupView: {
      isCallback: {
        caption: 'Callback'
      },
      description: {
        caption: 'Описание'
      },
      expiryDate: {
        caption: 'Срок действия'
      },
      transportType: {
        caption: 'Способ передачи'
      },
      client: {
        caption: '',
        iD: {
          caption: ''
        },
        name: {
          caption: ''
        }
      },
      messageType: {
        caption: '',
        iD: {
          caption: ''
        },
        name: {
          caption: ''
        }
      }
    }
  }
};

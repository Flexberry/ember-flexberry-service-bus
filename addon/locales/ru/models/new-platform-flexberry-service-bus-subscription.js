export default {
  projections: {
    AuditView: {
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
    },
    DetailView: {
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
    EditView: {
      client: {
        __caption__: 'Клиент',
        name: {
          __caption__: ''
        }
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
      description: {
        __caption__: 'Описание'
      },
      isCallback: {
        __caption__: 'Callback'
      },
      transportType: {
        __caption__: 'Способ передачи'
      }
    },
    ListView: {
      isCallback: {
        __caption__: 'Callback'
      },
      client: {
        __caption__: '',
        name: {
          __caption__: 'Клиент'
        }
      },
      messageType: {
        __caption__: '',
        name: {
          __caption__: 'Тип сообщения'
        }
      },
      expiryDate: {
        __caption__: 'Срок действия'
      },
      transportType: {
        __caption__: 'Способ передачи'
      }
    },
    LookupView: {
      isCallback: {
        __caption__: 'Callback'
      },
      description: {
        __caption__: 'Описание'
      },
      expiryDate: {
        __caption__: 'Срок действия'
      },
      transportType: {
        __caption__: 'Способ передачи'
      },
      client: {
        __caption__: '',
        iD: {
          __caption__: ''
        },
        name: {
          __caption__: ''
        }
      },
      messageType: {
        __caption__: '',
        iD: {
          __caption__: ''
        },
        name: {
          __caption__: ''
        }
      }
    }
  }
};

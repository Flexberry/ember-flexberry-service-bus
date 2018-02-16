export default {
  projections: {
    AuditView: {
      number: {
        __caption__: 'Номер'
      },
      category: {
        __caption__: 'Категория'
      },
      name: {
        __caption__: 'Имя'
      },
      subscription: {
        __caption__: 'Подписка',
        description: {
          __caption__: 'Описание'
        }
      }
    },
    DetailView: {
      number: {
        __caption__: 'Номер'
      },
      name: {
        __caption__: 'Имя'
      },
      category: {
        __caption__: 'Категория'
      },
      subscription: {
        __caption__: 'Подписка',
        description: {
          __caption__: ''
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
      },
      statisticsMonitor: {
        __caption__: ''
      }
    }
  }
};

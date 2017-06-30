export default {
  projections: {
    AuditView: {
      number: {
        caption: 'Номер'
      },
      category: {
        caption: 'Категория'
      },
      name: {
        caption: 'Имя'
      },
      subscription: {
        caption: 'Подписка',
        description: {
          caption: 'Описание'
        }
      }
    },
    DetailView: {
      number: {
        caption: 'Номер'
      },
      name: {
        caption: 'Имя'
      },
      category: {
        caption: 'Категория'
      },
      subscription: {
        caption: 'Подписка',
        description: {
          caption: ''
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
      },
      statisticsMonitor: {
        caption: ''
      }
    }
  }
};

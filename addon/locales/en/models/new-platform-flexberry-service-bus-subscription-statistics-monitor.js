export default {
  projections: {
    AuditView: {
      number: {
        caption: 'Number'
      },
      category: {
        caption: 'Category'
      },
      name: {
        caption: 'Name'
      },
      subscription: {
        caption: 'Subscription',
        description: {
          caption: 'Description'
        }
      }
    },
    DetailView: {
      number: {
        caption: 'Number'
      },
      name: {
        caption: 'Name'
      },
      category: {
        caption: 'Category'
      },
      subscription: {
        caption: 'Subscription',
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

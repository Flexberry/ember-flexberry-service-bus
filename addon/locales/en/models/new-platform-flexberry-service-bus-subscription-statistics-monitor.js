export default {
  projections: {
    AuditView: {
      number: {
        __caption__: 'Number'
      },
      category: {
        __caption__: 'Category'
      },
      name: {
        __caption__: 'Name'
      },
      subscription: {
        __caption__: 'Subscription',
        description: {
          __caption__: 'Description'
        }
      }
    },
    DetailView: {
      number: {
        __caption__: 'Number'
      },
      name: {
        __caption__: 'Name'
      },
      category: {
        __caption__: 'Category'
      },
      subscription: {
        __caption__: 'Subscription',
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

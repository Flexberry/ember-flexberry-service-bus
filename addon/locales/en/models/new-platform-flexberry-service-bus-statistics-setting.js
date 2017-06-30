export default {
  projections: {
    AuditView: {
      subscription: {
        caption: 'Subscription',
        description: {
          caption: 'Description'
        }
      },
      statisticsCompressionSetting: {
        caption: 'Statistics compression setting',
        compressTo: {
          caption: 'Compress to'
        },
        statisticsAgeCount: {
          caption: 'Statistics age count'
        },
        statisticsAgeUnits: {
          caption: 'Statistics age units'
        },
        statisticsAge: {
          caption: 'Statistics age'
        },
        compressFrequencyCount: {
          caption: 'Compress frequency count'
        },
        compressFrequencyUnits: {
          caption: 'Compress frequency units'
        },
        compressFrequency: {
          caption: 'Compress frequency'
        },
        nextCompressTime: {
          caption: 'Next compress time'
        },
        lastCompressTime: {
          caption: 'Last compress time'
        }
      }
    },
    EditView: {
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
      statisticsCompressionSetting: {
        caption: 'Statistics compression settings',
        compressTo: {
          caption: 'Compress to interval'
        },
        statisticsAgeCount: {
          caption: 'Compress older than'
        },
        statisticsAgeUnits: {
          caption: ''
        },
        compressFrequencyCount: {
          caption: 'Compress frequency'
        },
        compressFrequencyUnits: {
          caption: ''
        },
        nextCompressTime: {
          caption: 'Time of next compression'
        },
        lastCompressTime: {
          caption: 'Time of last compression'
        },
        statisticsSetting: {
          caption: ''
        }
      },
      statisticsRecord: {
        caption: 'Statistics records',
        since: {
          caption: 'Start interval'
        },
        to: {
          caption: 'End interval'
        },
        statisticsInterval: {
          caption: 'Interval'
        },
        sentCount: {
          caption: 'Messages sent'
        },
        receivedCount: {
          caption: 'Messages received'
        },
        errorsCount: {
          caption: 'Errors (including repeated)'
        },
        uniqueErrorsCount: {
          caption: 'Unique errors (without repeated)'
        },
        statisticsSetting: {
          caption: ''
        }
      }
    },
    ListView: {
      subscription: {
        caption: '',
        description: {
          caption: 'Subscription'
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
  }
};

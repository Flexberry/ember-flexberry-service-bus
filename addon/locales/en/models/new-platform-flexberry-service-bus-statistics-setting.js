export default {
  projections: {
    AuditView: {
      subscription: {
        __caption__: 'Subscription',
        description: {
          __caption__: 'Description'
        }
      },
      statisticsCompressionSetting: {
        __caption__: 'Statistics compression setting',
        compressTo: {
          __caption__: 'Compress to'
        },
        statisticsAgeCount: {
          __caption__: 'Statistics age count'
        },
        statisticsAgeUnits: {
          __caption__: 'Statistics age units'
        },
        statisticsAge: {
          __caption__: 'Statistics age'
        },
        compressFrequencyCount: {
          __caption__: 'Compress frequency count'
        },
        compressFrequencyUnits: {
          __caption__: 'Compress frequency units'
        },
        compressFrequency: {
          __caption__: 'Compress frequency'
        },
        nextCompressTime: {
          __caption__: 'Next compress time'
        },
        lastCompressTime: {
          __caption__: 'Last compress time'
        }
      }
    },
    EditView: {
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
      statisticsCompressionSetting: {
        __caption__: 'Statistics compression settings',
        compressTo: {
          __caption__: 'Compress to interval'
        },
        statisticsAgeCount: {
          __caption__: 'Compress older than'
        },
        statisticsAgeUnits: {
          __caption__: ''
        },
        compressFrequencyCount: {
          __caption__: 'Compress frequency'
        },
        compressFrequencyUnits: {
          __caption__: ''
        },
        nextCompressTime: {
          __caption__: 'Time of next compression'
        },
        lastCompressTime: {
          __caption__: 'Time of last compression'
        },
        statisticsSetting: {
          __caption__: ''
        }
      },
      statisticsRecord: {
        __caption__: 'Statistics records',
        since: {
          __caption__: 'Start interval'
        },
        to: {
          __caption__: 'End interval'
        },
        statisticsInterval: {
          __caption__: 'Interval'
        },
        sentCount: {
          __caption__: 'Messages sent'
        },
        receivedCount: {
          __caption__: 'Messages received'
        },
        errorsCount: {
          __caption__: 'Errors (including repeated)'
        },
        uniqueErrorsCount: {
          __caption__: 'Unique errors (without repeated)'
        },
        statisticsSetting: {
          __caption__: ''
        }
      }
    },
    ListView: {
      subscription: {
        __caption__: '',
        description: {
          __caption__: 'Subscription'
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
  }
};

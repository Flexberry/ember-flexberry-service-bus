export default {
  projections: {
    AuditView: {
      subscription: {
        __caption__: 'Подписка',
        description: {
          __caption__: 'Описание'
        }
      },
      statisticsCompressionSetting: {
        __caption__: 'Настройка сжатия статистики',
        compressTo: {
          __caption__: 'Сжимать до'
        },
        statisticsAgeCount: {
          __caption__: 'Сжимать старше чем (количество)'
        },
        statisticsAgeUnits: {
          __caption__: 'Сжимать старше чем (еденицы)'
        },
        statisticsAge: {
          __caption__: 'Сжимать старше чем'
        },
        compressFrequencyCount: {
          __caption__: 'Частота сжатия (количество)'
        },
        compressFrequencyUnits: {
          __caption__: 'Частота сжатия (еденицы)'
        },
        compressFrequency: {
          __caption__: 'Частота сжатия'
        },
        nextCompressTime: {
          __caption__: 'Время следующего сжатия'
        },
        lastCompressTime: {
          __caption__: 'Время последнего сжатия'
        }
      }
    },
    EditView: {
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
      statisticsCompressionSetting: {
        __caption__: 'Настройка сжатия статистики',
        compressTo: {
          __caption__: 'Сжимать до интервала'
        },
        statisticsAgeCount: {
          __caption__: 'Сжимать старше чем'
        },
        statisticsAgeUnits: {
          __caption__: ''
        },
        compressFrequencyCount: {
          __caption__: 'Частота сжатия'
        },
        compressFrequencyUnits: {
          __caption__: ''
        },
        nextCompressTime: {
          __caption__: 'Время следующего сжатия'
        },
        lastCompressTime: {
          __caption__: 'Время последнего сжатия'
        },
        statisticsSetting: {
          __caption__: ''
        }
      },
      statisticsRecord: {
        __caption__: 'Запись статистики',
        since: {
          __caption__: 'Начало интервала'
        },
        to: {
          __caption__: 'Конец интервала'
        },
        statisticsInterval: {
          __caption__: 'Интервал'
        },
        sentCount: {
          __caption__: 'Сообщений отправлено'
        },
        receivedCount: {
          __caption__: 'Сообщений получено'
        },
        errorsCount: {
          __caption__: 'Ошибки (включая повторные)'
        },
        uniqueErrorsCount: {
          __caption__: 'Уникальные ошибки (не включая повторные)'
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
          __caption__: 'Подписка'
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

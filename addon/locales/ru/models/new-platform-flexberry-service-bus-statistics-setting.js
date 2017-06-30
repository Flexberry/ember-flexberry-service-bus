export default {
  projections: {
    AuditView: {
      subscription: {
        caption: 'Подписка',
        description: {
          caption: 'Описание'
        }
      },
      statisticsCompressionSetting: {
        caption: 'Настройка сжатия статистики',
        compressTo: {
          caption: 'Сжимать до'
        },
        statisticsAgeCount: {
          caption: 'Сжимать старше чем (количество)'
        },
        statisticsAgeUnits: {
          caption: 'Сжимать старше чем (еденицы)'
        },
        statisticsAge: {
          caption: 'Сжимать старше чем'
        },
        compressFrequencyCount: {
          caption: 'Частота сжатия (количество)'
        },
        compressFrequencyUnits: {
          caption: 'Частота сжатия (еденицы)'
        },
        compressFrequency: {
          caption: 'Частота сжатия'
        },
        nextCompressTime: {
          caption: 'Время следующего сжатия'
        },
        lastCompressTime: {
          caption: 'Время последнего сжатия'
        }
      }
    },
    EditView: {
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
      statisticsCompressionSetting: {
        caption: 'Настройка сжатия статистики',
        compressTo: {
          caption: 'Сжимать до интервала'
        },
        statisticsAgeCount: {
          caption: 'Сжимать старше чем'
        },
        statisticsAgeUnits: {
          caption: ''
        },
        compressFrequencyCount: {
          caption: 'Частота сжатия'
        },
        compressFrequencyUnits: {
          caption: ''
        },
        nextCompressTime: {
          caption: 'Время следующего сжатия'
        },
        lastCompressTime: {
          caption: 'Время последнего сжатия'
        },
        statisticsSetting: {
          caption: ''
        }
      },
      statisticsRecord: {
        caption: 'Запись статистики',
        since: {
          caption: 'Начало интервала'
        },
        to: {
          caption: 'Конец интервала'
        },
        statisticsInterval: {
          caption: 'Интервал'
        },
        sentCount: {
          caption: 'Сообщений отправлено'
        },
        receivedCount: {
          caption: 'Сообщений получено'
        },
        errorsCount: {
          caption: 'Ошибки (включая повторные)'
        },
        uniqueErrorsCount: {
          caption: 'Уникальные ошибки (не включая повторные)'
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
          caption: 'Подписка'
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

const formatters = {
  minutes: [['minutes', 60], ['hours', 24], ['days', 365], ['years']],
  milliseconds: [
    ['milliseconds', 1000],
    ['seconds', 60],
    ['minutes', 60],
    ['hours', 24],
    ['days', 365],
    ['years']
  ],
  seconds: [
    ['seconds', 60],
    ['minutes', 60],
    ['hours', 24],
    ['days', 365],
    ['years']
  ],
  bytes: [
    ['bytes', 1024],
    ['kilobytes', 1024],
    ['megabytes', 1024],
    ['gigabytes', 1024],
    ['terabytes']
  ],
  kilobytes: [
    ['kilobytes', 1024],
    ['megabytes', 1024],
    ['gigabytes', 1024],
    ['terabytes']
  ]
}

module.exports = formatters

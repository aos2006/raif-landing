//При каждом запросе передается токен)

//POST NEWS(Список новстей для таблицы)
//Если пусто - []


//POST запрос на получение списка новостей
const newsParams = {
  page: 1,
}

const newsResp = {
  meta: {
    pageCount: 10,
  },
  data: {
    list: [
      { id: 1, title: '', timestamp: '', shortDescr: '', role: '', category: '', link: '', author: '' },
      { id: 1, title: '', timestamp: '', shortDescr: '', role: '', category: '', link: '', author: '' },
      { id: 1, title: '', timestamp: '', shortDescr: '', role: '', category: '', link: '', author: '' },
      { id: 1, title: '', timestamp: '', shortDescr: '', role: '', category: '', link: '', author: '' },
    ]
  }
}

//POST создание новости

const newsCreate = {
  title: '',
  language: '',
  category: '',
  shortDescr: '',
  descr: '',
  link: '',
}

//POST response после создания
// status 201
// моделька созданной новости

const newsCreateResp = {
  id: 1,
  title: '',
  language: '',
  category: '',
  shortDescr: '',
  descr: '',
  link: '',
}



//POST Login

const loginPostReq = {
  password: '',
  email: '', //or username
}

const loginPostResp = {
  token: 'aksdjfkasjdfkjaksd',
  perms: {
    dashboard: {
      read: false,
    },
    news: {
      read: false,
    },
    contacts: {
      read: false,
    },
    manual: {
      read: false,
    },
    billing: {
      read: false
    },
    mbr: {
      read: false,
    }
  }
}
//Ну или я могу за правами сделать отдельный запрос

//Perms settings

const permsGetResponse = {
  data: {
    list: [
      { id: 1, value: 'Мега админ' },
      { id: 1, value: 'Мега админ' },
      { id: 1, value: 'Мега админ' },
    ]
  }
}


const setPermsSettings = {
  role: 1,
  sections: [1, 2, 3, 4] //idS list
}


//Manual Creating

const manualPostReq = {
  project: 1, //id
  activity: 2, //id
  lines: [{ id: 1, value: 'Хрен знает линия' }]
}


const targetResources = {
  project: 1,
  activity: 1,
  line: 2,
  params: [
    {
      param: 1,
      value: 100,
    }
  ]
}

//Widgets
const gistogram = {
  row: 1,
  param: 1,
}

//Spidometr
const speedOmetr = {
  activity: 1,
  kpi: 1,
  targetKpi: 1,
}

//Small SpeedOmetr
const smallSpeeOmetr = {
  activity: 1,
  kpi: 1,
  targetKpi: 1,
}

const circleDiagram = {
  activity: 1,
  params: [1, 2, 4, 5]
}

const table = {
  activity: 1,
  size: 2//id,
}

const tablo = {
  activity: 1,
  param: 1,
}


//Files

const mbr = {
  year: '2017',
  files: []
}



//Scores

const scores = {
  year: '2017',
  files: [],
}

const contacts = {
  contacts: [
    { fio: '', tel: '', email: '' }
  ],
  smallPicture: {},
  fullPicture: {},
}




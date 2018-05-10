import { Router, Reducer } from 'modules/CrudGenerator'
import Projects from 'modules/Projects'
import { NewsCreate, columns } from 'modules/News'
import { MbrCreate, mbrColumns } from 'modules/Mbr'
import Contacts from 'modules/Contacts'
import Abbs from 'modules/Abbs';
import Kpi from 'modules/Kpi';
import Roles from 'modules/Roles';
import ProjectActivity from 'modules/ProjectActivity';
import TargetIndicator from 'modules/TargetIndicator';
import Histogram from 'modules/Histogram';
import RoundedDiagram from 'modules/RoundedDiagram';
import Table from 'modules/Table';
import Tablo from 'modules/Tablo';
import Speedometer from 'modules/Speedometer';

export default [
  {
    router: new Router({ prefix: 'news' }).addReducer(new Reducer({ name: 'news' }).all()).addCreateForm(NewsCreate),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: state => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
              author: item.author.username,
              category: item.category.title,
              role: item.role.title,
            })),
            columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Новость успешно удалена' }
        })
      })
    },
    create (store) {
      return this.router.createCreateRoute(
        {
          store,
          createAction: () => ({
            meta: {
              showNotify: true,
              title: 'Новость успешно создана',
            }
          })
        }
      )
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: state => {
          return {
            initialValues: {
              ...state.getIn(['update', 'initialValues']),
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Новость успешно обновлена',
          },
        }),
      })
    }
  },
  {
    router: new Router({ prefix: 'mbr' }).addReducer(new Reducer({ name: 'mbr' }).all()).addCreateForm(MbrCreate),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
              project: item.project.title,
            })),
            columns: mbrColumns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Mbr успешно удалено' }
        })
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          project: null,
          year: null,
          files: [],
        }),
        stateGetter: (state, rootState) => {
          return {
            projects: Projects.selectors.getList(rootState[Projects.types.NAME]),
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Mbr успешно создано',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            projects: Projects.selectors.getList(rootState[Projects.types.NAME]),
            initialValues: {
              files: [{ fileName: 'test.png', id: 1, fileUrl: 'http://ya.ru' }],
              year: 1920,
              // project: Projects.selectors.getList(rootState[Projects.types.NAME])[0].id,
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Mbr успешно обновлено',
          },
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'contact' }).addReducer(new Reducer({ name: 'contact' }).all()).addCreateForm(Contacts.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Contacts.columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Контакт успешно удален' }
        })
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: '',
          rows: [
            { fio: '', position: '', phone: '', email: '' }
          ],
          files: [],
        }),
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Контакт успешно создан',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              ...state.getIn(['update', 'initialValues'])
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Контакт успешно обновлен',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'kpi' }).addReducer(new Reducer({ name: 'kpi', listKey: 'objects' }).all()).addCreateForm(Kpi.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Kpi.columns,
          }
        },
        fetchAction: () => ({
          url: 'handBook/getList',
          data: {
            handbookType: 'kpi',
          }
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Kpi успешно удален' }
        })
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: '',
          kpi: '',
        }),
        createAction: () => ({
          url: 'handBook/save',
          meta: {
            showNotify: true,
            title: 'Kpi успешно создан',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              ...state.getIn(['update', 'initialValues'])
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Kpi успешно обновлен',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'roles' }).addReducer(new Reducer({
      name: 'roles',
    }).all()).addCreateForm(Roles.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Roles.columns,
          }
        },
        fetchAction: () => ({
          url: 'roles/list',
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Kpi успешно удален' }
        }),
        actionsGetter: actions => ({
          ...actions,
          setPermissions: Roles.actions.setPermissions,
        })
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: '',
        }),
        createAction: () => ({
          url: 'roles/setTitle',
          meta: {
            showNotify: true,
            title: 'Роль успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              title: state.getIn(['update', 'initialValues']).title,
            }
          }
        },
        createAction: () => ({
          url: 'roles/setTitle',
          meta: {
            showNotify: true,
            title: 'Название роли успешно обновлено',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'projectActivity' }).addReducer(new Reducer({
      name: 'projectActivity',
      listKey: 'objects',
    }).all()).addCreateForm(ProjectActivity.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: ProjectActivity.columns,
          }
        },
        fetchAction: () => ({
          url: 'projectActivityLine/getList',
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Линия успешно удалена' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          activity: '',
          project: '',
          lines: [{ line: '' }],
        }),
        createAction: () => ({
          url: 'projectActivityLine/save',
          meta: {
            showNotify: true,
            title: 'Линия успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              project: null,
              activity: 1,
              lines: [{ line: 3 }, { line: 1 }, { line: 1 }]
            }
          }
        },
        createAction: () => ({
          url: 'projectActivityLine/save',
          meta: {
            showNotify: true,
            title: 'Линия успешно обновлена',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'targetIndicator' }).addReducer(new Reducer({
      name: 'targetIndicator',
      listKey: 'objects',
    }).all()).addCreateForm(TargetIndicator.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: TargetIndicator.columns,
          }
        },
        fetchAction: () => ({
          url: 'targetIndicator/getList',
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Индикатор успешно удален' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        dataProccesor: data => {
          console.log(data);
          return data;
        },
        getInitialValues: () => ({
          project: null,
          activity: null,
          line: null,
          params: [{ param: null, value: null }]
        }),
        createAction: () => ({
          url: 'targetIndicator/save',
          meta: {
            showNotify: true,
            title: 'Индикатор успешно добавлен',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              project: null,
              activity: 1,
              line: 1,
              params: [{ param: 1, value: '100' }]
            }
          }
        },
        createAction: () => ({
          url: 'targetIndicator/save',
          meta: {
            showNotify: true,
            title: 'Индикатор успешно обновлен',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'histogram' }).addReducer(new Reducer({
      name: 'histogram',
      listKey: 'objects',
    }).all()).addCreateForm(Histogram.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Histogram.columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Гистрограмма успешно удалена' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          activity: null,
          row: null,
          param: null,
        }),
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Гистограмма успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              activity: 1,
              title: 'anton',
              row: 2,
              param: 2,
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Индикатор успешно обновлен',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'abbreviation' }).addReducer(new Reducer({
      name: 'abbreviation',
      listKey: 'objects',
    }).all()).addCreateForm(Abbs.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Abbs.columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Аббревиатура успешно удалена' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          parameter: '',
          title: {
            en: '',
            ru: '',
          }
        }),
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Аббревиатура успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              parameter: 'Param',
              title: {
                en: 'Param',
                ru: 'Парам',
              }
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Аббревиатура успешно обновлена',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'roundedDiagram' }).addReducer(new Reducer({
      name: 'roundedDiagram',
      listKey: 'objects',
    }).all()).addCreateForm(RoundedDiagram.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: RoundedDiagram.columns,
          }
        },
        fetchAction: () => ({
          url: 'rounded-diagram/getList',
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Круговая диагрмма успешно удалена' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: null,
          activity: null,
          tablo: 1,
          kpi: null,
          params: [1, 1, 1, 1]
        }),
        createAction: () => ({
          url: 'rounded-diagram/save',
          meta: {
            showNotify: true,
            title: 'Курговая диаграмма успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              title: 'Круговая диаграмма 1',
              activity: 1,
              tablo: 1,
              kpi: 1,
              params: [1, 1, 1, 1]
            }
          }
        },
        createAction: () => ({
          url: 'rounded-diagram/save',
          meta: {
            showNotify: true,
            title: 'Курговая диаграмма успешно обновлена',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'table' }).addReducer(new Reducer({
      name: 'table',
      listKey: 'objects',
    }).all()).addCreateForm(Table.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Table.columns,
          }
        },
        fetchAction: () => ({
          url: 'table/getList',
        }),
        removeAction: () => ({
          meta: { showNotify: true, title: 'Таблица успешно удалена' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: null,
          activity: null,
          size: 1,
          params: [1, 2],
          targetParams: [1, 2]
        }),
        createAction: () => ({
          url: 'table/save',
          meta: {
            showNotify: true,
            title: 'Таблица успешно добавлена',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              title: 'Таблица 1',
              activity: 1,
              size: 2,
              params: [2, 1],
              targetParams: [2, 1]
            }
          }
        },
        createAction: () => ({
          url: 'table/save',
          meta: {
            showNotify: true,
            title: 'Таблица успешно обновлена',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'tablo' }).addReducer(new Reducer({
      name: 'tablo',
      listKey: 'objects',
    }).all()).addCreateForm(Tablo.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Tablo.columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Табло успешно удалено' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: null,
          activity: null,
          param: null,
        }),
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Табло успешно добавлено',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              title: 'Табло 1',
              activity: 1,
              param: 2,
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Табло успешно обновлено',
          }
        })
      })
    }
  },
  {
    router: new Router({ prefix: 'speedometerBig' }).addReducer(new Reducer({
      name: 'speedometerBig',
      listKey: 'objects',
    }).all()).addCreateForm(Tablo.Create),
    list (store) {
      return this.router.createListRoute({
        store,
        stateGetter: (state) => {
          return {
            list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
              ...item,
            })),
            columns: Tablo.columns,
          }
        },
        removeAction: () => ({
          meta: { showNotify: true, title: 'Табло успешно удалено' }
        }),
      })
    },
    create (store) {
      return this.router.createCreateRoute({
        store,
        getInitialValues: () => ({
          title: null,
          activity: null,
          param: null,
        }),
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Табло успешно добавлено',
          }
        })
      })
    },
    update (store) {
      return this.router.createUpdateRoute({
        store,
        stateGetter: (state, rootState) => {
          return {
            initialValues: {
              title: 'Табло 1',
              activity: 1,
              param: 2,
            }
          }
        },
        createAction: () => ({
          meta: {
            showNotify: true,
            title: 'Табло успешно обновлено',
          }
        })
      })
    }
  }
]

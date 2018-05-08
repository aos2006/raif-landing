import { Router, Reducer } from 'modules/CrudGenerator'
import Projects from 'modules/Projects'
import { NewsCreate, columns } from 'modules/News'
import { MbrCreate, mbrColumns } from 'modules/Mbr'
import Contacts from 'modules/Contacts'
import Abbs from 'modules/Abbs';
import Kpi from 'modules/Kpi';
import Roles from 'modules/Roles';

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
              year: `${state.getIn(['update', 'initialValues']).year}`,
              project: Projects.selectors.getList(rootState[Projects.types.NAME])[0].id,
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
  }

]

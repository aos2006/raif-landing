import React from 'react'
import List from '../components/List/List'
import Update from '../components/Update/Update'
import Create from '../components/Create/Create'
import { injectReducer } from '../../../store/reducers'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Routes {
  constructor (settings) {
    this.settings = settings
  }

  createListRoute ({
                     store,
                     stateGetter = state => state,
                     actionsGetter = () => ({}),
                     removeAction,
                     fetchAction = () => ({})
  }) {
    const { prefix, reducer } = this.settings

    return {
      path: `${prefix}/list`,
      getComponent (nextState, cb) {
        injectReducer(store, { key: prefix, reducer })
        cb(null, connect(state => {
          return {
            createPath: `/${prefix}/create`,
            viewPath: `/${prefix}`,
            updatePath: `/${prefix}/update`,
            isLoading: state[prefix].get('isLoading'),
            isLoaded: state[prefix].get('isLoaded'),
            ...stateGetter(state[prefix]),
          }
        }, {
          fetchList: (page) => actions.fetchList({
            type: `${prefix}_request_start`,
            name: prefix,
            url: `${prefix}/getList`,
            page,
            ...fetchAction(),
          }),
          remove: (col) => actions.deleteObj({
            type: `${prefix}_delete_request_start`,
            name: `${prefix}_delete`,
            url: `${prefix}/getSingle`,
            data: { id: col.id },
            meta: { showNotify: true, title: 'Контакт успешно удален' },
            ...removeAction(),
          }),
          ...actionsGetter({
            ...actions,
            fetchList: (page) => actions.fetchList({
              type: `${prefix}_request_start`,
              name: prefix,
              url: `${prefix}/getList`,
              page,
              ...fetchAction(),
            }),
            remove: (col) => actions.deleteObj({
              type: `${prefix}_delete_request_start`,
              name: `${prefix}_delete`,
              url: `${prefix}/getSingle`,
              data: { id: col.id },
              meta: { showNotify: true, title: 'Контакт успешно удален' },
              ...removeAction(),
            }),
          })
        })(List))
      }
    }
  }

  addReducer (reducer) {
    return new Routes({
      ...this.settings,
      reducer
    })
  }

  addCreateForm (form) {
    return new Routes({
      ...this.settings,
      createForm: form,
    })
  }

  createUpdateRoute ({
    store,
    dataProccesor,
    stateGetter,
    actionsGetter = () => ({}),
    createAction,
    getSingleAction = () => ({ meta: { showNotify: false } }),
                     }) {
    const { prefix, reducer, createForm } = this.settings;

    return {
      path: `${prefix}/update/:id`,
      getComponent (nextState, cb) {
        injectReducer(store, { key: prefix, reducer })
        cb(null, connect(
          state => {
            return {
              dataProccesor,
              form: createForm,
              isLoading: state[prefix].getIn(['create', 'isLoading']),
              btnLabel: 'Cохранить',
              ...stateGetter(state[prefix], state),
            }
          },
          {
            create: data => actions.create({
              type: `${prefix}_create_request_start`,
              name: `${prefix}_create`,
              meta: {
                showNotify: true,
                title: 'Контакт успешно обновлен',
              },
              url: `${prefix}/save`,
              data,
              ...createAction(data),
            }),
            getSingle: data => actions.getSingle({
              type: `${prefix}_single_request_start`,
              name: `${prefix}_single`,
              meta: {
                showNotify: false,
              },
              url: `${prefix}/getSingle`,
              data: {
                id: data.id,
              },
              ...getSingleAction(data),
            }),
            ...actionsGetter(actions)
          })(Update))
      }
    }

  }

  createCreateRoute ({
    dataProccesor,
    store,
    stateGetter = state => ({}),
    getInitialValues = () => ({}),
    actionsGetter = () => ({}),
    getSingleAction = () => ({ showNotify: false }),
    createAction,
                    }) {
    const { prefix, reducer, createForm } = this.settings

    return {
      path: `${prefix}/create`,
      getComponent (nextState, cb) {
        injectReducer(store, { key: prefix, reducer })
        console.log(getInitialValues());
        cb(null, connect(
          state => {
            return {
              form: createForm,
              dataProccesor,
              isLoading: state[prefix].getIn(['create', 'isLoading']),
              initialValues: {
                ...getInitialValues()
              },
              ...stateGetter(state[prefix], state),
            }
          },
          {
            create: data => actions.create({
              type: `${prefix}_create_request_start`,
              name: `${prefix}_create`,
              meta: {
                showNotify: true,
                title: 'Контакт успешно обновлен',
              },
              url: `${prefix}/save`,
              data,
              ...createAction(),
            }),
            getSingle: data => actions.getSingle({
              type: `${prefix}_single_request_start`,
              name: `${prefix}_single`,
              meta: {
                showNotify: false,
              },
              url: `${prefix}/getSingle`,
              data: {
                id: data.id,
              },
              ...getSingleAction(),
            }),
            ...actionsGetter(actions)
          })(Create))
      }
    }
  }
}

export default Routes

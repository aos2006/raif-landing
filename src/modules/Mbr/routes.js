import { Router, Reducer } from 'modules/CrudGenerator';
import * as types from './actionTypes';
import Create from './Create';
import columns from './columns';
import Projects from 'modules/Projects';

const reducers = new Reducer(
  { name: types.NAME }
).all();

const router = new Router({ prefix: types.NAME })
  .addReducer(reducers)
  .addCreateForm(Create)

const list = (store) => router.createListRoute({
  store,
  stateGetter: (state) => {
    return {
      list: state.get('result').map(id => state.get('entities')[id]).map(item => ({
        ...item,
        project: item.project.title,
      })),
      columns,
    }
  },
  actionsGetter: actions => {
    return {
      fetchList: (page) => actions.fetchList({
        type: 'mbr_request_start',
        name: 'mbr',
        url: 'mbr/getList',
        page
      }),
      remove: (col) => actions.deleteObj({
        type: 'mbr_delete_request_start',
        name: 'mbr_delete',
        url: 'news/getSingle',
        data: { newsId: col.id },
        meta: { showNotify: true, title: 'Mbr успешно удалено' }
      })
    }
  }
});

const create = (store) => router.createCreateRoute({
    store,
    stateGetter: (state, rootState) => {
      return {
        projects: Projects.selectors.getList(rootState[Projects.types.NAME]),
      }
    },
    actionsGetter: actions => ({
      create: data => actions.create({
        type: 'mbr_create_request_start',
        name: 'mbr_create',
        meta: {
          showNotify: true,
          title: 'Mbr успешно создано',
        },
        url: 'mbr/save',
        data,
      })
    })
  });


const update = (store) => router.createUpdateRoute({
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
    actionsGetter: actions => ({
      create: data => actions.create({
        type: 'mbr_create_request_start',
        name: 'mbr_create',
        meta: {
          showNotify: true,
          title: 'Mbr успешно обновлено',
        },
        url: 'mbr/save',
        data,
      }),
      getSingle: data => actions.getSingle({
        type: 'mbr_single_request_start',
        name: 'mbr_single',
        meta: {
          showNotify: false,
        },
        url: 'mbr/getSingle',
        data: {
          id: data.id,
        }
      })
    })
  });


export default [create, list, update];

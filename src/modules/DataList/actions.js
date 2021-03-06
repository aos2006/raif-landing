import * as constants from 'modules/constants'
import { calculateOffset } from '../utils'
import * as types from '../News/actionTypes'

export const fetchList = (page, type, url, name) => ({
  type,
  url: `${constants.API_URL}/${url}`,
  name,
  method: 'post',
  params: {
    body: {
      count: constants.PER_PAGE,
      offset: calculateOffset(page, constants.PER_PAGE),
    }
  }
})

export const deleteObj = ({
  type,
  name,
  url,
  meta,
  data,
                          }) => {
  return {
    type,
    name,
    url: `${constants.API_URL}/${url}`,
    meta,
    method: 'post',
    params: {
      body: { ...data }
    },
  }
}

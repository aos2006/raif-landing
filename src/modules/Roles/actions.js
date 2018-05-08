export const setPermissions = ({ roleId, permissionKey, allow }) => ({
  type: 'permission_request_start',
  name: 'permission',
  url: 'roles/setPermission',
  method: 'post',
  meta: {
    title: 'Права успешно измененны',
    showNotify: true,
  },
  params: {
    body: {
      roleId,
      permissionKey,
      allow
    }
  }
})


export const setTitle = ({ roleId, title }) => ({
  type: 'permission_role_request_start',
  name: 'permission_role',
  url: 'roles/setTitle',
  method: 'post',
  meta: {
    showNotify: true,
    title: 'Название роли успешно обновлено',
  },
  params: {
    body: {
      roleId,
      title,
    }
  }
})

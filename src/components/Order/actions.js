export const sendForm = (data) => ({
  type: 'order_request_start',
  name: 'order',
  url: 'http://api.deworkacy.ru/api/dwy/form/business-form/raif',
  method: 'post',
  params: {
   body: {
     ...data,
   }
  }
});

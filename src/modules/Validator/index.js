import Yup from 'yup';

Yup.addMethod(Yup.string, 'phone', function (msg = 'Некорректный телефон') {
  return this.test({
    name: 'phone',
    exclusive: true,
    message: msg,
    test: (value) => {
      try {
        const isValid = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
        return isValid;
      } catch (e) {
        return false
      }
    }
  })
})

export default Yup;

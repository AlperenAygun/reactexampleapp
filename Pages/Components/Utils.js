//This class is created for format long integer
//in money form...
const Format_Money = (elementyoFormat) =>
{
    return (elementyoFormat).toLocaleString('en-US', {
        style: 'currency',
        currency: 'TRY',
      });
}

export {Format_Money}
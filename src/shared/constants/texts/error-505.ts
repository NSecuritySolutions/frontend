import error505Img from 'src/assets/errors/505/error505Img.png';
import warning505Img from 'src/assets/errors/505/error505Warning.png';

type TError505 = {
  id: number;
  errorCode: string;
  errorMessage: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
};

export const error505: TError505 = {
  id: 1,
  errorCode: '505',
  errorMessage: 'Ошибка сервера',
  errorText:
    'Что-то пошло не так Текст текст текстТекст текст текстТекст текст текст',
  errorImg: error505Img,
  warningImg: warning505Img
};

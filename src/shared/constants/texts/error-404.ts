import error404Img from 'src/assets/errors/404/error404Img.png';
import warning404Img from 'src/assets/errors/404/warning404Img.png';

type TError404 = {
  id: number;
  errorCode: string;
  errorText: string;
  errorImg: string;
  warningImg: string;
  errorMessage: string;
};

export const error404: TError404 = {
  id: 1,
  errorCode: '404',
  errorMessage: 'Такой страницы нет...',
  errorText:
    'Наша компания предоставляет специалистов высокой квалификации, которые быстро и качественно установят все необходимое оборудование.',
  errorImg: error404Img,
  warningImg: warning404Img
};

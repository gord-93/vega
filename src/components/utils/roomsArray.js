import standardRoomThree from '../../images/Photos/3-room/1.jpeg';
import halfLuxOne from '../../images/Photos/halflux-1-room/1.jpeg';
import standardTwo from '../../images/room-standard-2x.png';
import luxTwo from '../../images/room-lux-2x.png';
import supperior from '../../images/Photos/superior/1.jpeg';
import halfLuxTwo from '../../images/Photos/halflux-2-room/1.jpeg';
import luxOne from '../../images/Photos/lux-1-room/1.jpeg';
import standardtwo1 from '../../images/Photos/standard/1.jpeg';
import standardtwo2 from '../../images/Photos/standard/2.jpeg';
import standardtwo3 from '../../images/Photos/standard/3.jpeg';
import standardtwo4 from '../../images/Photos/standard/4.jpeg';
import standardtwo5 from '../../images/Photos/standard/5.jpeg';
import standardtwo6 from '../../images/Photos/standard/6.jpeg';
import standardtwo7 from '../../images/Photos/standard/7.jpeg';
import standardtwo8 from '../../images/Photos/standard/8.jpeg';
import standardtwo9 from '../../images/Photos/standard/9.jpeg';
import standardthree1 from '../../images/Photos/3-room/1.jpeg';
import standardthree2 from '../../images/Photos/3-room/2.jpeg';
import halfluxone1 from '../../images/Photos/halflux-1-room/1.jpeg';
import halfluxone2 from '../../images/Photos/halflux-1-room/2.jpeg';
import halfluxone3 from '../../images/Photos/halflux-1-room/3.jpeg';
import halfluxone4 from '../../images/Photos/halflux-1-room/4.jpeg';
import halfluxone5 from '../../images/Photos/halflux-1-room/5.jpeg';
import halfluxone6 from '../../images/Photos/halflux-1-room/6.jpeg';
import halfluxone7 from '../../images/Photos/halflux-1-room/7.jpeg';
import halfluxmod1 from '../../images/Photos/superior/1.jpeg';
import halfluxmod2 from '../../images/Photos/superior/2.jpeg';
import halfluxtwo1 from '../../images/Photos/halflux-2-room/1.jpeg';
import halfluxtwo2 from '../../images/Photos/halflux-2-room/2.jpeg';
import halfluxtwo3 from '../../images/Photos/halflux-2-room/3.jpeg';
import halfluxtwo4 from '../../images/Photos/halflux-2-room/4.jpeg';
import halfluxtwo5 from '../../images/Photos/halflux-2-room/5.jpeg';
import luxone1 from '../../images/Photos/lux-1-room/1.jpeg';
import luxone2 from '../../images/Photos/lux-1-room/2.jpeg';
import luxone3 from '../../images/Photos/lux-1-room/3.jpeg';
import luxone4 from '../../images/Photos/lux-1-room/4.jpeg';
import luxtwo1 from '../../images/Photos/lux/1.jpeg';
import luxtwo2 from '../../images/Photos/lux/2.jpeg';
import luxtwo3 from '../../images/Photos/lux/3.jpeg';
import luxtwo4 from '../../images/Photos/lux/4.jpeg';
import luxtwo5 from '../../images/Photos/lux/5.jpeg';
import luxtwo6 from '../../images/Photos/lux/6.jpeg';
import luxtwo7 from '../../images/Photos/lux/7.jpeg';
import luxtwo8 from '../../images/Photos/lux/8.jpeg';
import hall1 from '../../images/Photos/3BDC2425-B774-4318-B153-9CA5A956364E (1).jpeg';
import hall2 from '../../images/Photos/DSC_8365.JPG';
import street from '../../images/Photos/DSC_3245.jpeg';

export const roomsArray = [
  {
    title: 'СТАНДАРТ двухместный',
    urlTitle: 'standardtwo',
    img: standardTwo,
    price: 2700,
    place: 'Размещение на 2 или 3 этаже',
    about:
      [
        'Две односпальные кровати, письменный стол, стулья тумбочки, шкаф.',
        'Телевизор, холодильник, кондиционер.', 
        'Душевая кабинка в санузле, туалетно-косметические средства.'
      ],
    photos: 
      [
        standardtwo1,
        standardtwo2,
        standardtwo3,
        standardtwo4,
        standardtwo5,
        standardtwo6,
        standardtwo7,
        standardtwo8,
        standardtwo9,
      ],
    _id: '1',
  },

  {
    title: 'СТАНДАРТ трехместный',
    urlTitle: 'standardthree',
    img: standardRoomThree,
    price: 4000,
    place: 'Размещение на 2 или 3 этаже',
    about:
      [
        'Три односпальные кровати, письменный стол, стулья тумбочки, шкаф.', 
        'Телевизор, холодильник, кондиционер.',
        'Душевая кабинка в санузле, туалетно-косметические средства.', 
        'WI-FI бесплатный в зоне ресепшн, частично в номерах'
      ],
    photos: 
      [
        standardthree1,
        standardthree2
      ],
    _id: '2',
  },

  {
    title: 'ПОЛУЛЮКС однокомнатный',
    urlTitle: 'halfluxone',
    img: halfLuxOne,
    price: 3500,
    place: 'Размещение на 1 или 2 этаже',
    about:
      [
        'Двуспальная кровать ( или две односпальные), письменный стол, журнальный стол,  тумбочки, шкаф.', 
        'Телевизор, холодильник, кондиционер, электрочайник, чайная пара, чай, вода.',
        'Душевая кабинка в санузле, туалетно-косметические средства, халаты, тапочки, фен.',
      ],
      photos: 
      [
        halfluxone1,
        halfluxone2,
        halfluxone3,
        halfluxone4,
        halfluxone5,
        halfluxone6,
        halfluxone7
      ],
    _id: '3',
  },

  {
    title: 'ПОЛУЛЮКС улучшенный',
    urlTitle: 'halfluxsuperior',
    img: supperior,
    price: 4000,
    place: 'Размещение на 1  или  3 этаже',
    about:
      [
        'Двуспальная кровать, шкаф, тумбочки, письменный стол, журнальный стол, стулья, либо кресла.', 
        'Холодильник, телевизор, кондиционер, чайник, чайная пара, чай, кофе, вода.',
        'Душевая кабина в санузле, туалетно-косметические средства, халаты, тапочки, фен.'
      ],
    photos: 
      [
        halfluxmod1,
        halfluxmod2
      ],
    _id: '4',
  },

  {
    title: 'ПОЛУЛЮКС двухкомнатный',
    urlTitle: 'halfluxtwo',
    img: halfLuxTwo,
    price: 5000,
    place: 'Размещение на 3 этаже',
    about:
      [
        'Двуспальная кровать, шкаф, тумбочки, письменный стол, журнальный стол, диван, стулья, кресла.', 
        'Холодильник, телевизор, кондиционер, чайник, чайная пара, чай, кофе, вода.',
        'Душевая кабина, туалетно-косметические средства, халаты, тапочки, фен.'
      ],
    photos: 
      [
        halfluxtwo1,
        halfluxtwo2,
        halfluxtwo3,
        halfluxtwo4,
        halfluxtwo5
      ],
    _id: '5',
  },

  {
    title: 'ЛЮКС однокомнатный',
    urlTitle: 'luxone',
    img: luxOne,
    price: 5000,
    place: 'Размещение на 1 этаже',
    about:
      [
        'Двуспальная кровать, шкаф, тумбочки, письменный стол, журнальный стол, стулья.', 
        'Холодильник, телевизор, кондиционер, чайник, чайная пара, чай, кофе, вода.',
        'Гидромассажная ванна, туалетно-косметические средства, халаты, тапочки, фен.'
      ],
    photos: 
      [
        luxone1,
        luxone2,
        luxone3,
        luxone4
      ],
    _id: '6',
  },

  {
    title: 'ЛЮКС двухкомнатный',
    urlTitle: 'luxtwo',
    img: luxTwo,
    price: 6000,
    place: 'Размещение на 2 этаже',
    about:
      [
        'Двуспальная кровать, шкаф купе, письменный стол, журнальный стол, мягкая мебель.', 
        'Холодильник, телевизор кондиционер, чайник,  чайная пара, чай, кофе, вода.',
        'Гидромассажная ванна ,  туалетно-косметические средства, халаты, тапочки, фен.'
      ],
    photos: 
      [
        luxtwo1,
        luxtwo2,
        luxtwo3,
        luxtwo4,
        luxtwo5,
        luxtwo6,
        luxtwo7,
        luxtwo8
      ],
    _id: '7',
  },
]

export const galleryPhotos = [
  street,
  hall1,
  hall2,
  standardtwo1,
  standardtwo2,
  standardtwo3,
  standardtwo4,
  standardtwo5,
  standardtwo6,
  standardtwo7,
  standardtwo8,
  standardtwo9,
  standardthree1,
  standardthree2,
  halfluxone1,
  halfluxone2,
  halfluxone3,
  halfluxone4,
  halfluxone5,
  halfluxone6,
  halfluxone7,
  halfluxmod1,
  halfluxmod2,
  halfluxtwo1,
  halfluxtwo2,
  halfluxtwo3,
  halfluxtwo4,
  halfluxtwo5,
  luxone1,
  luxone2,
  luxone3,
  luxone4,
  luxtwo1,
  luxtwo2,
  luxtwo3,
  luxtwo4,
  luxtwo5,
  luxtwo6,
  luxtwo7,
  luxtwo8
]
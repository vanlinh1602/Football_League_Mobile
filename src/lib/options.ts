export const FontFamily = {
  black: 'Roboto-Black',
  blackItalic: 'Roboto-BlackItalic',
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  lightItalic: 'Roboto-LightItalic',
  medium: 'Roboto-Medium',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  thin: 'Roboto-Thin',
  thinItalic: 'Roboto-ThinItalic',
};

export const leagues = [
  {
    img: require('../assets/images/leagues/AFC_Cup.png'),
    title: 'AFC Cup',
  },
  {
    img: require('../assets/images/leagues/AFC_Champions_League.png'),
    title: 'AFC Champions',
  },
  {
    img: require('../assets/images/leagues/Europa_League.png'),
    title: 'Europa league',
  },
  {
    img: require('../assets/images/leagues/CAF.png'),
    title: 'CAF',
  },
  {
    img: require('../assets/images/leagues/UEFA.png'),
    title: 'UEFA',
  },
];

export const comments = [
  {
    ava: require('../assets/images/categories/players.jpg'),
    userName: 'Van Linh',
    comment:
      ' Được coi là một trong những cầu thủ giỏi nhất thế giới, anh nổi tiếng với tốc độ, sức mạnh và khả năng dứt điểm trong vòng cấm',
  },
  {
    ava: require('../assets/images/categories/players.jpg'),
    userName: 'Gia Hy',
    comment: 'Nhà mình còn gì đâu ...',
  },
  {
    ava: require('../assets/images/categories/players.jpg'),
    userName: 'Nhu Phi',
    comment: 'Chien dau het minh cung doi tuyen MU, tu hao MU!',
  },
];

export const playerCard = [
  {
    ava: require('../assets/images/categories/players.jpg'),
    name: 'Ronaldo',
  },
  {
    ava: require('../assets/images/categories/players.jpg'),
    name: 'Ronaldo',
  },
  {
    ava: require('../assets/images/categories/players.jpg'),
    name: 'Ronaldo',
  },
  {
    ava: require('../assets/images/categories/players.jpg'),
    name: 'Ronaldo',
  },
];

export const events: CustomObject<string> = {
  shots: 'Shots',
  goals: 'Goals',
  offSide: 'Offside',
  cornerKick: 'Corner Kick',
  errors: 'Errors',
  redCard: 'Red Card',
  yellowCard: 'Yellow Card',
};

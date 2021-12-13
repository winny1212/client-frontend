// Posts data for development - schema taken and modified from the server
// {_id, breed, dogSize, author, title, description, steps, image, likes, comments, createdAt}

const postsData = [
  {
    _id: 1,
    breed: 'Golden Retriever',
    dogSize: 'medium',
    author: 'chris_briggs',
    title: 'How to deal with dogs who hate water?',
    description:
      'Fondue caerphilly jarlsberg. Cheeseburger everyone loves fromage frais blue castello cut the cheese cheese and biscuits say cheese cheese slices. Hard cheese who moved my cheese cut the cheese lancashire jarlsberg bocconcini squirty cheese monterey jack. When the cheese comes out everybody is happy cheese and biscuits who moved my cheese.',
    steps: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    ],
    tags: ['stubborn', 'hate water', 'dirty'],
    image: {
      before: 'https://picsum.photos/600',
      after: 'https://picsum.photos/600',
    },
    video: 'https://youtu.be/Xc1KZcra4mE',
    likes: [],
    comments: [],
    createdAt: '2021-12-08T07:49:43.012Z',
  },
  {
    _id: 2,
    breed: 'Pug',
    dogSize: 'small',
    author: 'melanie_newman',
    title: 'how to de shed a pug',
    description:
      'This video Mel and Adam the wonderful Pug demonstrate how to de shed a Pug. Pugs loose a lot of hair and the more you can remove with a brush and during the bathing and drying process the less hair you will have in your house or car.',
    steps: [
      'Cheese on toast lancashire croque monsieur. Who moved my cheese ricotta stilton mascarpone brie st. agur blue cheese cheese triangles red leicester. Camembert de normandie paneer caerphilly pepper jack fondue stilton cheese and wine roquefort.',
      'Gouda chalk and cheese croque monsieur cheese and wine parmesan fromage frais lancashire cheesy grin. Port-salut monterey jack cheesy grin ricotta.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, facilis. Quisquam dignissimos earum quod!',
      'Fondue caerphilly jarlsberg. Cheeseburger everyone loves fromage frais blue castello cut the cheese cheese and biscuits say cheese cheese slices.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae.',
    ],
    tags: ['de-shed', 'smelly', 'stinky'],
    image: {
      before: 'https://picsum.photos/600',
      after: 'https://picsum.photos/600',
    },
    video: 'https://youtu.be/NfzraeixPLc',
    likes: [],
    comments: [],
    createdAt: '2021-12-11T00:17:53.187Z',
  },
  {
    _id: 3,
    breed: 'poodle',
    dogSize: 'medium',
    author: 'shu_and_tree',
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Croque monsieur cheesecake croque monsieur. Cheesy grin gouda caerphilly emmental dolcelatte red leicester say cheese cut the cheese. Lancashire chalk and cheese pecorino cheeseburger swiss fromage frais cheese and biscuits cream cheese.',
    steps: [
      'Caerphilly cheese slices stilton mascarpone feta cauliflower cheese everyone loves monterey jack. Cottage cheese when the cheese comes out everybody happy.',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni rem delectus illum. Officiis illo ipsam sunt.',
      'Pepper jack mascarpone boursin jarlsberg danish fontina.',
      'When the cheese comes out everybody is happy cheese and biscuits who moved my cheese.',
    ],
    tags: ['messy', 'curly', 'white', 'knots'],
    image: {
      before: 'https://picsum.photos/600',
      after: 'https://picsum.photos/600',
    },
    video: 'https://youtu.be/OgvC-wVTAu0',
    likes: [],
    comments: [],
    createdAt: '2021-12-11T00:17:53.187Z',
  },
];

export default postsData;

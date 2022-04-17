const mongoose = require('mongoose');
const Simpson = require('../models/Simpsons'); //simpsons

const simpsons = [
  {
    name: 'Homer Simpson',
    rank: 'Father',
    place: 'Nuclear power station',
    object: 'Donut',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest?cb=20100522180809&path-prefix=es'
  },
  {
    name: 'Marge Simpson',
    rank: 'Mother',
    place: 'Simpsons House',
    object: 'Pearl necklace',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/0/0b/Marge_Simpson.png/revision/latest?cb=20090415001251&path-prefix=es'
  },
  {
    name: 'Bart Simpson',
    rank: 'Son',
    place: 'Simpsons House',
    object: 'Skateboard',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/6/65/Bart_Simpson.png/revision/latest?cb=20100530014756&path-prefix=es'
  },
  {
    name: 'Lisa Simpson',
    rank: 'Daughter',
    place: 'Simpsons House',
    object: 'Saxophone',
    image: 'https://static.wikia.nocookie.net/doblaje/images/5/59/Lisa.png/revision/latest?cb=20131124215512&path-prefix=es'
  },
  {
    name: 'Maggie Simpson',
    rank: 'Daughter',
    place: 'Simpsons House',
    object: 'Pacifier',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/9/9d/Maggie_Simpson.png/revision/latest?cb=20100529224628&path-prefix=es'
  },
  {
    name: 'Abraham Simpson',
    rank: 'Grandfather',
    place: 'Nursing Home',
    object: 'Teeth',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/a/a9/Abraham_Simpson.png/revision/latest?cb=20150426055530&path-prefix=es'
  },
  {
    name: 'Lenny Leonard',
    rank: 'Friend',
    place: 'Nuclear power station',
    object: 'Carbon rod',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/a/ae/Lenny_Leonard.png/revision/latest?cb=20090201210656&path-prefix=es'
  },
  {
    name: 'Carl Carlson',
    rank: 'Friend',
    place: 'Nuclear power station',
    object: 'Carbon rod',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/a/a9/Carl_Carlson.png/revision/latest/top-crop/width/360/height/450?cb=20090201205618&path-prefix=es'
  },
  {
    name: 'Edna Krabappel',
    rank: 'Teacher',
    place: 'Primary School',
    object: 'Green clothes',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/7/76/Edna_Krabappel.png/revision/latest?cb=20150426054956&path-prefix=es'
  },
  {
    name: 'Seymour Skinner',
    rank: 'Principal',
    place: 'Primary School',
    object: 'Suit',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/3/3a/Seymour_Skinner.png/revision/latest?cb=20100103190251&path-prefix=es'
  },
  {
    name: 'Milhouse Van Houten',
    rank: 'Friend',
    place: 'Primary School',
    object: 'Glasses',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/1/11/Milhouse_Van_Houten.png/revision/latest?cb=20150426062610&path-prefix=es'
  },
  {
    name: 'Timothy Lovejoy',
    rank: 'Reverend',
    place: 'Church',
    object: 'Bible',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/d/de/Timothy_Lovejoy.png/revision/latest?cb=20090130133922&path-prefix=es'
  },
  {
    name: 'Ned Flanders',
    rank: 'Neighbor',
    place: 'Lefty Shop',
    object: 'Moustache',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/8/84/Ned_Flanders.png/revision/latest?cb=20150426062016&path-prefix=es'
  },
  {
    name: 'Moe Szyslak',
    rank: 'Barman',
    place: 'Bar',
    object: 'Apron',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/8/80/Moe_Szyslak.png/revision/latest?cb=20090130133033&path-prefix=es'
  },
  {
    name: 'Charles Montgomery Burns',
    rank: 'Boss',
    place: 'Nuclear power station',
    object: 'Nose',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/9/9d/Charles_Montgomery_Burns.png/revision/latest?cb=20090227021502&path-prefix=es'
  },
  {
    name: 'Krusty The Clown',
    rank: 'Clown',
    place: 'Recording Studio',
    object: 'Hair',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/c/c0/Herschel_Krustofski.png/revision/latest?cb=20150426072709&path-prefix=es'
  },
  {
    name: 'Clancy Wiggum',
    rank: 'Police',
    place: 'Police Station',
    object: 'Gun',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/e/ec/Clancy_Wiggum.png/revision/latest?cb=20150426060357&path-prefix=es'
  },
  {
    name: 'Apu Nahasapeemapetilon',
    rank: 'Dependent',
    place: 'Badulaque',
    object: 'Smoothies',
    image: 'https://static.wikia.nocookie.net/lossimpson/images/7/7d/Apu_Nahasapeemapetilon.png/revision/latest/top-crop/width/360/height/450?cb=20111127113228&path-prefix=es'
  },
];

const simpsonDocuments = simpsons.map(simpson => new Simpson(simpson));

mongoose
.connect("mongodb+srv://claarainiesta17:Macchiato12!@cluster0.wga89.mongodb.net/node-pruebas-Clara?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(async () => {
    const allSimpsons = await Simpson.find();
    if (allSimpsons.length) {
    await Simpson.collection.drop();
    }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
		await Simpson.insertMany(simpsonDocuments);
    console.log('DatabaseCreated')
	})
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());
const router = require('express').Router();

const db = require('../../data/helpers/dogsDbHelpers');

router.get('/', (req, res) => {
  db.get()
    .then(dogs => res.status(200).json(dogs))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of dogs at this time', err}));
})

router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then(dog => res.status(200).json(dog))
    .catch(err => res.status(500).json({message: 'Could not retrieve specified dog at this time', err}));
})

router.post('/', (req, res) => {
  if(req.body.name) {
    req.body.age = req.body.age ? req.body.age : 0;
    req.body.breed = req.body.breed ? req.body.breed : 'Unknown'
    db.add(req.body)
      .then(newDog => res.status(201).json(newDog))
      .catch(err => res.status(500).json({message: 'Could not create a new dog at this time', err}));
  } else {
    res.status(400).json({message: 'Please provide a name for the new dog'});
  }
})

router.put('/:id', (req, res) => {
  if(req.body.name) {
    db.update(req.params.id, req.body)
      .then(dog => {
        if(dog === null) {
          res.status(404).json({message: 'Dog with the specified id was not found'});
        } else {
          res.status(200).json(dog)
        }
      })
      .catch(err => res.status(500).json({message: 'Could not update this dog at this time', err}))
  } else {
    res.status(400).json({message: 'Please at least provide a name for the dog'})
  }
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
    .then(count => {
      if(count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({message: 'The dog you tried to delete was not found'});
      }
    })
    .catch(err => res.status(500).json({message: 'Could not delete this dog at this time'}))
})

module.exports = router;
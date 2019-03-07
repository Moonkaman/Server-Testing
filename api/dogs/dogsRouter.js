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

module.exports = router;
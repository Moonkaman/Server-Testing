const router = require('express').Router();

const db = require('../../data/helpers/dogsDbHelpers');

router.get('/', (req, res) => {
  db.get()
    .then(dogs => res.status(200).json(dogs))
    .catch(err => res.status(500).json({message: 'Could not retrieve list of dogs at this time', err}))
})

module.exports = router;
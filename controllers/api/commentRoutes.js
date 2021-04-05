const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
  Comment.findAll({})
    .then((newComment) => res.json(newComment))
    .catch (err => {
    res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
  })
  .then((newComment) => res.json(newComment))
  .catch((err) => {
    res.status(500).json(err);
  });
});


router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      description: req.body.description,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    })
    .then((newComment) => res.json(newComment))
    .catch((err) => {
      res.status(400).json(err);
    });
  }
});

module.exports = router;
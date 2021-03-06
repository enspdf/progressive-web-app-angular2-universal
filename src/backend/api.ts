import * as express from 'express';
import { Logro } from './models/logro';

const router = express.Router();

router.route("/logros")
  .get((req, res) => {
    Logro.find({}).exec()
      .then((documents) => {
        res.json(documents);
      });
  })
  .post((req, res) => {
    const logro = new Logro({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author
    });

    logro.save()
      .then((doc) => res.json(doc));
  });

export const RouterApi = router;
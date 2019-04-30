var express = require("express");
var router = express.Router();
var Store = require('../../../models').Store;

router.get("/", function(req, res, next) {
  Store.findAll()
    .then(stores => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(stores));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error })
    });
});

router.get("/:id", function (req, res, next) {
  Store.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(store => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(store));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error })
    });
});

router.post("/", function(req, res, next) {
  Store.create({
          name: req.body.name,
          phoneNumber: req.body.phoneNumber
    })
    .then(store => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).send(JSON.stringify(store));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error });
    });
});

router.put("/:id", function (req, res, next) {
  Store.update(
    {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber
    },
    {
      returning: true,
      where: {
        id: parseInt(req.params.id)
      }
    }
  )
    .then(([rowsUpdate, [updatedGame]]) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(store));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error })
    });
});

router.delete("/:id", function (req, res, next) {
  Store.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(store => {
      res.setHeader("Content-Type", "application/json");
      res.status(204).send(JSON.stringify(store));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error })
    });
});

module.exports = router;

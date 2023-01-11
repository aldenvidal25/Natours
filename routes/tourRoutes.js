const express = require('express');
const tourController = require('./../controllers/tourControllers');
const router = express.Router();

router.param(`id`, tourController.checkId)

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .post(tourController.checkBody)
  .delete(tourController.deleteTour);

module.exports = router;


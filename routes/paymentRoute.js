const express = require('express');
const payment_route = express();

const bodyParser = require('body-parser');
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended:false }));

const path = require('path');

payment_route.set('view engine','ejs');
payment_route.set('views',path.join(__dirname, '../views'));

const paymentController = require('../controllers/paymentController');

payment_route.get('/', paymentController.renderProductPage);
payment_route.post('/createOrder', paymentController.createOrder);

module.exports = payment_route;

// /**
//  * @swagger
//  * tags:
//  *   name: Razorpay
//  *   description: Razorpay payment operations
//  */

// const express = require('express');
// const payment_route = express.Router();
// const paymentController = require('../controllers/paymentController');

// /**
//  * @swagger
//  * /:
//  *   get:
//  *     summary: Render product page
//  *     tags: [Razorpay]
//  *     responses:
//  *       '200':
//  *         description: Successfully rendered product page
//  */
// payment_route.get('/', paymentController.renderProductPage);

// /**
//  * @swagger
//  * /createOrder:
//  *   post:
//  *     summary: Create an order
//  *     tags: [Razorpay]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               amount:
//  *                 type: number
//  *               name:
//  *                 type: string
//  *               description:
//  *                 type: string
//  *     responses:
//  *       '200':
//  *         description: Order created successfully
//  *       '400':
//  *         description: Something went wrong
//  */
// payment_route.post('/createOrder', paymentController.createOrder);

// module.exports = payment_route;

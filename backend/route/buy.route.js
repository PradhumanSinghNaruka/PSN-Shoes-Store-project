// import express from 'express';
// import {buy} from "../controller/Buy.controller.js";

// const router=express.Router();

// router.post('/buy', buy);

// export default router;

import express from 'express';
import { buy } from '../controller/Buy.controller.js';  // Adjust the import path as needed

const router = express.Router();

// Define POST route for /buy
router.post('/', buy);


export default router;

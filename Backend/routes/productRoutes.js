import express from 'express';
const router = express.Router();
import {
    getProducts,
    getProductsById,
    deleteProductById,
    updateProduct,
    createProduct,
    createProductReview,
    getTopProducts
} from '../controllers/productController.js';
import {protect,admin} from '../middleware/authMiddleware.js';

router.route('/:id').delete(protect,admin,deleteProductById)
.put(protect,admin,updateProduct)
router.route('/top').get(getTopProducts);
router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id').get(getProductsById)
router.route('/:id/reviews').post(protect,createProductReview);



export default router;
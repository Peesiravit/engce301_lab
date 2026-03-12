// ============================================
// SERVICE LAYER - Products
// ============================================

const ProductDB = require('../database/products');

class ProductService {
    // ===== GET ALL =====
    static async getAllProducts() {
        try {
            const products = await ProductDB.findAll();
            return products;
        } catch (error) {
            throw new Error(`Failed to get products: ${error.message}`);
        }
    }

    // ===== GET BY ID =====
    static async getProductById(id) {
        try {
            const product = await ProductDB.findById(id);
            
            if (!product) {
                throw new Error('Product not found');
            }

            return product;
        } catch (error) {
            throw error;
        }
    }

    // ===== CREATE =====
    static async createProduct(productData) {
        try {
            this.validateProductData(productData);
            const newProduct = await ProductDB.create(productData);
            return newProduct;
        } catch (error) {
            throw new Error(`Failed to create product: ${error.message}`);
        }
    }

    // ===== UPDATE =====
    static async updateProduct(id, productData) {
        try {
            const existingProduct = await ProductDB.findById(id);
            if (!existingProduct) {
                throw new Error('Product not found');
            }

            this.validateProductData(productData);
            await ProductDB.update(id, productData);
            return await ProductDB.findById(id);
        } catch (error) {
            throw error;
        }
    }

    // ===== DELETE =====
    static async deleteProduct(id) {
        try {
            const product = await ProductDB.findById(id);
            if (!product) {
                throw new Error('Product not found');
            }

            const result = await ProductDB.delete(id);
            
            if (result.changes === 0) {
                throw new Error('Failed to delete product');
            }

            return { message: 'Product deleted successfully' };
        } catch (error) {
            throw error;
        }
    }

    // ===== SEARCH =====
    static async searchProducts(keyword) {
        try {
            if (!keyword || keyword.trim() === '') {
                throw new Error('Search keyword is required');
            }

            const products = await ProductDB.search(keyword);
            return products;
        } catch (error) {
            throw error;
        }
    }

    // ===== VALIDATION =====
    static validateProductData(data) {
        const { name, category_id, price, stock } = data;

        if (!name || !category_id || price === undefined || stock === undefined) {
            throw new Error('Missing required fields');
        }

        if (price < 0) {
            throw new Error('Price must be greater than or equal to 0');
        }

        if (stock < 0) {
            throw new Error('Stock must be greater than or equal to 0');
        }
    }
}

module.exports = ProductService;

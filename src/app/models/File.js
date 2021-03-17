const db = require('../../config/db')


module.exports = {
    create(filename, path, product_id) {
        const query = `
            INSERT INTO files (
                name,
                path,
                product_id,
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        data.price = data.price.replace(/\D/g, "")
        
        const values = [
            filename,
            path,
            product_id,
        ]
        return db.query(query, values)
    }
}
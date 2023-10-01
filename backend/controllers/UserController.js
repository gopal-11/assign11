// backend/controllers/UsersController.js
import data from '../data.json' assert { type: 'json' };

const internalServerErrMsg = 'Internal Server Error';

/**
 * /api/users
 *   get:
 *     tags:
 *       - users
 *     @description : returns the array of the filtered users
 *     response:
 *       200:
 *          description: returns the array of the filtered users
 */
export const getUsers = (req, res) => {
  const { name } = req.params;

  try {
    let filteredProduct = {};

    function getOrders(id) {
      let res = [];
      data?.marketplace?.orders?.map((order) => {
        order?.products?.map((product) => {
          if (product.productId === id) {
            res.push(order);
          }
        });
      });
      return res;
    }

    function getFilteredUser() {
      data?.marketplace?.products.forEach((product) => {
        if (product.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
          filteredProduct = {
            ...product,
            orders: getOrders(product.id),
          };
        }
      });
    }

    // Function call to get filtered response
    getFilteredUser();
    res.json({ output: filteredProduct });
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};

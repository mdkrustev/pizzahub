"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var ProductController_1 = require("./controller/ProductController");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.setApp = function (app) {
        app.get('/', function (req, res) {
            var name = "John";
            res.status(200).json({ message: "Hello, ".concat(name, "! Thanks for sending your data.") });
        });
        app.get('/api/products', new ProductController_1.ProductController().list);
        app.post('/api/products/add', new ProductController_1.ProductController().add);
    };
    return Routes;
}());
exports.Routes = Routes;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var prompts = require("prompts");
var products = [
    {
        title: "Coffee (L)",
        price: 186,
    },
    {
        title: "Coffee (XL)",
        price: 281,
    },
    {
        title: "Hot Chocolate",
        price: 181,
    },
    {
        title: "Tea",
        price: 146,
    },
];
// COINS:
// 2(200), 1(100), 0.5(50), 0.2 (20), 0.1 (10), 0.05 (5), 0.02 (2), 0.01 (1)
var coins = [200, 100, 50, 20, 10, 5, 2, 1];
(function () { return __awaiter(_this, void 0, void 0, function () {
    var response, selectedProduct, wallet, coin, reminder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompts({
                    type: "select",
                    name: "product",
                    message: "please select your product",
                    choices: products,
                    // initial: 0
                })];
            case 1:
                response = _a.sent();
                selectedProduct = products[response.product];
                console.log(products[response.product].title +
                    " costs " +
                    products[response.product].price +
                    " EUR");
                wallet = 0;
                _a.label = 2;
            case 2:
                if (!(wallet < selectedProduct.price)) return [3 /*break*/, 4];
                return [4 /*yield*/, prompts({
                        type: "select",
                        name: "value",
                        message: "Insert coin:",
                        choices: coins,
                        validate: function (value) {
                            return !coins.includes(value) ? "Invalid coin" : true;
                        },
                    })];
            case 3:
                coin = _a.sent();
                wallet = wallet + coins[coin.value];
                return [3 /*break*/, 2];
            case 4:
                reminder = wallet - selectedProduct.price;
                console.log("Reminder is: " + reminder);
                coins.forEach(function (coin) {
                    if (reminder <= 0) {
                        return;
                    }
                    // how many times coin fits in reminder
                    var times = Math.floor(reminder / coin);
                    if (times > 0) {
                        if (coin > 99) {
                            console.log((coin / 100 + " euro coin is returned\n").repeat(times).trim());
                        }
                        else {
                            console.log((coin + " cents coin is returned\n").repeat(times).trim());
                        }
                    }
                    reminder = reminder - coin * times;
                    // const times = reminder % coin;
                });
                return [2 /*return*/];
        }
    });
}); })();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var auth_1 = __importDefault(require("./routes/auth"));
var course_router_1 = __importDefault(require("./routes/course.router"));
app.use('../uploads', express_1.default.static(path_1.default.resolve('uploads')));
//settings
app.set('port', 3000);
//middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//routes
app.use('/api/course', course_router_1.default);
app.use('/api/auth', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
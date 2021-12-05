"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var course_service_1 = require("../services/course.service");
var multer_config_1 = __importDefault(require("../config/multer.config"));
var router = (0, express_1.Router)();
router.get('/', course_service_1.get);
router.get('/:id', course_service_1.get);
router.post('/', multer_config_1.default.single('image'), course_service_1.post);
router.put('/:id', course_service_1.put);
router.get('/:id', course_service_1.getOne);
router.delete('/:id', course_service_1.remove);
exports.default = router;
//# sourceMappingURL=course.router.js.map
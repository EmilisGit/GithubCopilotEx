// Create web server
// 1. Import express
const express = require('express');
// 2. Create router
const router = express.Router();
// 3. Import comment model
const Comment = require('../models/comment');
// 4. Import article model
const Article = require('../models/article');
// 5. Import user model
const User = require('../models/user');
// 6. Import passport
const passport = require('passport');
// 7. Import moment
const moment = require('moment');
// 8. Import nodemailer
const nodemailer = require('nodemailer');
// 9. Import smtpTransport
const smtpTransport = require('nodemailer-smtp-transport');
// 10. Import config file
const config = require('../config/database');
// 11. Import authentication middleware
const { ensureAuthenticated } = require('../config/auth');
// 12. Import csrf
const csrf = require('csurf');
// 13. Import csrfProtection
const csrfProtection = csrf({ cookie: true });
// 14. Import sanitize-html
const sanitizeHtml = require('sanitize-html');
// 15. Import multer
const multer = require('multer');
// 16. Import path
const path = require('path');
// 17. Import fs
const fs = require('fs');
// 18. Import mkdirp
const mkdirp = require('mkdirp');
// 19. Import resize-img
const resizeImg = require('resize-img');
// 20. Import cloudinary
const cloudinary = require('cloudinary');
// 21. Import cloudinaryStorage
const cloudinaryStorage = require('multer-storage-cloudinary');
// 22. Import cloudinary config file
const cloudinaryConfig = require('../config/cloudinary');
// 23. Import cloudinary config
cloudinary.config(cloudinaryConfig);
// 24. Import cloudinary storage
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'comments',
  allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
  filename: function(req, file, cb) {
    cb(null, file.originalname.split('.')[0]);
  }
});
// 25. Import upload
const upload = multer({ storage: storage });
// 26. Import cloudinary uploader
const cloudinaryUploader = require('../config/cloudinaryUploader');
// 27. Import cloudinary uploader config file
const   cloudinaryUploaderConfig = require('../config/cloudinaryUploader');
// 28. Import cloudinary uploader config
cloudinaryUploader.config(cloudinaryUploaderConfig);
// 29. Import cloudinary uploader storage
const uploaderStorage = cloudinaryUploaderStorage({
    cloudinary: cloudinaryUploader,
    folder: 'comments',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
    filename: function(req, file, cb) {
        cb(null, file.originalname.split('.')[0]);
    }
});
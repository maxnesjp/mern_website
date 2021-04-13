import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    // no error; where to store
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    // error, how we want to call upload (different names); path.extname() - gets extension of the file
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  // get extension from the file and check it matches (true or false)
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // mime type. i.e. jpeg - img/jpeg
  const mimetype = filetypes.test(file.mimetype)
  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})
// single - one image
router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`)
})

export default router

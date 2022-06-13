const functions = require('firebase-functions')
const os = require('os');
const path = require('path');

const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const bucket = admin.storage().bucket();
const gcs = admin.storage();
const projectId = 'popn-media';

  gcs.projectId = projectId;
  gcs.keyFilename = "popn-media-firebase-adminsdk-648sc-7ad0574c60.json";




// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.onFileCreate = functions.storage.object().onFinalize(event => {
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log("file change detected, function exec started");

  if(path.basename(filePath).startsWith("renamed-")){
    console.log("we already renamed that file");
    return;
  }
  const destinationBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType };
    return destinationBucket.file(filePath).download({
      destination: tmpFilePath
    }).then(() => {
      return destinationBucket.upload(tmpFilePath, {
        destination: 'renamed-' + path.basename(filePath),
        metadata: metadata
      })
    })
  });

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      const bucket = gcs.bucket("fb-cloud-functions-demo.appspot.com");
      bucket
        .upload(uploadData.file, {
          uploadType: "media",
          metadata: {
            metadata: {
              contentType: uploadData.type
            }
          }
        })
        .then(() => {
          res.status(200).json({
            message: "It worked!"
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
    busboy.end(req.rawBody);
    //req.pipe(busboy)
  });
});

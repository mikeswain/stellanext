import CMS from "netlify-cms-app";

// You only need to import the media library that you'll use. We register both
// here for example purposes.
import uploadcare from "netlify-cms-media-library-uploadcare";

CMS.registerMediaLibrary(uploadcare);

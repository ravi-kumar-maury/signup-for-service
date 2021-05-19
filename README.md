# signup-for-service

The key takeaway of this project was to serving the static pages properly 
  In case the public folder (or any folder configured for the express engine to use) is not available , only html file is served 
  and may be a blow in first instance {app.use(express.static(__dirname + "/public"))}
  One other thing to keep in mind is to configure path of the file properly (keeping in mind the uses of /)

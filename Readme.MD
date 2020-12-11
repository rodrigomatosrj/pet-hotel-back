Pet hotel server (backend)

url pública api: http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/

Endpoints

User
POST /user/signup - Expects a valid e-mail and password. Returns a 201 code when succesfully signup. 
POST /user/login - Expects a registered e-mail and password. Returns a valid token.

Client
GET /client/ - Expects a validation token. Returns a specific client identified by token.
POST /client/ - 
PATCH /client/ -

Pet
GET /pet/ - Expects a validation token. Returns the list of all pets from the registered client.
GET /pet/:id - Expects a validation token and the booking id. Returns a specific pet from registered user.
POST /pet/ -
PATCH /pet/ -
DELETE /pet/ -

Booking
GET /booking/ - Expects a validation token. Returns the list of all bookings from the registered client.
GET /booking/:id - Expects a validation token and the booking id. Returns a specific booking from  registered user.
POST /booking/ - Expects a validation token and data as Book Schema. 
PUT /booking/ - 
DELETE /booking/ -

Accommodations
GET /adm/accommodation/ - Expects a validation token. Returns the list of all bookings from the registered client.
POST /adm/accommodation/ - 
PATCH /adm/accommodation/ -
DELETE /adm/accommodation/ -

General
POST /file-upload - Expects an image, on field "img-upload" and returns the secure image url on Cloudinary.
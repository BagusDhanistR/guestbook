# guestbook
for question number 1 can run node test1.js   <br />

For question number 2  <br />

This is a mini project about guestbook  <br />
use express.js and postgre sql ORM sequelize for the database  <br />
first install all dependency use `npm i`  <br />
second migrate the database using `npx sequelize-cli db: create` and then `npx sequelize-cli db: migrate`  <br />

List of available endpoints:

-   `POST /admin/login`
-   `POST /admin/logout`
-   `POST /admin/register`
-   `GET /admin/data`
-   `GET /note/getNote`
-   `POST /guest/add`
-   `DELETE /Movies/:ID`

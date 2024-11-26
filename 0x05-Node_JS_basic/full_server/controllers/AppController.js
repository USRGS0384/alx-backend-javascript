/**
 * Contains the miscellaneous route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @author Philip Ajuong Deng <https://github.com/USGRS0394>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

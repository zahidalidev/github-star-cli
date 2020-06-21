const { push } = require("./questions/createRepo");

const printStar = `          
                                  \x1b[93m**
                                 *  *
                                *    *
                               *      *
                              *        *
                *   *  *  *  * *  *  *  *  *  *  *   *
                   *        *            *        *
                      *    *              *    *
                         **                **
                         *  *             * *
                        *      *       *     *
                       *          * *         *
                      *          *   *         *
                     *        *         *       *
                    *      *               *     *
                   *    *                     *   *
                  *  *                           * *
                 *        \x1b[96m  github-star-cli         \x1b[93m*
    
 \x1b[94m   Author:  Zahid Ali
    GitHub:  zahidalidev\x1b[0m

\x1b[96m First use command \x1b[92mgithub-star-cli set-auths \x1b[96mto set username, email and password this is one time thing!\x1b[93m

\x1b[96m use \x1b[92mgithub-star-cli --help \x1b[96mto check commands\x1b[93m\x1b[0m
   
           <- -------------------- \x1b[92m Thankyou for using github-star-cli\x1b[0m --------------------- ->

                 ` 
console.log(printStar);
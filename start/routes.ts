/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

//router.on('/').render('pages/home')
router.on('/').renderInertia('home')

const HomeController = () => import('#controllers/home_controller')

router.get('/home', [HomeController, 'index'])

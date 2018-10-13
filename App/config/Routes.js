import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../components/Login'
import Perfil from '../components/Perfil'
import Cursos from '../components/Cursos/Cursos'
import RC from '../components/Rc'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Login} title = "Login" initial = {true} />
         <Scene key = "about" component = {Perfil} title = "Perfil" />
         <Scene key = "Cursos" component = {Cursos} title = "Cursos" />
         <Scene key = "Rc" component = {RC} title = "Recuperar Cuenta" />
      </Scene>
   </Router>
)
export default Routes
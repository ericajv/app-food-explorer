import {Routes, Route} from 'react-router-dom'

import {AdicionaPrato} from '../pages/AdicionaPrato'
import {EditaPrato} from '../pages/EditaPrato'
import {Home} from '../pages/Home'
import {Prato} from '../pages/Prato'

export function AppRoutes(){
return(
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prato/:id" element={<Prato/>}/>
    <Route path="/adicionar-prato" element={<AdicionaPrato/>}/>
    <Route path="/editar-prato/:id" element={<EditaPrato/>}/>
  </Routes>
)
}
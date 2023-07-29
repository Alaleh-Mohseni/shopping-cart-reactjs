import { Routes, Route } from 'react-router-dom'

import Shop from '../pages/Shop/Shop'

function AllRoutes() {
    return (
        <Routes>
            <Route index element={<Shop />} />
        </Routes>
    )
}

export default AllRoutes
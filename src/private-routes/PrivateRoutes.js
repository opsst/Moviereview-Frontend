import React from "react";
import ConfigRoutes from "../config/routes"
import {Navigate , Routes, Outlet, Route, Link} from "react-router-dom";
import Layout from "../Layout"


function PrivateRoutes({ role = "guest", setRole }) {
    const allowedRoutes = ConfigRoutes[role]?.allowedRoutes || [];
    const redirectRoutes = ConfigRoutes[role]?.redirectRoutes || "/register"; // ค่า default ให้ redirect ไปยัง register
  
    return (
        <Routes>
            {/* Layout ครอบทุกหน้า */}
            <Route element={<Layout setRole={setRole}/>}>
                {/* Render หน้าเฉพาะที่ได้รับอนุญาต */}
                {allowedRoutes.map(({ url, component: Component }) => (
                    <Route 
                        key={url} 
                        path={url} 
                        element={<Component setRole={setRole}/>}
                        />
                ))}

                {/* หากไม่มีหน้าใดตรงกับที่กำหนด ให้ Redirect */}
                <Route path="*" element={<Navigate to={redirectRoutes} />} />
            </Route>
        </Routes>
    )
}

export default PrivateRoutes;
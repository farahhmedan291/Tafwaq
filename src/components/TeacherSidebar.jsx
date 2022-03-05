import React from 'react'

function TeacherSidebar() {
    const pathName = window.location.pathname;
    return (
        <div>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className={pathName === "/account" ? "nav-link sidebar-active" : "nav-link"} aria-current="page" href="/account">
                                <i className="fas fa-home"></i>
                                الرئيسية
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className={pathName === "" || pathName === "" ? "nav-link sidebar-active" : "nav-link"} href="/teacher/*">
                                <i className="fas fa-chalkboard"></i>
                                الصفوف
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className={pathName === "/account/user-info" ? "nav-link sidebar-active" : "nav-link"} href="/account/user-info">
                                <i className="fas fa-user"></i>
                               الملف الشخصي
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={pathName === "/change-password" ? "nav-link sidebar-active" : "nav-link"} href="/change-password">
                                <i className="fas fa-key"></i>
                                تغيير كلمة السر
                            </a>
                        </li>

                    </ul>


                </div>
            </nav>

        </div>
    )
}

export default TeacherSidebar

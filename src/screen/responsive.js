import React from "react";
import logoImg from '../logo.svg'
import './css/responsive.css'

const Responsive = ()=> {
    return (
        <div className="main">
            {/* Product layout */}
            <div className="main_product">
                <div className="main_product-img">
                    <img src={logoImg} alt="logo"></img>
                </div>
                <div className="main_product-info">
                    <h1 className="main_product-name">
                        Set sữa rửa mặt Ohui Prime Gel Cleanser
                    </h1>
                    <h3 className="main_product-price">
                        1.035.000đ
                    </h3>
                    <p className="main_product-desc">
                        OHUI PRIME GEL CLEANSER- SỮA RỬA MẶT DẠNG GEL .
                        Rửa mặt thôi mà cũng làm da căng bóng mướt mịn, có tin ko ạ?
                        Tháng này Ohui cho ra 1 em sữa rửa mặt không những làm sạch da còn giúp da căng bóng sáng khoẻ, phê pha lắm nhé.
                    </p>
                </div>
            </div>

            {/* Column layout */}
            <div className="column-layout">
                <div className="column-layout_category">
                    <h2>Category</h2>
                    <ul>
                        <li className="column-layout_item">
                            <a href="https://www.google.com.vn/">Javascript</a>
                        </li>
                        <li className="column-layout_item">
                            <a href="https://www.google.com.vn/">PHP</a>
                        </li>
                        <li className="column-layout_item">
                            <a href="https://www.google.com.vn/">Ruby</a>
                        </li>
                        <li className="column-layout_item">
                            <a href="https://www.google.com.vn/">Dart</a>
                        </li>
                        <li className="column-layout_item">
                            <a href="https://www.google.com.vn/">Python</a>
                        </li>
                    </ul>
                </div>
                <div className="column-layout_container">
                    <div className="column-item">
                        <h2>Course 1</h2>
                        <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                    </div>
                    <div className="column-item">
                        <h2>Course 2</h2>
                        <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                    </div>
                    <div className="column-item">
                        <h2>Course 3</h2>
                        <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                    </div>
                    <div className="column-item">
                        <h2>Course 4</h2>
                        <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                    </div>
                </div>
            </div>

            {/* Feature layout */}
            <div className="feature-layout">
                <div className="feature-item">
                    <h2>Feature 1</h2>
                    <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                </div>
                <div className="feature-item">
                    <h2>Feature 1</h2>
                    <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                </div>
                <div className="feature-item">
                    <h2>Feature 1</h2>
                    <p>I'm writing to you in reference to the job position advertised MyCV.vn which immediately appealed to me.Since I've been interested in your company for a long time, I would like to apply today as a Sample position in permanent employment.</p>
                </div>
            </div>
        </div>
    );
}
export default  Responsive;
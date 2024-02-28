import React from 'react'
import './Footer.css'
import { FaSquareFacebook, FaInstagram,FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className="footer-main">
        <div className="footer-main-container">
            <div className="footer-left"><img src="https://github.com/dharmik2003/poster_movie/blob/main/Navbar/tix%20id%201.png?raw=true" className='left-img'/></div>
            
            <div className="footer-center">
                <div className="footer-center-row">
                    <ol className="list">
                        <h4 className="footer-heading">Perusahaan</h4>
                        <li><a>Kontak Kami</a></li>
                        <li><a>Tentang</a></li>
                        <li><a>Partner</a></li>
                    </ol>
                </div>
                <div className="footer-center-row">
                    <ol className="list">
                        <h4 className="footer-heading">Seputar</h4>
                        <li><a>Seputar</a></li>
                        <li><a>Bioskop</a></li>
                        <li><a>Tiket Saya</a></li>
                        <li><a>Pembayaran</a></li>
                        <li><a>Cicilan</a></li>
                    </ol>
                </div>
                <div className="footer-center-row-tree">
                    <ol className="list">
                        <h4 className="footer-heading">Dukungan</h4>
                        <li><a>Pusat Bantuan</a></li>
                        <li><a>Kebijakan Privasi</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Syarat dan Ketentuan</a></li>
                        <li><a>Update Covid-19</a></li>
                    </ol>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-first">Follow Social Media</div>
                <div className="footer-right-second">
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                    <FaSquareFacebook className="icon" />
                </div>
                <div className="footer-right-third">
                    <h4>Download Aplikasi TIX ID</h4>
                </div>
                <div className="footer-right-four">
                    <img src="https://github.com/dharmik2003/poster_movie/blob/main/Footer/Google%20Play.png?raw=true" />
                    <img src="https://github.com/dharmik2003/poster_movie/blob/main/Footer/App%20Store.png?raw=true" />
                </div>
                <div  className="footer-right-five">
                    2021 TIX ID - PT Nusantara Elang Sejahtera.
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
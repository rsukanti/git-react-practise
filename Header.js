import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import NavMenu from "./NavMenu";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  if (pathname === "/") {
    return null;
  }
  return (
    <>
<header className="home main-header style-one">
        {/* header-lower */}
        <div className="header-lower">
          <div className="outer-box clearfix">
            <div className="container">
              <div className="logo-sec d-flex">
                <div className="logo-box">
                  <figure className="logo"><a href="index.html"><img className="normal" src="images/logo.svg" alt="" /><img className="fixed" src="images/fixed-logo.svg" alt="" /></a></figure>
                </div>
                <ul className="menu-right-content">
                  <li className="support-box">
                    <button type="button" className="bttn" data-bs-toggle="modal" data-bs-target="#exampleModal">Let’s Talk</button>
                  </li>
                </ul>
              </div>
              <div className="menu-area ml-auto clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      {/* new menu */}
                      <li className="dropdown">
                        <a className="primary" href="services.html">NOC Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/network-monitoring/" className="nav-link">Network Monitoring</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-router-services/" className="nav-link">Managed Router</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-wifi-services/" className="nav-link">Managed Wireless</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-voice-services/" className="nav-link">Managed Voice</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-server/" className="nav-link">Managed Server</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-switch-services/" className="nav-link">Managed Switches</a> </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="primary" href="javascript:void(0)">SOC Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/cyber-threat-monitoring/" className="nav-link">Cyber Threat Monitoring</a> </li>
                          <li> <a href="https://www.extnoc.com/mids-mips/" className="nav-link">MIDS/MIPS Services</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-firewall-service/" className="nav-link">Managed Firewall</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-ddos-service/" className="nav-link">Managed DDos</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-ransomware-services/" className="nav-link">Managed Ransomware</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-endpoint-security-service/" className="nav-link">Managed Endpoint Security</a> </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="primary" href="javascript:void(0)">Help Desk Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/24x7-help-desk-services/" className="nav-link">24x7 Help Desk Services</a> </li>
                          <li> <a href="https://www.extnoc.com/white-label-help-desk-support-services/" className="nav-link">White Label Help Desk Support Services</a> </li>
                          <li> <a href="https://www.extnoc.com/desktop-support/" className="nav-link">Desktop Support</a> </li>
                          <li> <a href="https://www.extnoc.com/mac-support/" className="nav-link">MAC Support</a> </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="primary" href="javascript:void(0)">Managed IT Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/managed-iot-services/" className="nav-link">Managed IoT Services</a> </li>
                          <li> <a href="https://www.extnoc.com/managed-print-services/" className="nav-link">Managed Print Services</a> </li>
                          <li> <a href="https://www.extnoc.com/office-365-support-services/" className="nav-link">Office 365 Support Services</a> </li>
                          <li> <a href="https://www.extnoc.com/data-center-support-services/" className="nav-link">Data Center Support Services</a> </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="primary" href="javascript:void(0)">Global Dispatch Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/global-smart-hands/" className="nav-link">Global Smart Hands</a> </li>
                          <li> <a href="https://www.extnoc.com/break-fix-services/" className="nav-link">Break Fix Services</a> </li>
                          <li> <a href="https://www.extnoc.com/sla-based-services/" className="nav-link">SLA Based Services</a> </li>
                          <li> <a href="https://www.extnoc.com/site-assessment-services/" className="nav-link">Site Assessment Services</a> </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="primary" href="javascript:void(0)">On-Demand Services</a>
                        <ul>
                          <li> <a href="https://www.extnoc.com/warranty-services/" className="nav-link">In Warranty/Out Of Warranty Services</a> </li>
                          <li> <a href="https://www.extnoc.com/network-server-deployment/" className="nav-link">Network and Server Deployment</a> </li>
                          <li> <a href="https://www.extnoc.com/windows-10-Office-365-migration/" className="nav-link">Windows 10 /Office 365 Migration</a> </li>
                          <li> <a href="https://www.extnoc.com/sd-wan-deployment-services/" className="nav-link">SD-WAN Deployment Services</a> </li>
                          <li> <a href="https://www.extnoc.com/p2v-services/" className="nav-link">P2V Services</a> </li>
                          <li> <a href="https://www.extnoc.com/san-design-implementation/" className="nav-link">SAN Design &amp; Implementation</a> </li>
                        </ul>
                      </li>
                      <li>
                        <a className="primary" href="https://www.extnoc.com/" target="_blank">Insights</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Get In Tourch Sec Start */}
        <section className="get-in-touch-sec modal fade modal-fullscreen" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="get-in-touch-sec-main" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <div className="get-in-touch-sec-main-left">
                      <figure className="logo"><a href="https://www.extnoc.com/"><img className="normal" src="images/logo.png" alt="" /></a></figure>
                      <h3 className="indicator u-pattern wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">Get in Touch</h3>
                      <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">Let’s Talk
                        About<br />
                        Your Next Big<br />
                        Project.</h2>
                      <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">Looking for a
                        New Career? <a href="#">View Job
                          Openings.</a></p>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 d-flex align-items-center popup-contact-form d-flex align-items-center">
                    <div className="modal-header">
                      <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src="images/popup-close-btn.png" /></span>
                      </button>
                    </div>
                    <div className="contact-form">
                      <div className="sec-head">
                        <h3>Request a Consultation</h3>
                        <div className="sec-head-shape"> <img src="images/sec-head-shape.png" alt="" title /></div>
                      </div>
                      <form id="form-consultation">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <input type="text" className="form-control floating-input" required onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " name="FirstName" id="FirstName1" />
                              <label className="float-label">First Name*</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <input type="text" className="form-control floating-input" required onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " name="LastName" id="LastName1" />
                              <label className="float-label">Last Name*</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <input type="email" className="form-control floating-input" required onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " name="Work-Email" id="Workmail1" />
                              <label className="float-label">Work Email*</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <input type="phone" className="form-control floating-input" required onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " name="phone" id="phone2" />
                              <label className="float-label">Phone Number*</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <input type="text" className="form-control floating-input" required onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " name="company" id="company1" />
                              <label className="float-label">Company Name*</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group floating-label">
                              <select id="country1" required className="form-control floating-input" onkeyup="onKeyFuction()" onkeypress="onKeyFuction()">
                                <option value>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Aland Islands">Aland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                </option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian
                                  Ocean Territory</option>
                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central African Republic">Central African
                                  Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                                </option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo">Congo</option>
                                <option value="Congo, The Democratic Republic of The">Congo, The
                                  Democratic Republic of The</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands (Malvinas)">Falkland Islands
                                  (Malvinas)</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="French Southern Territories">French Southern
                                  Territories</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-bissau">Guinea-bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and Mcdonald Islands">Heard Island
                                  and Mcdonald Islands</option>
                                <option value="Holy See (Vatican City State)">Holy See (Vatican
                                  City State)</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic
                                  of</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Korea, Democratic People's Republic of">Korea,
                                  Democratic People's Republic of</option>
                                <option value="Korea, Republic of">Korea, Republic of</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Lao People's Democratic Republic">Lao People's
                                  Democratic Republic</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya
                                </option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macao">Macao</option>
                                <option value="Macedonia, The Former Yugoslav Republic of">
                                  Macedonia, The Former Yugoslav Republic of</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia, Federated States of">Micronesia,
                                  Federated States of</option>
                                <option value="Moldova, Republic of">Moldova, Republic of
                                </option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar">Myanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles
                                </option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Islands">Northern Mariana
                                  Islands</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palestinian Territory, Occupied">Palestinian
                                  Territory, Occupied</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russian Federation">Russian Federation</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis
                                </option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and
                                  Miquelon</option>
                                <option value="Saint Vincent and The Grenadines">Saint Vincent
                                  and The Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sao Tome and Principe">Sao Tome and Principe
                                </option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Serbia">Serbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and The South Sandwich Islands">
                                  South Georgia and The South Sandwich Islands</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                                </option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Syrian Arab Republic">Syrian Arab Republic
                                </option>
                                <option value="Taiwan, Province of China">Taiwan, Province of
                                  China</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania, United Republic of">Tanzania, United
                                  Republic of</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Timor-leste">Timor-leste</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos
                                  Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates
                                </option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United
                                  States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Viet Nam">Viet Nam</option>
                                <option value="Virgin Islands, British">Virgin Islands, British
                                </option>
                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.
                                </option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12  d-none">
                            <div className="form-group floating-label">
                              <select id="how_many_devices_or_end_points_does_your_company_manage_1" className="form-control floating-input" onkeyup="onKeyFuction()" onkeypress="onKeyFuction()">
                                <option value> How many devices or end points does your
                                  company manage? </option>
                                <option value=">1250">&gt;1250</option>
                                <option value="1000-1249">1000-1249</option>
                                <option value="600-999">600-999</option>
                                <option value="250-599">250-599</option>
                                <option value="51-249">51-249</option>
                                <option value="1-50">1-50</option>
                                <option value="I don't manage any end points">I don't manage any
                                  end points</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group floating-label">
                              <textarea id="message1" required className="form-control floating-input" onkeyup="onKeyFuction()" onkeypress="onKeyFuction()" placeholder=" " defaultValue={""} />
                              <label className="float-label">Message*</label>
                            </div>
                          </div>
                          <div className="col-lg-12 d-flex justify-content-end">
                            <div className="form-group mb-0">
                              <button className="btn" type="submit" data-loading-text="Please wait...">Send Message <img src="images/form-btn-icon.png" alt="" title /></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Get In Tourch Sec End */}
        <div className="banner-sec">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-12 col-lg-8">
                <div className="banner-text scroll-animation scroll-animation__mask-animation ">
                  <h1 className="wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">Managed IT Services</h1>
                  <p className="wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">Improve uptime and Reduce Risk, Focus<br />on your Business not your IT</p>
                  <p className="wow fadeInUp animated slogan-txt" data-wow-delay="600ms" data-wow-duration="1500ms">Higher Network Reliability, 24x7x365 Management &amp; Response,<br />Live Help, Cost Control</p>
                  <div className="banner-btns d-sm-flex align-items-center wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <a href="#" className="theme-btn">Contact Sales</a>
                    {/* https://player.vimeo.com/video/478695937 */}
                    <a href="https://player.vimeo.com/video/563579935?autoplay=0&title=0" className="d-flex align-items-center justify-content-sm-center btn slider-popup video-play-btn mfp-iframe">
                      <span className="btn-type-2 d-sm-flex justify-content-center bttn align-items-center text-center">
                        <div className="outline"><img className="normal " src="images/video-icon.png" /></div>
                      </span> <span className="watch-text">Watch Now</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
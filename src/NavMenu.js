import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Logo from "./images/logo.svg";

const NavMenu = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div className="main-nav">
              <Navbar expand="lg">
                <Navbar.Brand
                  href="https://www.extnoc.com/"
                  className="App-logo"
                >
                  <img src={Logo} alt="Extnoc logo" title="Externetworks" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavDropdown
                      title="NOC Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/network-monitoring/">
                        Network Monitoring
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-router-services/">
                        Managed Router
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-wifi-services/">
                        Managed Wireless
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-voice-services/">
                        Managed Voice
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-server/">
                        Managed Server
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-switch-services/">
                        Managed Switches
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="SOC Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/cyber-threat-monitoring/">
                        Cyber Threat Monitoring
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/mids-mips/">
                        MIDS/MIPS Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-firewall-service/">
                        Managed Firewall
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-ddos-service/">
                        Managed DDos
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-ransomware-services/">
                        Managed Ransomware
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-endpoint-security-service/">
                        Managed Endpoint Security
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Help Desk Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/24x7-help-desk-services/">
                        24x7 Help Desk Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/white-label-help-desk-support-services/">
                        White Label Help Desk Support Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/desktop-support/">
                        Desktop Support
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/mac-support/">
                        MAC Support
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Managed IT Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/managed-iot-services/">
                        Managed IoT Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/managed-print-services/">
                        Managed Print Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/office-365-support-services/">
                        Office 365 Support Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/data-center-support-services/">
                        Data Center Support Services
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Global Dispatch Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/global-smart-hands/">
                        Global Smart Hands
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/break-fix-services/">
                        Break Fix Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/sla-based-services/">
                        SLA Based Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/site-assessment-services/">
                        Site Assessment Services
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="On-Demand Services"
                      renderMenuOnMount={true}
                      className="dropdown"
                    >
                      <NavDropdown.Item href="https://www.extnoc.com/warranty-services/">
                        In Warranty/Out Of Warranty Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/network-server-deployment/">
                        Network and Server Deployment
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/windows-10-Office-365-migration/">
                        Windows 10 /Office 365 Migration
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/sd-wan-deployment-services/">
                        SD-WAN Deployment Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/p2v-services/">
                        P2V Services
                      </NavDropdown.Item>
                      <NavDropdown.Item href="https://www.extnoc.com/san-design-implementation/">
                        SAN Design & Implementation
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <div className="top-right d-none d-lg-block">
              <a
                href="https://www.extnoc.com/speak-with-an-expert/"
                className="reqst-quote reqst-1"
              >
                Let's Talk <ArrowForwardSharpIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavMenu;
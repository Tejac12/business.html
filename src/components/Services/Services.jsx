import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';
// import {faCoffee} from `@fortawesome/free-solid-svg-icons`;
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>What's Services We Are Offering to Our Customers</h3>
                        </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p>Cloud computing helps users in easily accessing computing resources like storage, and processing over internet rather than 
                            local hardwares.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div> 
                <div className="service_box">
                    <div className="service_icon">{faChartBarIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy</h5>
                        <p>Business strategy is the course of action or set of decisions that support entrepreneurs in achieving certain business goals.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faCopyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Reports Analysis</h5>
                        <p>Report analysis is a type of business report that aims to analyze and interpret quantitative company data.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker</h5>
                        <p>Decision makingis a process of solving a problem and the process ends with choosing a solution to the problem.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented</h5>
                        <p>Customer orientation is an approach to running a business that prioritizes customers and their needs over those of the business.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{faCoinsIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>Solutions Focus (SF) is an incisive way to build positive change in tough and often complex, situations..</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

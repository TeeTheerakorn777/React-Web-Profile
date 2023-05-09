import React from 'react'
import './Project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas); // เพิ่ม package ของ free-brands-svg-icons เข้าไปใน library ของ FontAwesome

function Project() {
    return (
        <div className="container-project">
            <div className="text-project">
                <button>PROJECT</button>
            </div>

            <div className="con-card-pro">
                <div className="card-pro">
                    <div className="con-project">
                        <div className="project">
                            <div className="con-img">
                                <img src={process.env.PUBLIC_URL + 'cloe.png'} />
                            </div>
                            <div className="con-title">
                                <div className="tile">
                                    <h3>Clone Figma Template</h3>
                                </div>
                                <div className="info">
                                    <FontAwesomeIcon icon={['fab', 'html5']} style={{ color: '#ee652c' }} />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} style={{ color: '#20abdb' }} />
                                    <FontAwesomeIcon icon={['fab', 'js']} style={{ color: '#f9d837' }} />
                                </div>
                                <div className="text-figma">
                                    <p>Responsive : 390px</p>
                                </div>
                                <div className="btn-title">
                                <a href="https://clone-figma-template.netlify.app/?fbclid=IwAR2COAuyHsgrGkeybX6UwxwrD3qOwxfo1X_cfr1nK9YgZ9ftTauZWUYmqDo"><button>View</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="con-project" id="project">
                        <div className="project">
                            <div className="con-img">
                                <img src={process.env.PUBLIC_URL + 'frofile.png'} />
                            </div>
                            <div className="con-title">
                                <div className="tile1">
                                    <h3>React Profile</h3>
                                </div>
                                <div className="info1">
                                    <FontAwesomeIcon icon={['fab', 'react']} style={{ color: '#00d8fe' }} />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} style={{ color: '#20abdb' }} />
                                </div>
                                <div className="text-frofile">
                                    <p>Responsive : 428px, 768px</p>
                                </div>
                                <div className="btn-title">
                                    <a href="https://react-frofile-me.netlify.app/?fbclid=IwAR10A9EbIG9FAc8iha5nAnXVAauh4HioOmitDtFVGKwuGKi9pOTZvuwzDt4"><button>View</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project
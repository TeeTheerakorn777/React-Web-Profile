import React from 'react'
import './Skill.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas); // เพิ่ม package ของ free-brands-svg-icons เข้าไปใน library ของ FontAwesome

function Skill() {
    return (
        <div className="container-skill">
            <div className="text-skill" id="skill">
                <button>SKILLS</button>
            </div>

            <div className="con-card">
                <div className="card">
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'html5']} style={{ color: '#ee652c' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'css3-alt']} style={{ color: '#20abdb' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'js']} style={{ color: '#f9d837' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'php']} style={{ color: '#787cb4' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'react']} style={{ color: '#00d8fe' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'git-alt']} style={{ color: '#f05133' }} />
                    </div>
                    <div className="skill">
                        <FontAwesomeIcon icon={['fab', 'github']} style={{ color: '#fff' }} />
                    </div>
                    <div className="skill">
                        <img src={process.env.PUBLIC_URL + 'vscode.png'}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'Internet of Things (IoT)', level: 'Intermediate' },
        { name: 'Cybersecurity', level: 'Intermediate' },
        { name: 'Blockchain', level: 'Beginner' },
        { name: 'Web Development', level: 'Intermediate' },
        { name: 'Data Structures and Algorithms', level: 'Intermediate' },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong> - {skill.level}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
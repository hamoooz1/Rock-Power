import React from "react";
import "../styles/TopCategories.css"

const TopCategories = () => {
    const categories = [
        { name: "Digital Literacy", color: "#895BC04D", icon:"Icons/DigitalLiteracy.svg" },
        { name: "Professional Development", color: "#85F2894D", icon:"Icons/ProfessionalDevelopment.svg" },
        { name: "Teacher's Training", color: "#5B96C04D", icon:"Icons/TeacherTraining.svg" },
        { name: "Inclusivity", color: "#F57CE24D", icon:"Icons/Inclusivity.svg" }
    ];
    return (
        <div className="top-categories">
            <h1> Top Categories</h1>
            <div className="top-categories-container">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="top-categories-item"
                        style={{ backgroundColor: category.color }}
                    >
                        <img src={category.icon} alt="some text" />
                        <h2 className="top-categories-text">{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCategories
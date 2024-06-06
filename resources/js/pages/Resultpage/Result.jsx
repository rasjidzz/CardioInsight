import React from 'react';
import '../../../css/resultstyle.css';
import ResultLayout from '../../layout/ResultLayout';

const Result = () => {
    const userName = "Nama User"; // Ganti dengan nama user sebenarnya

    // Data dummy untuk showcase
    const resultData = {
        isPKV: true,
        name: "John Doe",
        age: 45,
        checkupPeriod: "28 Maret 2024",
        cholesterolStatus: "above-normal",
        cholesterolLevel: 220,
        glucoseStatus: "well-above-normal",
        glucoseLevel: 180,
        systolicBP: 140,
        diastolicBP: 90,
        pulse: 75,
        onBack: () => alert("Back button clicked"),
        onRecommend: () => alert("Recommendation sent to doctor"),
    };

    return (
        <ResultLayout userName={userName}>
            <div className="result-container w-full">
                <h1 className="result-highlight">
                    {resultData.isPKV
                        ? "Positive for Cardiovascular Disease"
                        : "Negative for Cardiovascular Disease"}
                </h1>

                <div className="user-info">
                    <p><strong>Name:</strong> {resultData.name}</p>
                    <p><strong>Age:</strong> {resultData.age}</p>
                    <p><strong>Check-up Period:</strong> {resultData.checkupPeriod}</p>
                </div>

                <div className="user-stats">
                    <div className="stat-item">
                        <h3>Cholesterol Level</h3>
                        <p className={`stat-value ${resultData.cholesterolStatus}`}>
                            {resultData.cholesterolStatus} ({resultData.cholesterolLevel} mg/dL)
                        </p>
                    </div>

                    <div className="stat-item">
                        <h3>Glucose Level</h3>
                        <p className={`stat-value ${resultData.glucoseStatus}`}>
                            {resultData.glucoseStatus} ({resultData.glucoseLevel} mg/dL)
                        </p>
                    </div>

                    <div className="stat-item blood-pressure">
                        <h3>Blood Pressure</h3>
                        <div className="blood-pressure-values">
                            <p><strong>SYS:</strong> {resultData.systolicBP} mmHg</p>
                            <p><strong>DIA:</strong> {resultData.diastolicBP} mmHg</p>
                            <p><strong>PULSE:</strong> {resultData.pulse} bpm</p>
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <button className="back-button" onClick={resultData.onBack}>
                        Back
                    </button>
                    <button className="doctor-button" onClick={resultData.onRecommend}>
                        Rekomendasi Dokter
                    </button>
                </div>
            </div>
        </ResultLayout>
    );
};

export default Result;

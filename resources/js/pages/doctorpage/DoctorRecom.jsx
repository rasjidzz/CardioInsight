import React, { useState } from "react";
import "../../../css/recomstyle.css";
import { Inertia } from "@inertiajs/inertia";

const DoctorRecom = () => {
    // Data dummy untuk showcase
    const resultData = {
        isPKV: true,
        name: "John Doe",
        age: 45,
        height: 175, // Tambahkan tinggi badan (cm)
        weight: 70, // Tambahkan berat badan (kg)
        smokeStatus: "no", // Tambahkan status merokok (yes/no)
        sportStatus: "yes", // Tambahkan status aktif berolahraga (yes/no)
        alcoholStatus: "yes", // Tambahkan status mengonsumsi alkohol (yes/no)
        checkupPeriod: "28 Maret 2024",
        cholesterolStatus: "above-normal",
        cholesterolLevel: 220,
        glucoseStatus: "well-above-normal",
        glucoseLevel: 180,
        systolicBP: 140,
        diastolicBP: 90,
        pulse: 75,
        onBack: () => alert("Back button clicked"),
        onRecommend: () => setShowModal(true),
    };

    const handleBack = () => {
        Inertia.visit("/doctor"); // Handle actual logout logic here
    };

    const [showModal, setShowModal] = useState(false);
    const [recommendationText, setRecommendationText] = useState("");

    const handleSendRecommendation = () => {
        // Kirim data rekomendasi, contoh:
        console.log("Data rekomendasi:", recommendationText);

        // Setelah pengiriman berhasil, tutup modal
        setShowModal(false);
    };

    return (
        <div className="page-container">
            <div className="result-container">
                <h1 className="result-highlight">
                    {resultData.isPKV
                        ? "Positive for Cardiovascular Disease"
                        : "Negative for Cardiovascular Disease"}
                </h1>

                <div className="user-info">
                    <p>
                        <strong>Name:</strong> {resultData.name}
                    </p>
                    <p>
                        <strong>Age:</strong> {resultData.age}
                    </p>
                    <p>
                        <strong>Height:</strong> {resultData.height} cm {/* Tampilkan tinggi badan */}
                    </p>
                    <p>
                        <strong>Weight:</strong> {resultData.weight} kg {/* Tampilkan berat badan */}
                    </p>
                    <p>
                        <strong>Smoke Status:</strong> {resultData.smokeStatus} {/* Tampilkan status merokok */}
                    </p>
                    <p>
                        <strong>Active in Sport:</strong> {resultData.sportStatus} {/* Tampilkan status aktif berolahraga */}
                    </p>
                    <p>
                        <strong>Alcohol Status:</strong> {resultData.alcoholStatus} {/* Tampilkan status mengonsumsi alkohol */}
                    </p>
                    <p>
                        <strong>Check-up Period:</strong> {resultData.checkupPeriod}
                    </p>
                </div>

                <div className="user-stats">
                    <div className="stat-item">
                        <h3>Cholesterol Level</h3>
                        <p className={`stat-value ${resultData.cholesterolStatus}`}>
                            {resultData.cholesterolStatus} (
                            {resultData.cholesterolLevel} mg/dL)
                        </p>
                    </div>

                    <div className="stat-item">
                        <h3>Glucose Level</h3>
                        <p className={`stat-value ${resultData.glucoseStatus}`}>
                            {resultData.glucoseStatus} ({resultData.glucoseLevel}{" "}
                            mg/dL)
                        </p>
                    </div>

                    <div className="stat-item blood-pressure">
                        <h3>Blood Pressure</h3>
                        <div className="blood-pressure-values">
                            <p>
                                <strong>SYS:</strong> {resultData.systolicBP} mmHg
                            </p>
                            <p>
                                <strong>DIA:</strong> {resultData.diastolicBP} mmHg
                            </p>
                            <p>
                                <strong>PULSE:</strong> {resultData.pulse} bpm
                            </p>
                        </div>
                    </div>
                </div>

                <div className="button-container">
                    <button className="back-button" onClick={handleBack}>
                        Back
                    </button>
                    <button
                        className="doctor-button"
                        onClick={resultData.onRecommend}
                    >
                        Berikan Rekomendasi
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <h2>Isi Rekomendasi</h2>
                        <textarea 
                            rows="4" 
                            cols="50" 
                            placeholder="Tuliskan rekomendasi Anda di sini..."
                            value={recommendationText}
                            onChange={(e) => setRecommendationText(e.target.value)}
                        ></textarea>
                        <button className="send-button" onClick={handleSendRecommendation}>Kirim</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorRecom;

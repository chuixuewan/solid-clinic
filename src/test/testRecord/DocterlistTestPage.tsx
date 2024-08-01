import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card'; // Adjust the path as necessary

// Define the type for a practitioner
interface Practitioner {
    webID: string;
    staffCode: string;
}

const DoctorListTestPage: React.FC = () => {
    const [doctors, setDoctors] = useState<Practitioner[]>([]);

    useEffect(() => {
        // Fetch doctors from the backend
        axios.get('http://localhost:3001/practitioners')
            .then(response => {
                // Filter only doctors
                const doctorsList = response.data.filter((practitioner: Practitioner) => practitioner.staffCode.startsWith('DOC'));
                setDoctors(doctorsList);
            })
            .catch(error => {
                console.error('There was an error fetching the doctors!', error);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Doctor List</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {doctors.map((doctor, index) => (
                    <Card 
                        key={index}
                        title={doctor.webID}
                        description={`Staff Code: ${doctor.staffCode}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default DoctorListTestPage;

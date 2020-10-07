import React, { useEffect, useState } from 'react';
import ProfileUi from 'react-profile-card';

function Employees() {

    const [employee, setEmployee] = useState();

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => setEmployee(data.results[0]));


    }, [])



    return (
        <>
            {employee &&
                <ProfileUi
                    imgUrl={employee.picture.large}
                    name={`${employee.name.first} ${employee.name.last}`}
                    designation={employee.gender}
                />}
        </>
    );
}

export default Employees;

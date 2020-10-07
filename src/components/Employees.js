import React, { useEffect, useState } from 'react';
import ProfileUi from 'react-profile-card';

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(data => setEmployees(data.data.splice(0, 5)));


    }, [])



    return (
        <>
            {employees && employees.map((item, i) => {
              return  <div key={i}>

                    <ProfileUi
                        imgUrl='https://www.osea-asia.com/wp-content/uploads/Dummy-Icon-Female.jpg'
                        name={item.employee_name}
                        designation={item.employee_age}
                    />
                </div>
            })}
        </>
    );
}

export default Employees;

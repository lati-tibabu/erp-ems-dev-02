import React from 'react'
import { useLocation } from 'react-router-dom'

function SchoolStudents() {
    const location = useLocation();

  return (
    <>
    <div>SchoolStudents</div>
    <div>
        {location.pathname.endsWith('/students') && <h1>Students</h1>}
    </div>
    </>
  )
}

export default SchoolStudents
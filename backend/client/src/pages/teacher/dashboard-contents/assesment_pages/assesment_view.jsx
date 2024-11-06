import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AssesmentView = () => {
    const navigate = useNavigate();
    const handleCloseButton = () => {
        navigate('/teacher/assesments/')
    }
  return (
    <div className='back-color-white w-100p p-10 br-10px'>
        <div className="w-100p flex-row justify-end pr-10">
            <FontAwesomeIcon 
                icon='fa-solid fa-xmark' 
                style={{cursor: 'pointer'}}
                onClick={handleCloseButton}
                className="p-5 w-20px h-20px back-color-red100 br-20px color-white"
                />
        </div>
        <div>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '10px', maxWidth: '500px' }}>
      
            {/* Basic Information */}
            <h3 style={{ marginBottom: '10px' }}>Assessment Details</h3>
            <p><strong>Name:</strong> <span>Midterm Exam</span></p>
            <p><strong>Type:</strong> <span>Exam</span></p>
            <p><strong>Class/Grade:</strong> <span>10th Grade</span></p>
            <p><strong>Maximum Mark:</strong> <span>100</span></p>

            {/* Key Analytics */}
            <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Performance Analytics</h3>
            <p><strong>Average Score:</strong> <span>75</span></p>
            <p><strong>Highest Score:</strong> <span>98</span></p>
            <p><strong>Lowest Score:</strong> <span>52</span></p>
            <p><strong>Pass Rate:</strong> <span>85%</span></p>

            {/* Comparative Insight */}
            <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Class Comparison</h3>
            <p><strong>Class Average:</strong> <span>78</span></p>
            </div>
        </div>
    </div>
  )
}

export default AssesmentView
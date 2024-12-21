import React, { Fragment, useEffect, useState } from 'react';
import { Heading3, Label } from '../../../components/Typography';
import ColumnWrapper from '../../../components/column_wrapper';
import RowWrapper from '../../../components/row_wrapper';
import { Checkbox } from '../../../components/input_field';
import { CheckboxWrapper } from '../../../components/wrapper';
import { SecondaryButton } from '../../../components/buttons';

// import SchoolListing from './school-pages/school-listing';
// import AddSchool from './school-pages/add-school';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../../store';


library.add(fas);


function School() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const [schoolWindow, setSchoolWindow] = useState('listing');
  const [schoolWindow, setSchoolWindow] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const [filterVisible, setFilterVisible] = useState(false)

  const [filters, setFilters] = useState([])

  const filterArray = []

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilters((prevState) => [...prevState, value]);  // Add the new filter
    } else {
      setFilters((prevState) => prevState.filter((filter) => filter !== value)); // This line of code filters out the unchecked filter from the `filters` state array. It does this by iterating over each element in the `prevState` array using the `filter` method. The `filter` method creates a new array with all elements that pass the test implemented by the provided function. In this case, the test is `(filter) => filter !== value`, which means that the element will be included in the new array if it is not equal to the `value` of the current event target. 
      // So, if the event target's value is 'active', this line of code will create a new array that only contains the elements from `prevState` that are not equal to 'active'. If `prevState` initially contains ['active', 'deleted'], the new state array will be `['deleted']`.
    }
  };

  
  let newFilters = []
  useEffect(() => {
    filters.length && dispatch(addFilter({ filters: filters }));
    
  }, [filters])

  const filtersState = useSelector((state) => state.filter.filters)

  // console.log("FilterStates", filtersState);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/admin/school/listing')) {
      setSchoolWindow('listing');
    } else if (location.pathname.startsWith('/admin/school/add')) {
      setSchoolWindow('add');
    }
  }, [location.pathname]);

  const handleFilterPrint = () => {
    // filterArray.push(filters)
    // console.log(filterArray);
    console.log(filters);
    
  }

  
  const handleAddSchoolClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      schoolWindow === 'listing' ? setSchoolWindow('add') : setSchoolWindow('listing');
      schoolWindow === 'listing' ? navigate('/admin/school/add') : navigate('/admin/school/listing/all');
      setIsLoading(false);
    }, 500); 
  };

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible)
  }
  const styles = {
    columnWrapper: {
      borderRadius: '15px',
      overflow: 'scroll',
      padding: '10px',
      border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      background: 'white',
    },
    rowWrapperTop: {
      width: '100%',
      justifyContent: 'space-between',
      border: 'none',
    },
    searchWrapper: {
      width: '300px',
      borderRadius: '20px',
      justifyContent: 'end',
      alignItems: 'center',
      padding: '0',
      // border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      border: '1px solid #e8e8e8',
    },
    searchInput: {
      borderRadius: '20px 0 0 20px',
      fontSize: '0.8rem',
      width: '100%',
      // minWidth: '300px',
      height: '60%',
      border: 'none',
    },
    searchIcon: {
      padding: '10px',
      borderRadius: '0 20px 20px 0',
      // background: '#0088ff',
      // background: '#e8e8e8',
      background: 'rgba(0,141,218,1)',
      cursor: 'pointer',
      width: '40px',
    },
    add_listing_button: {
      borderRadius: '5px',
      border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      maxWidth: '160px',
      height: '40px',
      fontSize: '0.8rem',
      fontWeight: '600',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
    },
    rowWrapperBottom: {
      gap: '5px',
      height: '100%',
      border: 'none',
    },
    filterColumnWrapper: {
      zIndex: '30',
      width: '200px',
      // height: '100%',
      // border: 'none',
      background: 'rgba(239,250,255,0.41)',
      backdropFilter: 'blur(15px)',
      padding: '30px',
      borderRadius: '20px',
      position: 'absolute',
  
      display: filterVisible ? 'flex' : 'none',
    },
    filterColumnInnerWrapper: {
      gap: '5px',
      border: 'none',
    },
    mainContentColumnWrapper: {
      width: '100%',
      border: 'none',
    },
    search_container: {
      border: 'none', 
      gap: '5px',
    },
    search_filter_container: {
      background: 'rgba(0,141,218,1)',
      borderRadius: '25px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 15px 0 15px',
      gap: '3px',
      cursor: 'pointer',
    },
    main_search_container:{
      // background'red',
      border: 'none',
    },
    filter_items: {
      // background'red',
      border: 'none',
      gap: '5px',
    },
    filter_item: {
      // border: 'none',
      padding: '2px 5px 2px 5px',
      borderRadius: '25px',
      gap: '5px',
      background: 'rgba(0,151,218,0.1)',
      borderWidth: '2px',
      borderColor: 'rgba(0,151,218,1)',
      alignItems: 'center',
      // cursor: 'pointer','
    },
    filter_item_label: {
      fontWeight: 'bold',
      color: 'rgba(0,151,218,1)',
    },
    filter_item_xmark: {
      cursor: 'pointer',
      width: '0.61rem',
      height: '0.61rem',
      // background: 'rgba(255,11,21,1)',
      color: 'rgba(0,151,218,1)',
      border: '2px solid rgba(0,151,218,1)',
      padding: '2px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <div>
      <Heading3 text="School Management" />
      <ColumnWrapper style={styles.columnWrapper}>
        <RowWrapper style={{ border: 'none' }}>

          <RowWrapper style={styles.rowWrapperTop}>

            {/* Search container */}

            <ColumnWrapper style={styles.main_search_container}>
              <RowWrapper style={styles.search_container}>
                
                <RowWrapper style={styles.search_filter_container} onClick={handleFilterClick}>
                  <FontAwesomeIcon icon='fa-solid fa-filter' style={{color: 'white'}} / >
                  <Label text="Filter Search" style={{fontWeight: 'bold', color: 'white'}}/>
                  {/* <h1>{onPage}</h1> */}
                </RowWrapper>

                <RowWrapper style={styles.searchWrapper}>
                  <input type="text" placeholder="Search school" style={styles.searchInput}/>
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    color="#fff"
                    onClick={() => {
                      alert('searching...');
                    }}
                    style={styles.searchIcon}
                  />
                </RowWrapper>
              </RowWrapper>
              <RowWrapper style={styles.filter_items}>

                  { filtersState.map((filter) => (
                      <RowWrapper style={styles.filter_item} key={filter}>

                          <Label text={filter} style={styles.filter_item_label}/>
                          {/* <FontAwesomeIcon icon='fa-solid fa-xmark' style={styles.filter_item_xmark}/> */}
                          {/* <Label text='Public' style={styles.filter_item_label}/>
                          <FontAwesomeIcon icon='fa-solid fa-xmark' style={styles.filter_item_xmark}/> */}
                      </RowWrapper>
              ))}

              </RowWrapper>
            </ColumnWrapper>
            
            {/* Add School and List School Buttons */}
            <SecondaryButton
              style={styles.add_listing_button}
              onClick={handleAddSchoolClick}
              disabled={isLoading}>
                {schoolWindow === 'listing' ? <FontAwesomeIcon icon="fa-solid fa-plus" /> : <FontAwesomeIcon icon="fa-solid fa-list" />}
                { isLoading ? 'Loading...' : schoolWindow === 'listing' ? 'Add School' : 'School Listing'}
            </SecondaryButton>

          </RowWrapper>

        </RowWrapper>

        <RowWrapper style={styles.rowWrapperBottom}>
          
          {/* Filtering Options */}
          <ColumnWrapper style={styles.filterColumnWrapper} >
            <Label text="Filter school search" />
            <ColumnWrapper style={styles.filterColumnInnerWrapper}>
              <CheckboxWrapper wrapperName="School Type" style={{ border: 'none', }}>
                <Checkbox itemName="Public" name="public"  value="Public" title="Public" onChange={handleFilterChange} />
                <Checkbox itemName="Private" name="private" value="Private" title="Private" onChange={handleFilterChange}/>
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="Location" style={{ border: 'none' }}>
                <Checkbox itemName="Urban" name="urban" value="Urban" title="Urban" onChange={handleFilterChange} />
                <Checkbox itemName="Rural" name="rural" value="Rural" title="Rural" onChange={handleFilterChange} />
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="School Level" style={{ border: 'none' }}>
                <Checkbox itemName="Primary" name="primary" value="Primary" title="Primary" onChange={handleFilterChange} />
                <Checkbox itemName="Secondary" name="secondary" value="Secondary" title="Secondary" onChange={handleFilterChange} />
                <Checkbox itemName="Higher" name="higher" value="Higher" title="Higher" onChange={handleFilterChange} />
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="Language Medium" style={{ border: 'none' }}>
                <Checkbox itemName="English" name="english" value="English" title="English" onChange={handleFilterChange} />
                <Checkbox itemName="Afaan Oromoo" name="afaan_oromoo" value="Afaan Oromoo" title="Afaan Oromoo" onChange={handleFilterChange} />
                <Checkbox itemName="Amharic" name="amharic" value="Amharic" title="Amharic" onChange={handleFilterChange} />
              </CheckboxWrapper>
              {/* <button onClick={handleFilterPrint}>Filter</button> */}
            </ColumnWrapper>
          </ColumnWrapper>

          <ColumnWrapper style={styles.mainContentColumnWrapper}>
            <Outlet />
          </ColumnWrapper>
        </RowWrapper>
      </ColumnWrapper>
    </div>
  );
}

export default School;

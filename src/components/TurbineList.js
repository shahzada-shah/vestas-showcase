import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { ProductContext } from './ProductContext';
import Turbine from './Turbine';

const TurbineList = () => {
  // Access the turbine data and loading state from the ProductContext
  const { turbines, loading } = useContext(ProductContext);

  // If loading is true, display a loading spinner
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  // If no turbines are found, display a message
  if (turbines.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing is found
      </div>
    );
  }

  // Render the turbine list
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {turbines.map((turbine, index) => {
            return (
              <Link to={`/turbine/${turbine.id}`} key={index}>
                <Turbine turbine={turbine} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TurbineList;

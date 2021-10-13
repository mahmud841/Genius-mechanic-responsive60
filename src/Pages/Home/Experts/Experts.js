import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
  {
    img: mechanic1,
    name: 'Will Smith',
    expertize: '-Engine Expert-'
  },
  {
    img: mechanic2,
    name: 'Will Smith2',
    expertize: '-Car Expert-'
  },
  {
    img: mechanic3,
    name: 'Leonardo Caprio',
    expertize: '-Titanic Expert-'
  },
  {
    img: mechanic4,
    name: 'Will Smith3',
    expertize: '-Alrounder Expert-'
  }
]

const Experts = () => {
  return (
    <div id="experts"  className="container">
      <h2 className="text-primary mt-5">Our Experts </h2>
      <div className="row">
      {
        experts.map(expert =><Expert
        key={expert.name} 
        expert={expert}
        >       
        </Expert> )
      }
      </div>
    </div>
  );
};

export default Experts;
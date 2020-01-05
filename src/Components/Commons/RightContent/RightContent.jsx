import React, { Component } from 'react';
import TopPostList from './TopPostList/TopPostList';
import TopTags from './TopTags/TopTags';
import FormSign from './FormSign/FormSign';
import adsimg from '../../../Assets/ads.png';
import { Link } from 'react-router-dom';

class RightContent extends Component {
  render() {
    return (
      <div>
        <TopPostList />
        <FormSign />
        <TopTags />
        <Link>
          <div
            style={{
              height: '250px',
              width: '100%',
              backgroundColor: 'black',
              backgroundImage: `url(${adsimg})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              margin: '20px 10px'
            }}
          ></div>
        </Link>
      </div>
    );
  }
}
export default RightContent;

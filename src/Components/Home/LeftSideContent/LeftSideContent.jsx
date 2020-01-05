import React from 'react';
import TopPostsByCate from './TopPostsByCate/TopPostsByCate';
import MultiPostList from './MultiPostList/MultiPostList';
class LeftSideContent extends React.Component {
  render() {
    return (
      <div>
        <TopPostsByCate />
        <MultiPostList />
      </div>
    );
  }
}
export default LeftSideContent;

/* eslint-disable import/no-extraneous-dependencies */

import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { SortableTreeWithoutDndContext as SortableTree } from '../../src';

// https://stackoverflow.com/a/4819886/1601953
const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Chicken', expanded: true, children: [{ title: 'Egg' }] },
      ],
    };
  }

  render() {
    return (
      <div>
        <span>
          This is {!isTouchDevice && 'not '}a touch-supporting browser
        </span>

        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
          />
        </div>
      </div>
    );
  }
}

export default DragDropContext(isTouchDevice ? TouchBackend : HTML5Backend)(
  App
);

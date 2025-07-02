import React from 'react'

import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [{ value: 1 }, { value: 3 }],
        [{ value: 2 }, { value: 4 }],
      ],
    };
  }


  handleSelect = () => {
    // const grid = [
    //   [{value: 5}, {value: 6}]
    // ]
    // this.setState({grid})
    return
  }

  render() {
    return (
      <ReactDataSheet
        data={this.state.grid}
        valueRenderer={cell => cell.value}
        valueViewer={props => (<div>{props.value}</div>)}
        onSelect={this.handleSelect}
        cellRenderer={props => {
          const { children, className, ...rest } = props
          console.log(rest)
          return (
          <td className={'aaa ' + className} {...rest}>{props.children}</td>
          )
        }}

        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row]);
          changes.forEach(({ cell, row, col, value }) => {
            grid[row][col] = { ...grid[row][col], value };
          });
          this.setState({ grid });
        }}
      />
    );
  }
}

export default App
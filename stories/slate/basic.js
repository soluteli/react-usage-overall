// Import React!
import React from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'A line of text in a paragraph.',
          },
        ],
      },
    ],
  },
})

// Define a React component renderer for our code blocks.
function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

// Define our app...
class App extends React.Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue,
  }

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    // console.log('value', value);
    
    this.setState({ value })
  }

  // Define a new handler which prints the key that was pressed.
  onKeyDown = (event, editor, next) => {
    console.log('onKeyDown', event.key)
    if (event.key != '`' || !event.ctrlKey) return next()
    event.preventDefault()
    const isCode = editor.value.blocks.some(block => block.type == 'code')

    editor.setBlocks(isCode ? 'paragraph' : 'code')
    return true
  }

  // Render the editor.
  render() {
    return <Editor
      value={this.state.value}
      onChange={this.onChange}
      onKeyDown={this.onKeyDown}
      renderBlock={this.renderBlock}
    />
  }

  // Add a `renderBlock` method to render a `CodeNode` for code blocks.
  renderBlock = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next()
    }
  }
}

export default App

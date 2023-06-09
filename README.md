# ts-simple-modal

`ts-simple-modal` is a simple and customizable modal component for React applications, written in TypeScript.

## Installation

To install `ts-simple-modal`, you can use npm or yarn:

```bash
npm install ts-simple-modal
```

or 

```bash
yarn add ts-simple-modal
```

## Usage

Here's a simple example of how to use the ts-simple-modal component:

```jsx
import React, { useState } from 'react';
import Modal from 'ts-simple-modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <h1>Hello, world!</h1>
        <p>Welcome to my modal!</p>
      </Modal>
    </div>
  );
}

export default App;

```

## Props

ts-simple-modal accepts the following props:

    - show (boolean): Determines whether the modal is visible.
    - onClose (function): A function that will be called when the user attempts to close the modal.
    - children (ReactNode): The content to display inside the modal.
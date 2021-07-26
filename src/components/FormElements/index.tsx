import React, { FormEvent } from 'react';
import { FormElementsProps, FormElementsState } from './interface';

class FormElements extends React.Component<FormElementsProps, FormElementsState> {
  constructor(props: FormElementsProps) {
    super(props);

    this.state = {
      inputValue: 'test',
      textareaValue: 'textarea',
      selectValue: 'guava'
    };
  }

  handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { value, name } = event.currentTarget;

    this.setState({
      [name]: value,
    } as unknown as FormElementsState)
  }

  render() {
    const { inputValue, textareaValue, selectValue } = this.state;

    return (
      <form onSubmit={this.handleOnSubmit}>
        Input:
        <input defaultValue={inputValue} name="inputValue" />
        <br />
        Textarea:
        <textarea defaultValue={textareaValue} name="textareaValue" />
        <br />
        Select:
        <select defaultValue={selectValue} name="selectValue">
          <option value="mango">Mango</option>
          <option value="apple">Apple</option>
          <option value="guava">Guava</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    )
  }
}

export default FormElements;
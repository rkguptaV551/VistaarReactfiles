import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

xdescribe('Greeting component', () => {
  xtest('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });


  xtest('renders "good to see you" if the button Not Clicked' , () =>{
    //Arrange
    render(<Greeting />);
    //Act
    const outputElement = screen.getByText('good to see you',{exact:false});
    //Assert
    expect(outputElement).toBeInTheDocument();

  })




  test('renders "Changed" if the button is clicked' , () =>{
    //Arrange
    render(<Greeting />);
    //Act
 const buttonElement = screen.getByRole('button');
 userEvent.click(buttonElement);
 
    //Assert
    const outputElement = screen.getByText('Changed!') ;
    expect(outputElement).toBeInTheDocument();

  })

  test('does not renders "good to see you"  if the button is clicked' , () =>{
    //Arrange
    render(<Greeting />);
    //Act
 const buttonElement = screen.getByRole('button');
 userEvent.click(buttonElement);
 
    //Assert
    const outputElement = screen.queryByText('good to see you',{exact:false}) ;
    expect(outputElement).toBeNull();

  })
  
  
  


  

  
});

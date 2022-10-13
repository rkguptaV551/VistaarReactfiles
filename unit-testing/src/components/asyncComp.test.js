import {render,screen} from'@testing-library/react'
import AsyncComp from './asyncComp'

xdescribe("Async Componenet" , () => {
    xtest('renders posts if request succeeds', async() =>{
        render(<AsyncComp />)
        const listItemElements = await screen.findAllByRole('listitem');

        //Assert
        expect(listItemElements).not.toHaveLength(0);

    });

    xtest('renders post data objects if request succeeds' , async () => {
     window.fetch = jest.fn() ;
     window.fetch.mockResolvedValueOnce({
        json:async() => [{id:'p1' , title:"First Post",post:"Post Lorem Ipsum"}]
     });
     render(<AsyncComp />) ;

     const listItemElements = await screen.findAllByRole('listitem');
     expect(listItemElements).not.toHaveLength(0);

    })
})

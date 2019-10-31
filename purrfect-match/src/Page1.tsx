import React from 'react';
import { Modal } from "./Modal";
import cat from "./pictures/cat.jpg";
import logo from "./pictures/purrfectmatch.jpeg";

interface PageProps {
};

interface PageState {
    modalOpen: boolean;
};

export class Page1 extends React.Component<PageProps, PageState> {

    constructor(props: any) {
        super(props);

        this.state = {
            modalOpen: false
        };
    }
    public render() {
        return (
            <div className="bgred">
                <h1 className="topBar">
                    <img id="logo" src={logo} alt="Purrfect Match Logo" />
                    Purrfect Match
                </h1>
                <Modal display={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false })}>
                    <img id="successStoryImage" src={cat} alt="Cat"/> 
                    <div id="successStoryText">
                        <h1 id="successStoryHeader"> 
                            Name: Ollie
                            <br />Age: 3 years
                            <br />Breed: American Shorthair
                            <br />Adopted: 10/24/2019
                            <br />
                            <br />
                            A message from Ollie's owner, Bob:
                        </h1>
                        <p> 
                            Ollie has been a real friend! Coming home from a crazy day at work, I get to look forward to this goofball greeting me with lots of purring and cuddles. I found Ollie through Purrfect Match. I couldn’t go to my local shelter without first knowing if I had a specific pet in mind, because I can’t be away from work for very long during business hours. Perrfect Match helped me find Ollie, and I’m so happy he’s in my life! He’s a cutie, and I can’t imagine not having found him.
                        </p>
                    </div>
                </Modal>
                <div> Open popup: <button onClick={() => { this.setState({ modalOpen: true }) }}>button</button> </div>
            </div>);
    }

}


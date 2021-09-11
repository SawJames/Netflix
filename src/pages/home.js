import React from 'react'
import {HeaderContainer} from '../containers/header'
import {OptForm, Feature} from '../components'
import {JumbotronContainer} from '../containers/jumbotron'
import {FaqsContainer} from '../containers/faqs'
import {FooterContainer} from '../containers/footer'


export default function Home() {
    return (
        <>
            <HeaderContainer>
            <Feature>
            <Feature.Title>Unlimited Movies, TV Shows and more</Feature.Title>
            <Feature.SubTitle>Watch anywhere, Cancle anytime.</Feature.SubTitle>
            <OptForm.Text>Ready to watch? Enter your email to create or Restart your membership.</OptForm.Text>
            <OptForm>
                
                <OptForm.Input placeholder="Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                
            </OptForm>
            </Feature>
            </HeaderContainer>
            
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}

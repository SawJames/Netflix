import React from 'react'
import {Container, Title, SubTitle} from './style/feature'

export default function Feature({children, ...restPros}) {
    return <Container {...restPros}>{children}</Container>
}

Feature.Title = function FeatureTitle({children, ...restPros}) {
    return <Title {...restPros}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({children, ...restPros}) {
    return <SubTitle {...restPros}>{children}</SubTitle>
}
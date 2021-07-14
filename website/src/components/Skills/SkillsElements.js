import styled from 'styled-components';

export const SkillsContainer = styled.div`
    background-color: #fff;
`

export const SkillsWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SkillsTitleContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const SkillsTitleWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SkillsItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #01bf71;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const SkillsItemsTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`

export const SkillsTitle = styled.p`
    color: #000;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
`

export const SkillsText = styled.h1`
    margin-top: 10px;
    color: #01bf71;
`


import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    user-select: none;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;
`

export const Cards = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const WeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${props => props.image}), linear-gradient(to left, #7474BF, #348AC7);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-width: 240px;
    min-height: 340px;
    padding: 30px;
    border-radius: 30px;
    color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);;
`

export const WeatherHeader = styled.header``

export const WeatherDayName = styled.h1`
    font-weight: bold;
`

export const WeatherYearDay = styled.p``

export const WeatherLocation = styled.p`
    margin-top: 10px;
`

export const WeatherCardContent = styled.div``

export const WeatherCardTemperature = styled.p`
    font-size: 50px;
    font-weight: bold;
`

export const WeatherCardCondition = styled.p`
    font-size: 20px;
    font-weight: bold;
`

export const InfoCard = styled.div`
    background-color: #21242b;
    width: 245px;
    height: 293px;
    padding: 30px;
    border-radius: 0 30px 30px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: #fff;
`

export const InfoCardHeader = styled.header``

export const InfoCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80%;
`

export const InfoCardInfo = styled.p`
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    span {
        font-size: 16px;
    }
`

export const InfoCardDaysPreview = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    background-color: #232531;
    border-radius: 11px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const InfoCardDayPreview = styled.div`
    padding: 10px;
    display: flex;
    height: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${props => props.active ? 'white' : '#232531'};
    color: ${props => props.active ? '#232531' : 'white'};
    border-radius: 11px;
`

export const InfoCardDay = styled.p`
    font-size: 15px;
`

export const InfoCardTemp = styled.p`
    font-size: 16px;
    font-weight: bold;
`

export const InfoCardChangeLocation = styled.button`
    color: #fff;
    background-image: linear-gradient(to left, #7474BF, #348AC7);
    border: none;
    border-radius: 30px;
    padding: 15px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
`
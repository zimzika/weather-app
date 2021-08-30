import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faSun,
    faCloud,
    faCloudRain,
    faCloudShowersHeavy
} from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    Content,
    Cards,
    WeatherCard,
    WeatherHeader,
    WeatherDayName,
    WeatherYearDay,
    WeatherLocation,
    WeatherCardContent,
    WeatherCardTemperature,
    WeatherCardCondition,
    InfoCard,
    InfoCardHeader,
    InfoCardContent,
    InfoCardInfo,
    InfoCardDaysPreview,
    InfoCardDayPreview,
    InfoCardDay,
    InfoCardTemp,
    InfoCardChangeLocation
} from './Elements';

const Weather = () => {
    const [weather, setWeather] = useState({});

    // key c7ac89635ae942dc72f9641363823373

    // useEffect(() => {
    //     fetch("http://apiadvisor.climatempo.com.br/api/v1/climate/rain/locale/3477?token=ba6cb8dddbc396fa45d5ef0334c9b5ea")
    //         .then(response => response.json())
    //         .then(data => setWeather(data.results));
    // }, []);

    return (
        <>
            <Container>
                <Content>
                    <Cards>
                        <WeatherCard>
                            <WeatherHeader>
                                <WeatherDayName>Tuesday</WeatherDayName>
                                <WeatherYearDay>15 Jan 2019</WeatherYearDay>
                                <WeatherLocation><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Paris, FR</WeatherLocation>
                            </WeatherHeader>
                            <WeatherCardContent>
                                <FontAwesomeIcon icon={faSun} size="4x" />
                                <WeatherCardTemperature>29&#8451;</WeatherCardTemperature>
                                <WeatherCardCondition>Sunny</WeatherCardCondition>
                            </WeatherCardContent>
                        </WeatherCard>
                        <InfoCard>
                            <InfoCardHeader>
                                <InfoCardInfo>PRECIPITATION <span>0%</span></InfoCardInfo>
                                <InfoCardInfo>HUMIDITY <span>34%</span></InfoCardInfo>
                                <InfoCardInfo>WIND <span>0 km/h</span></InfoCardInfo>
                            </InfoCardHeader>
                            <InfoCardContent>
                                <InfoCardDaysPreview>
                                    <InfoCardDayPreview active={true}>
                                        <FontAwesomeIcon icon={faSun} size="3px" />
                                        <InfoCardDay>Tue</InfoCardDay>
                                        <InfoCardTemp>29&#8451;</InfoCardTemp>
                                    </InfoCardDayPreview>
                                    <InfoCardDayPreview>
                                        <FontAwesomeIcon icon={faCloud} size="3px" />
                                        <InfoCardDay>Wed</InfoCardDay>
                                        <InfoCardTemp>21&#8451;</InfoCardTemp>
                                    </InfoCardDayPreview>
                                    <InfoCardDayPreview>
                                        <FontAwesomeIcon icon={faCloudRain} size="3px" />
                                        <InfoCardDay>Thu</InfoCardDay>
                                        <InfoCardTemp>08&#8451;</InfoCardTemp>
                                    </InfoCardDayPreview>
                                    <InfoCardDayPreview>
                                        <FontAwesomeIcon icon={faCloudShowersHeavy} size="3px" />
                                        <InfoCardDay>Fry</InfoCardDay>
                                        <InfoCardTemp>19&#8451;</InfoCardTemp>
                                    </InfoCardDayPreview>
                                </InfoCardDaysPreview>
                                <InfoCardChangeLocation><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Change location</InfoCardChangeLocation>
                            </InfoCardContent>
                        </InfoCard>
                    </Cards>
                </Content>
            </Container>
        </>
    );
}

export default Weather;
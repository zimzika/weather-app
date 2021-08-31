import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faSun,
    faMoon,
    faCloudSun,
    faCloudSunRain,
    faCloudMoon,
    faCloudMoonRain,
    faCloudShowersHeavy,
    faSnowflake
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

import sunny from '../../assets/sunny.jpg';
import clear_n from '../../assets/clear_n.jpg';
import clouds from '../../assets/clouds.jpg';
import clouds_n from '../../assets/clouds_night.jpeg';
import rain from '../../assets/rain.jpg';
import rain_n from '../../assets/rain_n.jpg';
import thunderstorm from '../../assets/thunderstorm.jpg';
import snow from '../../assets/day_snow.jpg';
import snow_n from '../../assets/night_snow.jpg';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [weatherList, setWeatherList] = useState({});
    const [loading, setLoading] = useState(true);
    const [bgImage, setbgImage] = useState(null);
    const [icon, setIcon] = useState(null);

    const [location, setLocation] = useState(localStorage.getItem('location') || 'sao paulo');

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // key c7ac89635ae942dc72f9641363823373

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c7ac89635ae942dc72f9641363823373`)
            .then(response => response.json())
            .then(data => {
                if (data.cod != 200) {
                    setLocation('sao paulo');
                    return;
                }

                setWeather(data);

                // data.weather[0].main = "Snow";

                if (data.weather[0].main === 'Clear') {
                    if (data.weather[0].icon.search('d') !== -1) {
                        setbgImage(sunny);
                        setIcon(faSun);
                    } else {
                        setbgImage(clear_n);
                        setIcon(faMoon);
                    }
                } else if (data.weather[0].main === 'Clouds') {
                    if (data.weather[0].icon.search('d') !== -1) {
                        setbgImage(clouds);
                        setIcon(faCloudSun);
                    } else {
                        setbgImage(clouds_n);
                        setIcon(faCloudMoon);
                    }
                } else if (data.weather[0].main === 'Rain') {
                    if (data.weather[0].icon.search('d') !== -1) {
                        setIcon(faCloudSunRain);
                        setbgImage(rain);
                    } else {
                        setIcon(faCloudMoonRain);
                        setbgImage(rain_n);
                    }
                } else if (data.weather[0].main === 'Thunderstorm') {
                    setbgImage(thunderstorm);
                    if (data.weather[0].icon.search('d') !== -1) {
                        setIcon(faCloudSunRain);
                    } else {
                        setIcon(faCloudMoonRain);
                    }
                } else if (data.weather[0].main === 'Snow') {
                    setIcon(faSnowflake);
                    if (data.weather[0].icon.search('d') !== -1) {
                        setbgImage(snow);
                    } else {
                        setbgImage(snow_n);
                    }
                } else if (data.weather[0].main === 'Drizzle') {
                    if (data.weather[0].icon.search('d') !== -1) {
                        setIcon(faCloudSunRain);
                        setbgImage(rain);
                    } else {
                        setIcon(faCloudMoonRain);
                        setbgImage(rain_n);
                    }
                }
            });

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=c7ac89635ae942dc72f9641363823373`)
            .then(response => response.json())
            .then(data => {
                if (data.cod != 200) {
                    setLocation('sao paulo');
                    return;
                }

                setWeatherList(data);
                setLoading(false);
            });
    }, [location]);

    const date = new Date((weather.dt - weather.timezone) * 1000);

    return (
        <>
            {
                loading ? (
                    <h1>Loading</h1>
                ) : (
                    <Container>
                        <Content>
                            <Cards>
                                <WeatherCard image={bgImage}>
                                    <WeatherHeader>
                                        <WeatherDayName>{days[date.getDay()]}</WeatherDayName>
                                        <WeatherYearDay>{date.getUTCDate()} {monthNames[date.getMonth()]} {date.getFullYear()}</WeatherYearDay>
                                        <WeatherLocation><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> {weather.name}, {weather.sys.country}</WeatherLocation>
                                    </WeatherHeader>
                                    <WeatherCardContent>
                                        <FontAwesomeIcon icon={icon} size="4x" />
                                        <WeatherCardTemperature>{parseInt(weather.main.temp, 10)}&#8451;</WeatherCardTemperature>
                                        <WeatherCardCondition>{weather.weather[0].main}</WeatherCardCondition>
                                    </WeatherCardContent>
                                </WeatherCard>
                                <InfoCard>
                                    <InfoCardHeader>
                                        <InfoCardInfo>PRESSURE  <span>{weather.main.pressure} hPa</span></InfoCardInfo>
                                        <InfoCardInfo>HUMIDITY <span>{weather.main.humidity}%</span></InfoCardInfo>
                                        <InfoCardInfo>WIND <span>{weather.wind.speed} m/s</span></InfoCardInfo>
                                    </InfoCardHeader>
                                    <InfoCardContent>
                                        <InfoCardDaysPreview>
                                            {
                                                weatherList.list.map((item, index) => {
                                                    if (index > 0 && index <= 3) {
                                                        return (
                                                            <InfoCardDayPreview>
                                                                {
                                                                    item.weather[0].main === 'Clear' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faSun} size="2x" />
                                                                    ) : item.weather[0].main === 'Clear' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faMoon} size="2x" />
                                                                    ) : item.weather[0].main === 'Clouds' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudSun} size="2x" />
                                                                    ) : item.weather[0].main === 'Clouds' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudMoon} size="2x" />
                                                                    ) : item.weather[0].main === 'Rain' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudSunRain} size="2x" />
                                                                    ) : item.weather[0].main === 'Rain' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudMoonRain} size="2x" />
                                                                    ) : item.weather[0].main === 'Thunderstorm' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudSunRain} size="2x" />
                                                                    ) : item.weather[0].main === 'Thunderstorm' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudMoonRain} size="2x" />
                                                                    ) : item.weather[0].main === 'Snow' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faSnowflake} size="2x" />
                                                                    ) : item.weather[0].main === 'Snow' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faSnowflake} size="2x" />
                                                                    ) : item.weather[0].main === 'Drizzle' && item.weather[0].icon.search('d') !== -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudSunRain} size="2x" />
                                                                    ) : item.weather[0].main === 'Drizzle' && item.weather[0].icon.search('d') === -1 ? (
                                                                        <FontAwesomeIcon icon={faCloudMoonRain} size="2x" />
                                                                    ) : null
                                                                }
                                                                <InfoCardDay>{days[new Date((item.dt - weather.timezone) * 1000).getDay()]}</InfoCardDay>
                                                                <InfoCardTemp>{parseInt(item.main.temp, 10)}&#8451;</InfoCardTemp>
                                                            </InfoCardDayPreview>
                                                        )
                                                    }
                                                })
                                            }
                                        </InfoCardDaysPreview>
                                        <InfoCardChangeLocation onClick={() => {
                                            let location = prompt('Location:')
                                            setLocation(location || localStorage.getItem('location'));
                                            if (location) {
                                                localStorage.setItem('location', location);
                                            }
                                        }}><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Change location</InfoCardChangeLocation>
                                    </InfoCardContent>
                                </InfoCard>
                            </Cards>
                        </Content>
                    </Container>
                )
            }
        </>
    );
}

export default Weather;
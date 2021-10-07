import React from 'react';
import * as s from './Country.styles';

const Country = (props) => {
    const country = props.match.params.country;
    console.log(country);
    const countries = {
        canada: {
            img: 'https://images.pexels.com/photos/756790/pexels-photo-756790.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            description: 'Canada is chilly'
        },
        brazil: {
            img: 'https://images.pexels.com/photos/58461/pexels-photo-58461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'Brazil is sunny'
        },
        australia: {
            img: 'https://images.pexels.com/photos/2615031/pexels-photo-2615031.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'Australia is boring'
        },
        india: {
            img: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'India is awesome'
        },
        moldova: {
            img: 'https://images.pexels.com/photos/205077/pexels-photo-205077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'Moldova is beautiful'
        },
        kenya: {
            img: 'https://images.pexels.com/photos/3992510/pexels-photo-3992510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            description: 'Kenya is breathtaking'
        }
    }

    return (
        <s.CountryContainer>
            <s.CountryImage img={countries[country]['img']}/>
            <s.CountryDescription>
                {countries[country]['description']}
            </s.CountryDescription>
        </s.CountryContainer>
    )
}

export default Country;
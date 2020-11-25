import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './weather-test.css';
import { data } from 'jquery';

// const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&appid=92c5ec943fed63edfcb280cc5b3b8af3';
// const ApiKey = '92c5ec943fed63edfcb280cc5b3b8af3';

class Weathertest extends Component {
    constructor() {
        super()
        this.state = {
            tempSun: '',
            tempMon: '',
            tempTue: '',
            tempWen: '',
            tempThu: '',
            tempFri: '',
            tempSat: '',
            temp: '',
            date: "",
            city: "",
            descreption: "",
            day: ""
        }
        // var date ;
        // var day = new Date(this.date)
    }

    // getWeather= async ()=>{
    //     axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&appid=92c5ec943fed63edfcb280cc5b3b8af3")
    //     .then()
    // }



    componentDidMount = async () => {


        var api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Ramallah&units=metric&appid=92c5ec943fed63edfcb280cc5b3b8af3`)

        var data = await api.json();


        //this.day= data.list[0].dt 
        //console.log(new Date(this.day).getFullYear())
        var fullDate = new Date(data.list[0].dt).getDate() + ' ' + new Date(data.list[0].dt).getMonth() + ' ' + new Date(data.list[0].dt).getFullYear() + ' ';
        //console.log(fullDate)
        // var tempC = Math.floor((5 / 9) * (this.state.temp - 32));
        var d = new Date();
        var weekday = [];
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var day = weekday[d.getDay()];
        this.setState(
            {

                city: "Ramallah",
                temp: (data.list[0].main.temp),
                date: data.list[0].dt_txt,
                descreption: data.list[0].weather.description,
                tempSun: data.list[0].main.temp,
                tempMon: data.list[3].main.temp,
                tempTue: data.list[6].main.temp,
                tempWen: data.list[9].main.temp,
                tempThu: data.list[12].main.temp,
                tempFri: data.list[15].main.temp,
                tempSat: data.list[18].main.temp,
                day


                //day:new Date(this.state.date).getFullYear()
            }
        )
    }





    getWeather = async (e) => {
        console.log(e.target.value)
        var city = e.target.value;



        var api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=92c5ec943fed63edfcb280cc5b3b8af3`)

        var data = await api.json();
        console.log(data)
        var fullDate = new Date(data.list[0].dt).getDate() + ' ' + new Date(data.list[0].dt).getMonth() + ' ' + new Date(data.list[0].dt).getFullYear() + ' ';
        var d = new Date();
        var weekday = [];
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var day = weekday[d.getDay()];

        // console.log(data)
        this.setState(
            {
                city,
                temp: (data.list[0].main.temp),
                date: data.list[0].dt_txt,
                descreption: data.list[0].weather.description,
                tempSun: data.list[0].main.temp,
                tempMon: data.list[3].main.temp,
                tempTue: data.list[6].main.temp,
                tempWen: data.list[9].main.temp,
                tempThu: data.list[12].main.temp,
                tempFri: data.list[15].main.temp,
                tempSat: data.list[18].main.temp,
                day
            }
        )
        // var date1 = Math.floor((data.list[0].dt).getTime()/1000.0)
        // console.log(this.state)
        // console.log( date1)
        //console.log(data.list[0].weather.description)

        // console.log(data.list[0].weather[0].description)


    }


    render() {
        //console.log(this.day)
        return (


            <div className="d-flex  flex-row-reverse" id="weather-comp">
                <div class="input-group mb-3" id="weather">
                    <form className="weatherId">
                        <select onChange={this.getWeather} class="custom-select" id="inputGroupSelect01" >
                            {/* <option selected>Choose City</option> */}
                            <option value="Nablus">Nablus</option>
                            <option value="Ramallah" selected>Ramallah</option>
                            <option value="Hebron">Hebron</option>
                            <option value="Ţūbās">Ţūbās</option>
                            <option value="Tulkarm">Tulkarm</option>
                            <option value="Jenin">Jenin</option>
                            <option value="Jericho">Jericho</option>
                            <option value="Jerusalem">Jerusalem</option>
                            <option value="Bethlehem">Bethlehem</option>
                            <option value="Gaza">Gaza</option>
                            <option value="Salfīt">Salfīt</option>
                        </select>

                        <br />

                    </form>
                    <div id="WeatherDays">
                        <div className="container">
                            <div className="row">
                                {/* <button onClick={this.getWeather} type="button" id="butoon-getweather" class="btn btn-primary btn-sm">Get Weather</button> */}

                            </div>
                        </div>
                    </div>

                </div>


                <div className="page-content page-container" id="page-content">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-lg-8 grid-margin stretch-card">

                            <div className="card card-weather">
                                <div className="card-body">
                                    <div className="weather-date-location">
                                        <h3>{this.state.day}</h3>
                                        <p className="text-gray"> <span className="weather-date">{this.state.date}</span> &nbsp;&nbsp; <span className="weather-location">  {this.state.city}, Palestine</span> </p>
                                    </div>

                                    <div className="weather-data d-flex">
                                        <div className="mr-auto">
                                            <h4 className="display-3">{this.state.temp} <span className="symbol">°</span>C</h4>
                                            <p> {this.state.descreption} </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="card-body p-0" >
                                    <div className="d-flex weakly-weather">
                                        <div className="weakly-weather-item">
                                            <p className="mb-0"> Sun </p> <i className="mdi mdi-weather-cloudy"></i>
                                            <p className="mb-0">{this.state.tempSat}°</p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Mon </p> <i className="mdi mdi-weather-hail"></i>
                                            <p className="mb-0"> {this.state.tempMon}° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Tue </p> <i className="mdi mdi-weather-partlycloudy"></i>
                                            <p className="mb-0">{this.state.tempTue}° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Wed </p> <i className="mdi mdi-weather-pouring"></i>
                                            <p className="mb-0"> {this.state.tempWen}° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Thu </p> <i className="mdi mdi-weather-pouring"></i>
                                            <p className="mb-0"> {this.state.tempThu}° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Fri </p> <i className="mdi mdi-weather-snowy-rainy"></i>
                                            <p className="mb-0"> {this.state.tempFri}° </p>
                                        </div>
                                        <div className="weakly-weather-item">
                                            <p className="mb-1"> Sat </p> <i className="mdi mdi-weather-snowy"></i>
                                            <p className="mb-0"> {this.state.tempSat}° </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )
    }

}

export default Weathertest;


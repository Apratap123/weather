import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({ info }) {
  const INIT_URL =
    'https://media.istockphoto.com/id/1207000862/photo/woman-resting-at-sunset-with-a-bicycle.jpg?s=612x612&w=is&k=20&c=6Uo1-TLnJVWxft3uhdFC2e3nwLgOtSoYREqDEHSm5y4='

  let COLD_URL = 'https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  let HOT_URL = 'https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=612x612&w=is&k=20&c=BGUWvOZp-tqxGzKABRNgMbBQUeNeirukuJqfP9Bf324='
  let RAIN_URL = 'https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {info.city} {
                  info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                  ? <WbSunnyIcon/>
                  : <AcUnitIcon />
              }
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              component={'span'}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>${info.weather}</i> feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

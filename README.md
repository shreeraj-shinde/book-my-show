
# Book My Show Clone

Developed book my Show clone with React.js learnt about Context API  


## Technologies Used

### Front End

   #### 1. React.js
   #### 2. Tailwind CSS

### Backend / API
   #### 1. The Movies Database(TMDB) 


### React Libraries used : 

#### 1. *React Icons* - for icons
#### 2. *React Slick* - for creating sliders and carousels
#### 3. *React Router Dom* 
## API Reference

#### Get all Popular Movies

```http
  GET /api_base_url/movie/popular
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**.  API key |

#### Get all Top rated Movies
```http
  GET /api_base_url/movie/top_rated
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**.  API key |



#### Get Movie with id

```http
  GET /api_base_url/movie/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


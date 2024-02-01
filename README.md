# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form : Email & Password
- Sign Up Form : Name, Email & Password
- Form Validation
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account in firebase
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Sign up user displayName and Profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file.
- Register TMDB API & create an app and get access token
- Get Data From TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & Secondary container :

* - MovieList - Popular
* - MovieCard \* n
* - MovieList - Now Playing
* - MovieList - Trending
* - MovieList - Horror

- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the YouTube video and make it autoplay and mute
- Tailwind Classes to make Main container look awesome
- Secondary container
- Build Secondary Component
- Buil the Movie List
- Build Movie Card
- TMDB Image CDN URL
- MOde the browse page amazing With Tailwind CSS
- usePopularMovies Custome Hook
- useTopRatedMovies Custome Hook
- useUpComingMovies Custome Hook

```jsx
export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
```

- useRef Hook

# Features

- Login/Sign Up

  - Sign In/Sign up Form
  - redirect to Browse Page

- Browse Page (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N (Lot of Movies)

- NetflixGPT
  - Search Bar
  - Movies Suggestions

# Steps for Deployment on Firebase

0. Install firebase CLI - `npm install -g firebase-tools`

- After that I try to login but I got an error :

  `ERROR:`

  `firebase : File C:\Users\Sai\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see 
about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170`

  `SOLUTION :`

  `Temp solution: Execute the below commond on your terminal 
  Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser`

1. Firebase Login - `firebase login`
2. Initialize Firebase - `firebase init`, then select hosting,
   - Then `npm run build`
3. Deploy command - `firebase deploy`

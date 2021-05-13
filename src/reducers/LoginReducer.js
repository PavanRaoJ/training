
 const defaultState= {
  token:"",
  id: "",
  userName: "",
  profilePic: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  role: "",
  dob: "",
  age: ""
}



export default function LoginReducer(state=defaultState,action)
{
  // console.log(state)
  switch(action.type){

    case "set_log_in_details":
      console.log(action.payload)

      return ( {...state,
        id:action.payload._id,
        userName: action.payload.userName,
        profilePic: action.payload.profilePic,
        email: action.payload.email,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        role: action.payload.role,
        dob: action.payload.dob,
        age: action.payload.age,
        token:action.payload.token
      }) ;

      
      default:return state
  }
}


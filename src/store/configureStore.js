import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photo from "../Components/photo/photoredux";
import token from "./token"
import user from "./user"
import feed from "./feed"
import ui from "./ui";
import { photoPost } from "./Photopost";



const reducer = combineReducers({ photo, token, user, feed, ui, photoPost });

const store = configureStore({reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store
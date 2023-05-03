import {Home} from "@/components/Home/Home";
import {loadRestaurantIfNotExisted} from "@/store/entities/restaurant/middlewares/loadRestaurantIfNotExisted";
import {selectIsRestaurantLoading} from "@/store/entities/restaurant/selectors";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadUserIfNotExisted} from "@/store/entities/user/thunk/loadUserIfNotExisted";
import {selectIsUserLoading} from "@/store/entities/user/selectors";

export const HomeContainer = () => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const isUserLoading = useSelector(selectIsUserLoading);
  const dispatch = useDispatch();

  console.log('home')

  useEffect(() => {
    dispatch(loadRestaurantIfNotExisted());
    dispatch(loadUserIfNotExisted())
  }, [dispatch]);

  if (isRestaurantLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  return <Home/>;
};

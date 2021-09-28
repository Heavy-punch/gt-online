import { GENDER_OPTIONS } from "constants/global";

export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};

export const generateSchoolSelectOption = (arr) => {
  let options;
  if (Array.isArray(arr)) {
    options = [...Array(arr.length)];
    arr.map(
      (item, index) =>
        (options[index] = { value: item.school_name, label: item.school_name })
    );
  } else return [];
  return options;
};

export const generateEmployerSelectOption = (arr) => {
  let options;
  if (Array.isArray(arr)) {
    options = [...Array(arr.length)];
    arr.map(
      (item, index) =>
        (options[index] = {
          value: item.employer_name,
          label: item.employer_name,
        })
    );
  } else return [];
  return options;
};

//check object properties is not fullfilled
export const checkDisable = (arrayOfObject) => {
  for (let i = 0; i < arrayOfObject.length; i++) {
    // if (values[name][i].school === '' || values[name][i].graduate === '') return true
    for (let prop in arrayOfObject[i]) {
      if (arrayOfObject[i][prop] === "") return true;
    }
  }
  return false;
};

export const checkEducationDisable = (arrayOfObject) => {
  for (let i = 0; i < arrayOfObject.length; i++) {
    if (arrayOfObject[i].school === "") return true;
  }
  return false;
};

//check touched
export const checkFieldTouched = (obj, keyWord) => {
  for (let prop in obj) {
    // console.log(prop)
    // console.log(keyWord)
    // console.log(prop.match(keyWord))
    if (obj[prop] && Boolean(prop.match(keyWord))) return true;
  }
  return false;
};

//tranform data for user list
export const tranformUserData = (userList) => {
  return userList?.map((item, index) => {
    return {
      ...item,
      firstName: item.first_name,
      lastName: item.last_name,
      currentCity: item.current_city,
    };
  });
};

//tranform data for friend list
export const tranformFriendListData = (friendList) => {
  if (!Array.isArray(friendList)) return [];
  return friendList?.map((item, index) => {
    return {
      ...item,
      firstName: item.first_name || item.friend_email,
      lastName: item.last_name || item.friend_email,
      relationship: item.relationship,
      connectedSince: item.date_connected,
      email: item.friend_email,
    };
  });
};

//tranform data for profile
export const tranformProfileData = (profile) => {
  return (
    profile && {
      ...profile,
      firstName: profile.first_name,
      lastName: profile.last_name,
      email: profile.email,
      sex: profile.sex
        ? GENDER_OPTIONS.find((item) => item.value === profile.sex).label
        : "",
      birthday: profile.birthdate ? profile.birthdate : "",
      currentCity: profile.current_city ? profile.current_city : "",
      hometown: profile.hometown ? profile.hometown : "",
      interests: profile.interests || [],
      education: profile.education || [],
      professional: profile.professional || [],
    }
  );
};

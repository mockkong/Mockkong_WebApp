import axios from "axios";

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem('mockkong_data$$user_data'));
  return userData;
}

const getAccessToken = () => {
  const accessToken = localStorage.getItem('mockkong_data$$access_token');
  return accessToken;
}

const registerGoal = async (formData: FormData) => {
  try {
    const userData = getUserData();
    const data = {
      "userId": userData?._id, // TODO get by localhost
      "goalName": formData.get('goalName'),
      "goalTags": formData.get('goalTags').toString().split(","),
      "plan": formData.get('plan'),
      "period": formData.get('period'),
      "startedAt": new Date()
    }

    const response: any = await axios.post(_getUrl('/goal'), data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    })

    if (response?.status == '200') {
      console.log('goal then', response.data);
      return response.data;
    } else {
      console.log('fail', response);
      return false;
    }
    
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const getGoal = async (id: string) => {
  try {
    console.log('getGoal id: ' + id)
    const response: any = await axios.get(_getUrl('/goal/' + id), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      console.log('goal then', response.data);
      return response.data;
    } else {
      console.log('fail', response);
      return false;
    }
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const getMyGoals = async () => {
  try {
    const userData = getUserData();
    console.log(userData)
    const response: any = await axios.get(_getUrl('/user/' + userData._id + '/goals'), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      console.log('goal then', response.data);
      return response.data;
    } else {
      console.log('fail', response);
      return false;
    }
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

export {
  _getUrl,
  getUserData,
  getGoal,
  getMyGoals,
  registerGoal,
}
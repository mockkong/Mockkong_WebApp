import { TGoal } from "global-types";
import axios from "axios";

const _getUrl = (api: string) => {
  return process.env.NEXT_PUBLIC_SERVER_URL + api;
}

const getUserId = () => {
  const userData = JSON.parse(localStorage.getItem('mockkong_data$$user_data'));
  return userData.userId;
}

const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem('mockkong_data$$user_data'));
  return userData;
}

const getAccessToken = () => {
  const accessToken = localStorage.getItem('mockkong_data$$access_token');
  return accessToken;
}

const registerGoal = async (data: TGoal) => {
  try {
    const userId = await getUserId();
    if(!userId || !data) return false;

    const goalData: TGoal = { 
      ...data,
      "userId": userId, 
    }
    console.log('registerGoal goalData', goalData);
    
    const response: any = await axios.post(_getUrl('/goal'), goalData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    })
    if (response?.status == '200') {
      return response.data;
    } else {
      console.error('fail', response);
      return false;
    }
    
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const getGoal = async (id: string) => {
  try {
    const response: any = await axios.get(_getUrl('/goal/' + id), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      return response.data;
    } else {
      console.error('fail', response);
      return false;
    }
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const getAIRecommendGoals = async () => {
  try {
    const goal1 = await getGoal("61e011dc5f9a235adc2561ca");
    // const goal2 = await getGoal("61e011dc5f9a235adc2561ca");
    // const goal3 = await getGoal("61e011dc5f9a235adc2561ca");
    return [goal1];
  } catch (error) {
    console.error('catch', error);
    return [];
  }
}

const getMyGoals = async () => {
  try {
    const userData = getUserData();
    const response: any = await axios.get(_getUrl('/user/' + userData.userId + '/goals'), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      return response.data;
    } else {
      console.error('fail', response);
      return false;
    }
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const deleteGoal = async (_id: string) => {
  try {
    const response: any = await axios.delete(_getUrl('/goal/' + _id), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      return response.data;
    } else {
      console.error('fail', response);
      return false;
    }
  } catch (error) {
    console.error('catch', error);
    return false;
  }
}

const getUserDetail = async (userId: string) => {
  try {
    const response: any = await axios.get(_getUrl(`/user?user_id=${userId}`), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      },
    });

    if (response?.status == '200') {
      return response.data;
    } else {
      console.error('fail', response);
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
  getAIRecommendGoals,
  getMyGoals,
  getGoal,
  registerGoal,
  deleteGoal,
  getUserDetail,
}
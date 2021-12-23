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
    const goal1 = await getGoal("61c074eccd6310442a08d4fb");
    const goal2 = await getGoal("61c10428b336ceb175668bab");
    const goal3 = await getGoal("61c4a71f4315b849b6912bd3");
    return [goal1, goal2, goal3];
  } catch (error) {
    console.error('catch', error);
    return [];
  }
}

const getMyGoals = async () => {
  try {
    const userData = getUserData();
    const response: any = await axios.get(_getUrl('/user/' + userData._id + '/goals'), {
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
  registerGoal,
  getGoal,
}
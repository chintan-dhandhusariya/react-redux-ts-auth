const CHINTAN = {
  firstName: "Chintan",
  lastName: "Dhandhusariya",
  email: "dhandhusariyachintan@gmail.com"
};
const PASSWORD = "alohomora";

export interface IUser {
  firstName: string,
  lastName: string,
  email: string
}

interface ILoginResponse {
  status: number,
  data: IUser
}

interface ILoginRequest {
  password: string
}


function login(reqBody: ILoginRequest): Promise<ILoginResponse> {
	return new Promise<ILoginResponse>((resolve, reject) => {
		if (reqBody.password === PASSWORD) {
			setTimeout(() => resolve({ status: 200, data: CHINTAN }), 500);
		} else {
			setTimeout(
				() => reject({ status: 401, data: { message: "Incorrect Password" } }),
				1000
			);
		}
	});
}

const API = {
  login
};

export default API;

# Wander App

# Requirement

- Using React Navite CLI [here](https://reactnative.dev/docs/environment-setup)
- Using Android SDK Platform 33, please check and install before start
- Using Device have Play Store. See image below

![image](https://user-images.githubusercontent.com/81768181/233774679-ae015fa7-9913-43a6-8f98-16260336f724.png)

# After start

- Get ip address to link with backend
  In the terminal run

```
ipconfig
```

find IPv4 Address. See image below

![image](https://user-images.githubusercontent.com/81768181/230774693-2e37f803-3796-489e-9318-94921eec0cf3.png)

copy IPv4 and replace value in `IP_ADDRESS` at `lib/configs.ts`

# Start Project

- Install package: Open terminal and run code

```
npm install
```

- Start Metro

```
npm start
```

- Run project in virtual device

Use android device (I just config in android device. If you run in a ios device maybe you have error)

```
npm run android
```

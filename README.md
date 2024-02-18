The [**Mock System Design Interview**] App is a [**React Native**](https://reactnative.dev) application designed to simulate system design interviews. The app enables users to interact with a chat-based interface powered by GPT (Generative Pre-trained Transformer) for question and answer sessions. Moreover, it incorporates a unique [**speech recognition feature**] that allows users to respond to interview questions verbally. The app also utilizes [**Text-to-Speech**] to ask users questions or queries, providing a comprehensive interview experience.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now add the OpenAI api key secret to connect to ChatGPT for chat completions.

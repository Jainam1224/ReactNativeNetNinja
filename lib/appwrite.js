import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6831f00a001b8e847623")
  .setPlatform("dev.jainam.selfie");

// we are creating an instance of client (project - appwrite) and
// interacting with backend for authentication and avatars
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

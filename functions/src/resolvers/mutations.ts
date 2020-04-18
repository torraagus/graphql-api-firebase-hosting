import User from "../models/User";
import { formatError } from "../errors";

export const mutations_r = {
  createTask(_: any, { input }: any) {
    return input ? "Task created" : "Error";
  },
  async createUser(_: any, { input }: any) {
    const newUser = new User(input);
    try {
      await newUser.save();
      return "User saved!";
    } catch (e) {
      return formatError(e.errors);
    }
  },
};

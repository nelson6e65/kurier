import { Resource } from "../jsonapi-ts";
import User from "./user";
import Article from "./article";

export default class Vote extends Resource {
  static schema = {
    primaryKeyName: "_Id",
    attributes: {
      points: Number,
      created_on: String,
      updated_on: String,
      updated_by: Number,
      created_by: Number
    },

    relationships: {
      author: {
        type: () => User,
        belongsTo: true,
        foreignKeyName: "user_id"
      },
      article: {
        type: () => Article,
        belongsTo: true,
        foreignKeyName: "article_id"
      }
    }
  };
}
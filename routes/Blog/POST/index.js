import {
  createNewBlogPost,
  editSingleBlogPost,
} from "../../../controllers/blogControllers.js";
import { requireAuth } from "../../../middlewares/index.js";

export const POST = (router) => {
  /**
   * CREATE A NEW BLOG DOCUMENT TO THE MONGODB DATABASE
   * @param REQUEST_METHOD: POST - TYPE OF REQUEST
   */
  router.post("/", requireAuth, createNewBlogPost);

  /**
   * EDIT A SINGLE BLOG POST DOCUMENT
   * @param REQUEST_METHOD: POST - TYPE OF REQUEST
   *
   */
  router.post("/edit/:id", requireAuth, editSingleBlogPost);
};

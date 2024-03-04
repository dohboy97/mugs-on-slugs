import { z } from "zod";
import User from "~/models/User";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
  setData: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async () => {
      const userModelData = await User.create({
        firstName: "test",
        email: "test@email.com",
      });
      return {
        greeting: userModelData,
      };
    }),
});

export default userRouter;

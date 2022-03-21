import { extendType, nonNull, stringArg } from "nexus";

export const createLinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createLink", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },

      resolve(parent, args, context) {
        const { description, url } = args;
        const { userId } = context;
        if (!userId) {
          throw new Error("Cannot post without logging in.");
        }

        const newLink = context.prisma.link.create({
          data: {
            description: description,
            url: url,
            postedBy: { connect: { id: userId } },
          },
        });

        return newLink;
      },
    });
  },
});

import { extendType, nonNull, stringArg } from "nexus";
import { links } from "../fixtures/links";

export const createLinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createLink", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },

      resolve(parent, args) {
        const { description, url } = args;
        const idCount = links.length + 1;

        const link = {
          id: idCount,
          description: description,
          url: url,
        };
        links.push(link);
        return link;
      },
    });
  },
});

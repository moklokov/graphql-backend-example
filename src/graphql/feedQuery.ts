import { extendType } from "nexus";

export const LinksQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      async resolve(parent, args, context) {
        return context.prisma.link.findMany();
      },
    });
  },
});

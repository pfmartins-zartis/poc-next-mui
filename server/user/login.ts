import { IUser } from "@/client/contexts/user/user.types";

export const login = async (): Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(resolve, 2000, {
      userName: "Test User",
      suportID: "123456",
      brandsOfInterest: [
        {
          name: "GEICO",
          id: "geico-id",
          slug: "ACL",
          thumbnail:
            "https://dueshe9nqxhg.cloudfront.net/brand/ALC/ALC_medium.png",
        },
      ],
    }),
  );

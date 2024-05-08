import { useUserContext } from "@/client/contexts/user/user";
import { IBrand } from "@/client/contexts/user/user.types";
import { isEmpty } from "lodash";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MenuPanel } from "./components/MenuPanel";
import { MenuContent } from "./components/MenuPanel.types";

const getMenu = (selectedSubject: IBrand): MenuContent => {
  const basepath = isEmpty(selectedSubject)
    ? ""
    : `/dashboard/${selectedSubject["subject-type"]}/${selectedSubject.slug}`;
  return [
    {
      itemType: "section",
      sectionType: "thumbnail",
      src: selectedSubject.thumbnail,
      label: selectedSubject.name,
      path: basepath,
    },
    {
      itemType: "section",
      sectionType: "nav",
      children: [
        {
          itemType: "link",
          label: "Overview",
          path: basepath,
        },
        {
          label: "Media Measurement",
          itemType: "group",
          groupType: "accordion",
          children: [
            {
              itemType: "group",
              groupType: "list",
              label: "NATIONAL LINEAR",
              children: [
                {
                  itemType: "link",
                  label: "Airings",
                  path: `${basepath}/global-linear/airings`,
                },
                {
                  itemType: "link",
                  label: "Spots",
                  path: `${basepath}/global-linear/spots`,
                },
                {
                  itemType: "link",
                  label: "Creatives",
                  path: `${basepath}/global-linear/creatives`,
                },
                {
                  itemType: "link",
                  label: "Networks",
                  path: `${basepath}/global-linear/networks`,
                },
                {
                  itemType: "link",
                  label: "Show Genres",
                  path: `${basepath}/global-linear/show-genres`,
                },
                {
                  itemType: "link",
                  label: "Shows",
                  path: `${basepath}/global-linear/shows`,
                },
                {
                  itemType: "link",
                  label: "Dayparts",
                  path: `${basepath}/global-linear/dayparts`,
                },
                {
                  itemType: "link",
                  label: "Media Market",
                  path: `${basepath}/global-linear/media-market`,
                },
              ],
            },
            {
              itemType: "group",
              groupType: "list",
              label: "STREAMING",
              children: [
                {
                  itemType: "link",
                  label: "Learn More",
                  path: `${basepath}/streaming`,
                },
              ],
            },
            {
              itemType: "group",
              groupType: "list",
              label: "LOCAL BROADCAST",
              children: [
                {
                  itemType: "link",
                  label: "Airings",
                  path: `${basepath}/local-linear/airings`,
                },
              ],
            },
          ],
        },
        {
          label: "Attention Analytics",
          itemType: "group",
          groupType: "accordion",
          children: [
            {
              itemType: "link",
              label: "Creative Wear",
              path: `${basepath}/attention-creative-wear`,
            },
            {
              itemType: "link",
              label: "Airings",
              path: `${basepath}/attention-airings`,
            },
            {
              itemType: "link",
              label: "Spot",
              path: `${basepath}/attention-spot`,
            },
            {
              itemType: "link",
              label: "Brands",
              path: `${basepath}/attention-brands`,
            },
            {
              itemType: "link",
              label: "Industries",
              path: `${basepath}/attention-industries`,
            },
            {
              itemType: "link",
              label: "Networks",
              path: `${basepath}/attention-networks`,
            },
            {
              itemType: "link",
              label: "Shows",
              path: `${basepath}/attention-shows`,
            },
          ],
        },
      ],
    },
  ];
};

export const HomeMenu = () => {
  const { user } = useUserContext();
  const pathname = usePathname();

  const menuContent = useMemo(() => {
    if (isEmpty(user.selectedSubject)) {
      return [];
    }

    return getMenu(user.selectedSubject);
  }, [user]);
  return <MenuPanel menu={menuContent} pathname={pathname} />;
};

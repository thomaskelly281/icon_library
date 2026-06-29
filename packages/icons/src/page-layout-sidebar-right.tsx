import { mdiPageLayoutSidebarRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLayoutSidebarRight(props: IconComponentProps) {
  return <Icon path={mdiPageLayoutSidebarRight} {...props} />;
}

export { mdiPageLayoutSidebarRight as path };

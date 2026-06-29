import { mdiPageLayoutSidebarLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLayoutSidebarLeft(props: IconComponentProps) {
  return <Icon path={mdiPageLayoutSidebarLeft} {...props} />;
}

export { mdiPageLayoutSidebarLeft as path };

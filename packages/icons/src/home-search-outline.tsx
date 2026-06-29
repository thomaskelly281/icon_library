import { mdiHomeSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeSearchOutline} {...props} />;
}

export { mdiHomeSearchOutline as path };

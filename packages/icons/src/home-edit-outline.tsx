import { mdiHomeEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeEditOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeEditOutline} {...props} />;
}

export { mdiHomeEditOutline as path };

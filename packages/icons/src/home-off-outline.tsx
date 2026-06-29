import { mdiHomeOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeOffOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeOffOutline} {...props} />;
}

export { mdiHomeOffOutline as path };

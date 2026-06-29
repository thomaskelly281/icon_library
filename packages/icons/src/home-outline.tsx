import { mdiHomeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeOutline} {...props} />;
}

export { mdiHomeOutline as path };

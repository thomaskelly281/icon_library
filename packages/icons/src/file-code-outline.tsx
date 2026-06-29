import { mdiFileCodeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCodeOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCodeOutline} {...props} />;
}

export { mdiFileCodeOutline as path };

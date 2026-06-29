import { mdiFileKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiFileKeyOutline} {...props} />;
}

export { mdiFileKeyOutline as path };

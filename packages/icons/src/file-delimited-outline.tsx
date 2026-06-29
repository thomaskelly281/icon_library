import { mdiFileDelimitedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileDelimitedOutline(props: IconComponentProps) {
  return <Icon path={mdiFileDelimitedOutline} {...props} />;
}

export { mdiFileDelimitedOutline as path };

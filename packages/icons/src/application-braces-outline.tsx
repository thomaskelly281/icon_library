import { mdiApplicationBracesOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationBracesOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationBracesOutline} {...props} />;
}

export { mdiApplicationBracesOutline as path };

import { mdiApplicationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationOutline} {...props} />;
}

export { mdiApplicationOutline as path };

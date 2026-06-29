import { mdiApplicationEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationEditOutline(props: IconComponentProps) {
  return <Icon path={mdiApplicationEditOutline} {...props} />;
}

export { mdiApplicationEditOutline as path };

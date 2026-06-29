import { mdiBookEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookEditOutline(props: IconComponentProps) {
  return <Icon path={mdiBookEditOutline} {...props} />;
}

export { mdiBookEditOutline as path };

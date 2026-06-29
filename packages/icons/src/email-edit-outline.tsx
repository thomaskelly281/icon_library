import { mdiEmailEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailEditOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailEditOutline} {...props} />;
}

export { mdiEmailEditOutline as path };

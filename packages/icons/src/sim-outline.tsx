import { mdiSimOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimOutline(props: IconComponentProps) {
  return <Icon path={mdiSimOutline} {...props} />;
}

export { mdiSimOutline as path };

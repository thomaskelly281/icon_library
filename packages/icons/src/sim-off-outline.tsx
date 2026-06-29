import { mdiSimOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SimOffOutline(props: IconComponentProps) {
  return <Icon path={mdiSimOffOutline} {...props} />;
}

export { mdiSimOffOutline as path };

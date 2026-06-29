import { mdiSpaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpaOutline(props: IconComponentProps) {
  return <Icon path={mdiSpaOutline} {...props} />;
}

export { mdiSpaOutline as path };

import { mdiDecagramOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DecagramOutline(props: IconComponentProps) {
  return <Icon path={mdiDecagramOutline} {...props} />;
}

export { mdiDecagramOutline as path };

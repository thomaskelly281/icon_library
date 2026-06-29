import { mdiFileWordBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileWordBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiFileWordBoxOutline} {...props} />;
}

export { mdiFileWordBoxOutline as path };

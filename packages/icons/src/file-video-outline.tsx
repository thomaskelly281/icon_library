import { mdiFileVideoOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileVideoOutline(props: IconComponentProps) {
  return <Icon path={mdiFileVideoOutline} {...props} />;
}

export { mdiFileVideoOutline as path };

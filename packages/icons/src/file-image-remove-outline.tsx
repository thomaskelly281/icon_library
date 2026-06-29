import { mdiFileImageRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImageRemoveOutline} {...props} />;
}

export { mdiFileImageRemoveOutline as path };

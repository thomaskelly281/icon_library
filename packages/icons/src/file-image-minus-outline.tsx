import { mdiFileImageMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImageMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImageMinusOutline} {...props} />;
}

export { mdiFileImageMinusOutline as path };

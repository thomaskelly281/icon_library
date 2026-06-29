import { mdiFileWordOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileWordOutline(props: IconComponentProps) {
  return <Icon path={mdiFileWordOutline} {...props} />;
}

export { mdiFileWordOutline as path };

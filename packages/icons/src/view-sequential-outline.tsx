import { mdiViewSequentialOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewSequentialOutline(props: IconComponentProps) {
  return <Icon path={mdiViewSequentialOutline} {...props} />;
}

export { mdiViewSequentialOutline as path };

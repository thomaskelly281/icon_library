import { mdiPlayBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlayBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiPlayBoxOutline} {...props} />;
}

export { mdiPlayBoxOutline as path };

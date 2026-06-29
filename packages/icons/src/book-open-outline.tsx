import { mdiBookOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiBookOpenOutline} {...props} />;
}

export { mdiBookOpenOutline as path };

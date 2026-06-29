import { mdiViewCompactOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewCompactOutline(props: IconComponentProps) {
  return <Icon path={mdiViewCompactOutline} {...props} />;
}

export { mdiViewCompactOutline as path };

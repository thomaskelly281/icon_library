import { mdiHomeRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeRemoveOutline} {...props} />;
}

export { mdiHomeRemoveOutline as path };

import { mdiLampsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LampsOutline(props: IconComponentProps) {
  return <Icon path={mdiLampsOutline} {...props} />;
}

export { mdiLampsOutline as path };

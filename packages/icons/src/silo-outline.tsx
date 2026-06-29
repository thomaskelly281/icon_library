import { mdiSiloOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SiloOutline(props: IconComponentProps) {
  return <Icon path={mdiSiloOutline} {...props} />;
}

export { mdiSiloOutline as path };

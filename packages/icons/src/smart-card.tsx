import { mdiSmartCard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCard(props: IconComponentProps) {
  return <Icon path={mdiSmartCard} {...props} />;
}

export { mdiSmartCard as path };

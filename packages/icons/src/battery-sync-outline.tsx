import { mdiBatterySyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BatterySyncOutline(props: IconComponentProps) {
  return <Icon path={mdiBatterySyncOutline} {...props} />;
}

export { mdiBatterySyncOutline as path };

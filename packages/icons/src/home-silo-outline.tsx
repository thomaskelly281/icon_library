import { mdiHomeSiloOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSiloOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeSiloOutline} {...props} />;
}

export { mdiHomeSiloOutline as path };

import { mdiDresserOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DresserOutline(props: IconComponentProps) {
  return <Icon path={mdiDresserOutline} {...props} />;
}

export { mdiDresserOutline as path };

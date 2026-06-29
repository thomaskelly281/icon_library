import { mdiAccountWrenchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountWrenchOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountWrenchOutline} {...props} />;
}

export { mdiAccountWrenchOutline as path };

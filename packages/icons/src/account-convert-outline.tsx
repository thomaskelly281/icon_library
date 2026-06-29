import { mdiAccountConvertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountConvertOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountConvertOutline} {...props} />;
}

export { mdiAccountConvertOutline as path };

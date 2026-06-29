import { mdiSmartCardReaderOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SmartCardReaderOutline(props: IconComponentProps) {
  return <Icon path={mdiSmartCardReaderOutline} {...props} />;
}

export { mdiSmartCardReaderOutline as path };

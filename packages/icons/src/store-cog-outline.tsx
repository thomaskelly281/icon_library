import { mdiStoreCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StoreCogOutline(props: IconComponentProps) {
  return <Icon path={mdiStoreCogOutline} {...props} />;
}

export { mdiStoreCogOutline as path };

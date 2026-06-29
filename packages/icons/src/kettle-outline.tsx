import { mdiKettleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleOutline(props: IconComponentProps) {
  return <Icon path={mdiKettleOutline} {...props} />;
}

export { mdiKettleOutline as path };

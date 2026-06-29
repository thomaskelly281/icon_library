import { mdiHomeImportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeImportOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeImportOutline} {...props} />;
}

export { mdiHomeImportOutline as path };

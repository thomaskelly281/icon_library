import { mdiHomeExportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeExportOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeExportOutline} {...props} />;
}

export { mdiHomeExportOutline as path };

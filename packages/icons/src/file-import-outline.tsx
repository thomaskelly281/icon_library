import { mdiFileImportOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImportOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImportOutline} {...props} />;
}

export { mdiFileImportOutline as path };

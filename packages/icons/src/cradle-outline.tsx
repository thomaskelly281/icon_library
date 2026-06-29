import { mdiCradleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CradleOutline(props: IconComponentProps) {
  return <Icon path={mdiCradleOutline} {...props} />;
}

export { mdiCradleOutline as path };

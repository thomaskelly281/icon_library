import { mdiFileSendOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileSendOutline(props: IconComponentProps) {
  return <Icon path={mdiFileSendOutline} {...props} />;
}

export { mdiFileSendOutline as path };

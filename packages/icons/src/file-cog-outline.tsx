import { mdiFileCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCogOutline(props: IconComponentProps) {
  return <Icon path={mdiFileCogOutline} {...props} />;
}

export { mdiFileCogOutline as path };

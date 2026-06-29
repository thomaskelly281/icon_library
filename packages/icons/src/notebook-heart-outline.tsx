import { mdiNotebookHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookHeartOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookHeartOutline} {...props} />;
}

export { mdiNotebookHeartOutline as path };

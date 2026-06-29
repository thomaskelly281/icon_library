import { mdiNotebookRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookRemoveOutline} {...props} />;
}

export { mdiNotebookRemoveOutline as path };

import { mdiNotebookEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookEditOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookEditOutline} {...props} />;
}

export { mdiNotebookEditOutline as path };

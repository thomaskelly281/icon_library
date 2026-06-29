import { mdiNotebookOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookOutline} {...props} />;
}

export { mdiNotebookOutline as path };

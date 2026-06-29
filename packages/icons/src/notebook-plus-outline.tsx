import { mdiNotebookPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NotebookPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiNotebookPlusOutline} {...props} />;
}

export { mdiNotebookPlusOutline as path };
